import React from 'react'

import "./navbar.css"
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
const {pathname}=useLocation()

  return (
    <div className='navbar'>
      <NavLink to="/" id='home'>


    <h2>Student <span className='sp'><b>Helper</b></span></h2>
      </NavLink>  
    <ul>
     <>
     <div className="nav">
       {/* <li><NavLink to="/datesheet" >Datesheet</NavLink></li>
     <li><NavLink to="/questionpaper" >E-Question Papers</NavLink></li>
     <li><NavLink to="/Scorecard" >Scorecard</NavLink></li>
     <li><NavLink to="/contact" >Contact</NavLink></li>
     <li><NavLink to="/register" className= "btn">Login</NavLink></li> */}
 
    
        </div>
     </>
    </ul>
    </div>
  )
}

export default Navbar