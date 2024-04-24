import React,{useState,useEffect} from 'react'
import Navbar from '../../components/navbar/navbar'
import { NavLink , useNavigate } from 'react-router-dom'
import "./register.css"
import Footer from '../../components/footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "../../images/login.png"
const Login = () => {
  const history=useNavigate();
  const [user,setUser]=useState({
     email:"",password:""
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

      const {email,password,}=user;
      const res=await fetch("/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
      },
      credentials: "include",
      body:JSON.stringify({
        email,password
      })
    })
    const data = await res.json();
    console.log(data);
if(res.status===201){
    // alert(data);
    
    history("/Student");
    toast(data  ,{position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
type : "success",
    theme: "dark",})
    
}
else{
  toast(data ,{position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  type:"error",
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
<form method='POST' className='loginForm'>
    <h1>Login </h1>
  <input className='inp' type="email" placeholder="Enter Email"name='email' value={user.email}  onChange={handleInputs} required/>
  <input  className='inp'type="password" placeholder="Enter Password"name='password' value={user.password}  onChange={handleInputs} required/>

  <button className='btn' id='bt'  placeholder='Submit' onClick={PostData} >Submit</button>
  <p style={{margin: "1rem", color:"white"}} >New to Examaster? <NavLink to="/"><i style={{color: "#a4af0ed2",textDecoration:"underline"}} > Sign up now.</i></NavLink> </p>
</form>
{/* <div className="details">
			<h1>Hiii!</h1>
			<p>Enter your personal details <br/>and start journey with us</p>
			<button className="btn ghostbtn" id="signUp"><NavLink to="/">Create an account</NavLink>
		</button>
		</div> */}
	</div>
			
			
	
</div>
<Footer/>
    {/* </div> */}
    </>
  )
}

export default Login