
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmpComponent from './components/ListEmpComponent'
import AddEmpComponent from './components/AddEmpComponent'
import BookingDashBoard from './components/cateringServiceComponent/BookingDashBoard'
import HomeComponent from './components/cateringServiceComponent/HomeComponent'
import AddBookingComponent from './components/cateringServiceComponent/AddBookingComponent'
// import BookingDashBoard from './components/cateringServiceComponent/BookingSlot1'
import LoginComponent from './components/cateringServiceComponent/LoginComponent'
import { useState } from 'react'
import PaginatedBookings from './components/cateringServiceComponent/PaginatedBookings'
import PaginatedAndSortedBookings from './components/cateringServiceComponent/PaginatedAndSortedBookings'
function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
    <BrowserRouter>
       <HeaderComponent isLogged={isLogged} setIsLogged={setIsLogged}/>
       <Routes>
        <Route path='/home' element={<HomeComponent/>}></Route>
        <Route path='/newBooking' element={<AddBookingComponent/>}></Route>
        <Route path='/login' element={<LoginComponent setIsLogged={setIsLogged}/>}></Route>
        <Route path='/' element={<ListEmpComponent/>}> </Route>
        <Route path='/employees' element={<ListEmpComponent/>}> </Route> 
        <Route path='/add-employee' element={<AddEmpComponent/>}></Route>
        <Route path='/edit-employee/:id' element={<AddEmpComponent/>}></Route>
        <Route path='/dashboard' element={<BookingDashBoard/>}></Route>
        <Route path='/pagination' element={<PaginatedBookings/>}></Route>
        <Route path='paginationAndsort' element={<PaginatedAndSortedBookings/>}></Route>
        {/* <Route path='/dashboard' element={<BookingDashBoard/>}></Route> */}
       </Routes>
       
       <FooterComponent/>
    
    </BrowserRouter>
     
      
    
    </>
  )
}


export default App
