
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmpComponent from './components/ListEmpComponent'
import AddEmpComponent from './components/AddEmpComponent'

function App() {

  return (
    <>
    <BrowserRouter>
       <HeaderComponent/>
       <Routes>
        <Route path='/' element={<ListEmpComponent/>}> </Route>
        <Route path='/employees' element={<ListEmpComponent/>}> </Route> 
        <Route path='/add-employee' element={<AddEmpComponent/>}></Route>
        <Route path='/edit-employee/:id' element={<AddEmpComponent/>}></Route>
       </Routes>
       
       <FooterComponent/>
    
    </BrowserRouter>
     
      
    
    </>
  )
}


export default App
