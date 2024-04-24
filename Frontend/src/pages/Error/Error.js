import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <Navbar/>
    <h1 style={{textAlign:"center",marginTop:"30vh"}}>404! Page Not Found 😟</h1>
  <NavLink to="/">  <button className='btn' style={{padding:"1rem",fontSize:"1.3rem"}} >Go Back 🔙 </button></NavLink>
    <Footer/>
    </>
  )
}

export default Error