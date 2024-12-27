
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmpComponent from './components/ListEmpComponent'
import AddEmpComponent from './components/AddEmpComponent'
import BookingDashBoard from './components/cateringServiceComponent/BookingDashBoard'
import HomeComponent from './components/HomeComponent'
import AddBookingComponent from './components/cateringServiceComponent/AddBookingComponent'
// import BookingDashBoard from './components/cateringServiceComponent/BookingSlot1'
import LoginComponent from './components/cateringServiceComponent/LoginComponent'
import { useState } from 'react'
import PaginatedBookings from './components/cateringServiceComponent/PaginatedBookings'
import PaginatedAndSortedBookings from './components/cateringServiceComponent/PaginatedAndSortedBookings'
import MainCarousel from './components/homeCarousel/MainCarousel'
import AboutUs from './components/AboutUsComponent'
import ContactUs from './components/ContactUsComponent'
import Login from './components/cateringServiceComponent/Login'

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
    <BrowserRouter>
       <HeaderComponent isLogged={isLogged} setIsLogged={setIsLogged}/>
       <Routes>
       {/* <Route path='/' element={<MainCarousel/>}> </Route>
        <Route path='/home' element={<MainCarousel/>}></Route> */}
        <Route path='/' element={<HomeComponent/>}> </Route>
        <Route path='/home' element={<HomeComponent/>}></Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<HomeComponent />} />
        <Route path='/newBooking' element={<AddBookingComponent/>}></Route>
        {/* <Route path='/login' element={<LoginComponent setIsLogged={setIsLogged}/>}></Route> */}
        <Route path='/login' element={<Login/>}></Route>
        {/* <Route path='/' element={<ListEmpComponent/>}> </Route> */}
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
