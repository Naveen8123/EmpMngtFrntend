import React, { useState, useEffect } from "react";
import { fetchPaginatedData } from "../../services/CateringServices";
import { updateBookingStatus } from "../../services/CateringServices";

const PaginatedBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPaginatedData(currentPage, pageSize)
      .then((response) => {
        console.log("API Response:", response);
        const { content, totalPages } = response.response;
        setBookings(content || []); // Extract the content array
        setTotalPages(totalPages || 0); // Extract totalPages
      })
      .catch((error) => console.error("Error fetching paginated data:", error));
  }, [currentPage, pageSize]);

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handleStatusChange = (bookingId, newStatus) => {
    updateBookingStatus(bookingId, newStatus)
      .then((response) => {
        console.log("Updated Booking:", response.data);
        // Update state with the updated booking
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking.bookingId === bookingId
              ? { ...booking, status: newStatus }
              : booking
          )
        );
      })
      .catch((error) => {
        console.error("Error updating booking status:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Booking List</h2>
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-primary" onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        
          Page {currentPage + 1} of {totalPages}
        
        <button className="btn btn-primary" onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Booking Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(bookings) && bookings.length > 0 ? (
            bookings.map((booking, index,) => (
              <tr key={booking.id || index}>
                <td>{booking.bookingId}</td>
                <td>{booking.customerName}</td>
                <td>{booking.mobileNo}</td>
                <td>{booking.address}</td>
                <td>{booking.bookingDate}</td>
                {/* <td>{booking.status}</td> */}
                <td>
                  <select
                    className="form-select"
                    value={booking.status}
                    onChange={(e) =>
                      handleStatusChange(booking.bookingId, e.target.value)
                    }
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="ACCEPTED">ACCEPTED</option>
                    <option value="REJECTED">REJECTED</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No bookings found.</td>
            </tr>
          )}
        </tbody>


      </table>

    </div>
  );
};

export default PaginatedBookings;
