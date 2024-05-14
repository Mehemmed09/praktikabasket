import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Pages/HomePage'
import About from './Pages/AboutPage'
import Contact from './Pages/ContactPage'
import Driver from './Pages/DriverPage'
import Basket from './Pages/BasketPage'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element ={<Main/>}>
          <Route path='/Basket' element={<Basket/>}></Route>
       <Route path ='/Home' element={<Home/>}></Route>
       <Route path ='/About' element={<About/>}></Route>
       <Route path ='/Contact' element={<Contact/>}></Route>
       <Route path ='/Driver' element={<Driver/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
