import axios from "axios";

// const REST_API_BASE_URL="http://localhost:8080/api/allBookingList"

// export const listBookings = ()=> axios.get(REST_API_BASE_URL);
// export const updateStatus = (bookingId, status) => axios.put(REST_API_BASE_URL+ '/' + bookingId, status)

const REST_API_BASE_URL = "http://localhost:8080/api";

export const listBookings = () => axios.get(`${REST_API_BASE_URL}/allBookingList`);

// export const newBookings = (booking) => axios.post(`${REST_API_BASE_URL}/bookingSlots`,booking);
export const newBookings = (booking) => {
  return axios.post(`${REST_API_BASE_URL}/bookingSlots`, booking, {
    headers: { 'Content-Type': 'application/json' }
  });
};

export const updateBookingStatus = (id, status) =>
  axios.put(`${REST_API_BASE_URL}/updateStatus/${id}`, null, {
    params: { status },
  });

export const fetchPaginatedData = async (offset, pageSize) => {
  try{
  const response= await axios.get(`http://localhost:8080/api/pagination/${offset}/${pageSize}`);
  return response.data;
  }catch (error){
    console.error("Error fetching paginated data", error);
    throw error;
  }
};
