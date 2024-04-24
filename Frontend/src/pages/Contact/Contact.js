import React,{useEffect,useState} from 'react'
import Navbar from '../../components/navbar/Navbar2'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import "./contact.css"
import Image from "../../images/contact.png"
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [userData,setuserData] = useState({name:"",email:"",message:""});
const history = useNavigate()
  const callcontactPage= async()=>{ 
    try{
    
      const res= await fetch("/getdata",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      })
      const data = await res.json();
      
      console.log(data); 
      setuserData({...userData,name:data.name,email:data.email});
      if(res.status!==200 || !data){
        history("/login")
        toast(data,{position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        type:"error",
        progress: undefined,
        theme: "dark",})
      }
    }
    catch(err){
      console.log(err);
      // alert("you need to loin first");
    }
     
    
    }
const submitcontact=async (e)=>{
  try{
    e.preventDefault();

    const {name,email,message}= userData;
    const res= await fetch("/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
      },
      credentials:"include",

      body:JSON.stringify({
        name,email,message
      })
      
    })
    const data=await res.json();
    console.log(data);
    if(!data || res.status!==201){
      console.log("not send");
      toast(data,{position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      type:"error",
      progress: undefined,
      theme: "dark",})
    }
    else{
      toast(data,{position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      type:"success",
      progress: undefined,
      theme: "dark",})
    }
  }catch(error){
    console.log(error);
  }
  }
const handleInput=(e)=>{
const name=e.target.name;
const value=e.target.value;
setuserData({...userData,[name]:value})
}
useEffect(() => {
  callcontactPage();


},[])

  
  return (
    <>
    <Navbar/>
  
  
    <section > 

    <h4  style={{fontSize: "2rem", margin:"2rem 0 " }}><span style={{border:"1px solid white", padding:"1rem", borderRadius:"1rem", color:"#fff" }}>  Contact <span className='sp'>Us</span></span></ h4>

<div className="row">


    <form method='POST'>
<div className='inputs'>

<input type="text"  className="inp" placeholder="Enter name" value={userData.name} required onChange={handleInput} name="name"  />
<input type="email"className="inp"  placeholder="Enter email" value={userData.email} required onChange={handleInput} name="email" />
</div>

<textarea placeholder='Enter message' className="inp" value={userData.message} rows={5}  onChange={handleInput} name="message" ></textarea>
<button className='btn' type="submit" placeholder="send Message 😄" onClick={submitcontact}>Send<i className="fas fa-paper-plane"></i></button>
</form>
<div className="details">
		<img className='login-img img' src={Image} alt='img' />
		</div>
</div>

    

 </section> 

   

 <Footer/>

    


    </>
  )
}

export default Contact