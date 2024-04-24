import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./teacher.css"
function TeacherAssistent() {
  const {pathname}=useLocation()

  
  
    return (
      <div className='navbar'>
        <NavLink to="/" id='home'>
  
  
      <h2>Exam<span className='sp'><b>xter</b></span></h2>
        </NavLink>
      <ul>
       <>
       <div className="nav">
         <li className="dropdown" ><NavLink to="/datesheet" >Datesheet</NavLink>
         <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
         </li>
       <li><NavLink to="/questionpaper" >E-Question Papers</NavLink></li>
       <li><NavLink to="/Scorecard" >Scorecard</NavLink></li>
       <li><NavLink to="/contact" >Contact</NavLink></li>
       <li><NavLink to="/register" className= "btn">Logout</NavLink></li>
   
      
          </div>
       </>
      </ul>
      </div>
    )
  }
  

export default TeacherAssistent