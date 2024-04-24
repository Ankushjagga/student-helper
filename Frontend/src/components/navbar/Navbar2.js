import React from 'react'
import { NavLink, useLocation ,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import "./navbar2.css"
const Navbar2 = () => {
    const navigate=useNavigate()
    const calllogoutPage= async()=>{ 
        try{
        
          const res= await fetch("/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          })
          // alert("logout sucess")
          const data = await res.json();
          console.log(data);
          if(res.status!==201){
            toast(data,{position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            type: "error",
            theme: "dark",})
            
          }
          else{
            toast(data,{position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        type:"success",

        theme: "dark",})
            navigate("/login")
    
          }
        }
        catch(err){
          console.log(err);
          // alert("you need to loin first");
        }
         
        
        }
  return (
 <>
   <div className='navbars'>
        < NavLink to="/Student" id='home'>
  
  
      <h2>Student <span className='sp'><b>Helper</b></span></h2>
        </NavLink>
      <ul>
       <>
       <div className="nav">
        
     <li>
      <div className="dropdown">
        <div className="dropbtn">E-Question Paper</div>
        <div className="dropdown-one">
          <div id="link1" className="dItem"> CSE
            <div className="dropdown-two">
            <NavLink to='/cse1st'> <div className="dItem" id="file">1st sem.</div></NavLink> 
            <NavLink to="/cse2nd">  <div className="dItem" id="file">2nd  sem.</div></NavLink>
            <NavLink to = "/cse3rd"> <div className="dItem" id="file">3rd  sem.</div></NavLink> 
           <NavLink to="/cse4th">   <div className="dItem" id="file" >4th  sem.</div></NavLink>
             <NavLink to="/cse5th"> <div className="dItem" id="file">5th  sem.</div></NavLink>
            <NavLink to="/cse6th">  <div className="dItem" id="file">6th  sem.</div></NavLink>
            <NavLink to="/cse7th"> <div className="dItem" id="file">7th  sem.</div></NavLink> 
             <NavLink to="/cse8th"><div className="dItem" id="file" >8th  sem.</div></NavLink> 
            </div>
          </div>
          <div id="link1" className="dItem" href="#">Civil
          <div className="dropdown-two">
          <NavLink to='/civil1st'> <div className="dItem" id="file">1st sem.</div></NavLink> 
            <NavLink to="/civil2nd">  <div className="dItem" id="file">2nd  sem.</div></NavLink>
            <NavLink to = "/civil3rd"> <div className="dItem" id="file">3rd  sem.</div></NavLink> 
           <NavLink to="/civil4th">   <div className="dItem" id="file" >4th  sem.</div></NavLink>
             <NavLink to="/civil5th"> <div className="dItem" id="file">5th  sem.</div></NavLink>
            <NavLink to="/civil6th">  <div className="dItem" id="file">6th  sem.</div></NavLink>
            <NavLink to="/civil7th"> <div className="dItem" id="file">7th  sem.</div></NavLink> 
             <NavLink to="/civil8th"><div className="dItem" id="file" >8th  sem.</div></NavLink> 
            </div>
          </div>
          <div className="dItem"  id="link1" href="#">Mechanical
          <div className="dropdown-two">
          <NavLink to='/mechanical1st'> <div className="dItem" id="file">1st sem.</div></NavLink> 
            <NavLink to="/mechanical2nd">  <div className="dItem" id="file">2nd  sem.</div></NavLink>
            <NavLink to = "/mechanical3rd"> <div className="dItem" id="file">3rd  sem.</div></NavLink> 
           <NavLink to="/mechanical4th">   <div className="dItem" id="file" >4th  sem.</div></NavLink>
             <NavLink to="/mechanical5th"> <div className="dItem" id="file">5th  sem.</div></NavLink>
            <NavLink to="/mechanical6th">  <div className="dItem" id="file">6th  sem.</div></NavLink>
            <NavLink to="/mechanical7th"> <div className="dItem" id="file">7th  sem.</div></NavLink> 
             <NavLink to="/mechanical8th"><div className="dItem" id="file" >8th  sem.</div></NavLink> 
            </div>
          </div>
          <div className="dItem" id="link1" href="#">Electrical
          <div className="dropdown-two">

          <NavLink to='/Electrical1st'>       <div className="dItem" id="file" >1st sem.</div></NavLink>
            <NavLink to="/Electrical2nd">  <div className="dItem" id="file">2nd  sem.</div></NavLink>
            <NavLink to = "/Electrical3rd"> <div className="dItem" id="file">3rd  sem.</div></NavLink> 
           <NavLink to="/Electrical4th">   <div className="dItem" id="file" >4th  sem.</div></NavLink>
             <NavLink to="/Electrical5th"> <div className="dItem" id="file">5th  sem.</div></NavLink>
            <NavLink to="/Electrical6th">  <div className="dItem" id="file">6th  sem.</div></NavLink>
            <NavLink to="/Electrical7th"> <div className="dItem" id="file">7th  sem.</div></NavLink> 
             <NavLink to="/Electrical8th"><div className="dItem" id="file" >8th  sem.</div></NavLink> 
            </div>
          </div>
        </div>
      </div> 
     </li>
     <li className="dropdown" ><NavLink to="/datesheet" >Datesheet</NavLink>
         
         </li>
       <li><NavLink to="/timetable" >Timetable</NavLink></li>
       <li><NavLink to="/contact" >Contact</NavLink></li>
       
       <li className= "btn" onClick={calllogoutPage}> Logout</li>
   
      
          </div>
       </>
      </ul>


      </div>
 </>
  )
}

export default Navbar2