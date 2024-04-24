import React from 'react'
import StudentLogin from"../../images/images.png"
import TALogin from"../../images/Student-Icon.png"
import teacherLogin from"../../images/teacher.png"
import { NavLink } from 'react-router-dom'
import "./cards.css"
const Cards = () => {
  return (
    <>
<div className='cards'>


<div className='card' >
  <img src={StudentLogin} alt="img" className='image' width={150}/>
  <p className="at">Login as Student</p>
  
</div>
<div className='card'  >
  <img src={TALogin} alt="img" className='image' width={150}/>
  <p className="at">Login as T.A.</p>
  
</div>
     
<div className='card'  >
  <img src={teacherLogin} alt="img" className='image' width={150}/>
  <br/>
  <p className="at">Login as Faculty</p>
  
</div>  
</div>
      
    </>
  )
}

export default Cards