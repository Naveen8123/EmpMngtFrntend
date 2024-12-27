import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { updateBookingStatus } from "../../services/CateringServices";

const PaginatedAndSortedBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize] = useState(10); // Adjust page size as needed
    const [totalPages, setTotalPages] = useState(0);
    const [sortField, setSortField] = useState("bookingId"); // Default sort field
    const [loading, setLoading] = useState(false);

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:8080/api/paginationAndSort/${currentPage}/${pageSize}/${sortField}`
            );
            const bookingData = response.data.response;
            setBookings(bookingData.content);
            setTotalPages(bookingData.totalPages);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, [currentPage, sortField]);

    const handleSort = (field) => {
        setSortField(field);
        setCurrentPage(0); // Reset to the first page when changing the sort field
    };

    const handlePrevious = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    const handleStatusChange = (bookingId, newStatus) => {
        updateBookingStatus(bookingId, newStatus)
            .then((response) => {
                setBookings((prevBookings) =>
                    prevBookings.map((booking) =>
                        booking.bookingId === bookingId
                            ? { ...booking, status: newStatus }
                            : booking
                    )
                );
            })
            .catch((error) => console.error("Error updating booking status:", error));
    };

    // Download PDF function
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text("Booking Details", 14, 10);

        const columns = ["Id", "Customer Name", "Mobile", "Address", "Booking Date", "Booked On", "Status"];
        const rows = bookings.map((booking) => [
            booking.bookingId,
            booking.customerName,
            booking.mobileNo,
            booking.address,
            booking.bookingDate,
            booking.bookedOn,
            booking.status,
        ]);

        doc.autoTable({ head: [columns], body: rows });
        doc.save("BookingDetails.pdf");
    };

    // Download Excel function
    const downloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(bookings);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "BookingDetails");
        XLSX.writeFile(workbook, "BookingDetails.xlsx");
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Paginated and Sorted Booking List</h2>
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <>
                    <div className="d-flex justify-content-between mb-3">
                        <button className="btn btn-danger" onClick={downloadPDF}>
                            Download in PDF
                        </button>
                        <button className="btn btn-success" onClick={downloadExcel}>
                            Download in Excel
                        </button>
                    </div>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th onClick={() => handleSort("bookingId")}>Id</th>
                                <th onClick={() => handleSort("customerName")}>Customer Name</th>
                                <th onClick={() => handleSort("mobileNo")}>Mobile</th>
                                <th onClick={() => handleSort("address")}>Address</th>
                                <th onClick={() => handleSort("bookingDate")}>Booking Date</th>
                                <th onClick={() => handleSort("bookedOn")}>Booked On</th>
                                <th onClick={() => handleSort("status")}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length > 0 ? (
                                bookings.map((booking) => (
                                    <tr key={booking.bookingId}>
                                        <td>{booking.bookingId}</td>
                                        <td>{booking.customerName}</td>
                                        <td>{booking.mobileNo}</td>
                                        <td>{booking.address}</td>
                                        <td>{booking.bookingDate}</td>
                                        <td>{booking.bookedOn}</td>
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
                                    <td colSpan="7" className="text-center">
                                        No bookings found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <button
                            className="btn btn-primary"
                            onClick={handlePrevious}
                            disabled={currentPage === 0}
                        >
                            {"<"} Previous
                        </button>
                        <span>
                            Page {currentPage + 1} of {totalPages}
                        </span>
                        <button
                            className="btn btn-primary"
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                        >
                            Next {">"}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default PaginatedAndSortedBookings;
