import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newBookings } from '../../services/CateringServices';

const AddBookingComponent = () => {
const [customerName, setCustomerName] = useState('')
const [mobileNo, setMobileNo] = useState('')
const [address, setAddress] = useState('')
const [bookingDate, setBookingDate] = useState('')

  const [errors, setErrors] = useState({
    customerName: '',
    mobileNo: '',
    address: '',
    bookingDate: '',
  });

  const navigator = useNavigate();



  const submitFormData = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
  
        const newBooking = { customerName, mobileNo, address, bookingDate }
        console.log(newBooking);
  
             newBookings(newBooking).then((response) => {
              console.log(response.data);
              window.alert('Booking submitted successfully!');
              navigator('/newBooking')
              setCustomerName('')
              setMobileNo('')
              setAddress('')
              setBookingDate('')
            }).catch(error => {
              console.error('Error saving employee', error);
            });
        }
      }
  
    function validateForm() {
      let valid = true;
  
      const errorsCopy = { ...errors };
  
      if (customerName.trim()) {
        errorsCopy.customerName = '';
      } else {
        errorsCopy.customerName = 'first name is required';
        valid = false;
      }
  
      if (mobileNo.trim()) {
        errorsCopy.mobileNo = '';
      } else {
        errorsCopy.mobileNo = 'last name is required';
        valid = false;
      }
  
      if (address.trim()) {
        errorsCopy.address = '';
      } else {
        errorsCopy.address = 'address is required';
        valid = false;
      }

      if (bookingDate) {
        errorsCopy.bookingDate = '';
      } else {
        errorsCopy.address = 'address is required';
        valid = false;
      }
  
      setErrors(errorsCopy);
      return valid;
    }

  return (
    <div className="container">
      <h2 className="text-center">Booking Form</h2>
      <form action="" className='form-group'>
        <div className="mb-3">
          <label htmlFor="custName" className="form-label">Name</label>
          <input
            type="text"
            placeholder='enter first name'
            name='customerName'
            value={customerName}
            className={`form-control ${errors.customerName ? 'is-invalid' : ''}`}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNum" className="form-label">Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            id="mobileNum"
            name="mobileNum"
            value={mobileNo}
            className={`form-control ${errors.mobileNo ? 'is-invalid' : ''}`}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
            placeholder="Enter your address"
            rows="3"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="BookingDate" className="form-label">Booking Date</label>
          <input
            type="date"
            id="BookingDate"
            name="BookingDate"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className={`form-control ${errors.bookingDate ? 'is-invalid' : ''}`}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitFormData}>Submit</button>
      </form>
    </div>
  );
}

export default AddBookingComponent;
