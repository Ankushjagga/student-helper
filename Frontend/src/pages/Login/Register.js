import React,{useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import { NavLink ,useNavigate} from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import "./register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "../../images/image.png"
const Register = () => {
  const history=useNavigate();
  const [user,setUser]=useState({
    name:"", email:"",password:"",registers:""
  });
let name,value;
  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
setUser({...user,[name]:value})
  }

  const PostData =async(e)=>{
    e.preventDefault();
    try{

      const {name,email,password,registers}=user;
      const res=await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
      },
      credentials: "include",
      body:JSON.stringify({
        name,email,password,registers
      })
    })
    const data = await res.json();
    console.log(data);
if(res.status===200){
  if(   registers=="Register as Student" ){
    // alert(data);
    
    history("/Student");
    toast(data + "as Student",{position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    type:"success",
    progress: undefined,
    theme: "dark",})
    
  }
}else if(  registers=="Register as T.A."){
  // alert(data);
  history("/teacherAssistent");
    toast(data + "as T.A.",{position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
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
        type: "error",
        theme: "dark",})
      }


  
  }
  catch(err){
    console.log(err);
  }
  }
  
  return (
    <>
    <Navbar/>
    <div className="container" id="container">
<div className="details">
		<img className='login-img' src={Image} alt='img' />
		</div>
<div className="login-in-container">
<form method='POST' className='loginForm signinForm'>
      <h1>Register Yourself</h1>
  <input type="text"className='inp' placeholder="Enter name" value={user.name}  name="name" onChange={handleInputs}  required/>
  <input type="email"className='inp' placeholder="Enter Email" value={user.email}  name="email" onChange={handleInputs} required/>
  <input type="password" className='inp'placeholder="Enter Password" value={user.password}  name="password" onChange={handleInputs} required/>
<select className='inp' id='select' name='registers' onChange={handleInputs}  value={user.registers}>
    <option name="registers"  onChange={handleInputs} value="Register as " hidden >Register as .... </option>
    <option name="registers"  onChange={handleInputs} value="Register as Student">Register as Student</option>
    <option name="registers" onChange={handleInputs}  value="Register as T.A."disabled  >Register as  T.A</option>
    <option name="registers"  onChange={handleInputs} value="Register as faculty" disabled>Register as Facaulty</option>
</select>

<button className='btn' id='bt' type="submit" placeholder='Submit'  onClick={PostData}>Register</button>

<p style={{margin: "1rem",color:"white"}} >already registered ? <NavLink to="/login"><i style={{color: "#a4af0ed2",textDecoration:"underline"}} > login  now.</i></NavLink> </p>
</form>

	</div>
			
			
	
</div>
<Footer/>
    </>
  )
}

export default Register