import React, { useState, useEffect } from "react";
import { listBookings, updateBookingStatus } from "../../services/CateringServices";
import 'bootstrap/dist/css/bootstrap.min.css';



const BookingDashBoard = () => {
    const [bookings, setBookings] = useState([]); // State to store bookings

    // Fetch bookings on component mount
    useEffect(() => {
        getAllBookings();
    }, []);

    const getAllBookings = () => {
        listBookings()
            .then((response) => {
                setBookings(response.data);
            })
            .catch((error) => {
                console.error("Error fetching bookings:", error);
            });
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
        <div className="container">
            <div>
                <h2 className="text-center">List of New Orders</h2>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Customer Name</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((slot) => (
                            <tr key={slot.bookingId}>
                                <td>{slot.bookingId}</td>
                                <td>{slot.customerName}</td>
                                <td>{slot.mobileNo}</td>
                                <td>{slot.address}</td>
                                <td>{slot.bookingDate}</td>
                                <td>
                                    <select
                                        className="form-select"
                                        value={slot.status}
                                        onChange={(e) =>
                                            handleStatusChange(slot.bookingId, e.target.value)
                                        }
                                    >
                                        <option value="PENDING">PENDING</option>
                                        <option value="ACCEPTED">ACCEPTED</option>
                                        <option value="REJECTED">REJECTED</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingDashBoard;
