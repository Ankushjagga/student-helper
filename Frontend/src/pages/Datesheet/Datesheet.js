import React ,{useState,useEffect}from 'react'
import Navbar2 from '../../components/navbar/Navbar2'
import "./datesheet.css"
import Footer from '../../components/footer/Footer';
import { MdDateRange } from "react-icons/md";
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';
const Datesheet = () => {
  const [user,setUser]=useState({
    name: "",
    image:""
  });
const [data,setdata] = useState([]);
const history = useNavigate();
  const handleInputs=(e)=>{
    let name,value;
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[e.target.name]:e.target.value})
  }
  
  const handleFileChange = (e) => {
    setUser({...user,image: e.target.files[0].name});
    console.log(user.image);
  
  };



  const uploaddatesheet= async(e)=>{ 
    // e.preventDefault();
const {name,image} = user;
    try{
    const formdata = new FormData();
formdata.append('image',user.image);
formdata.append('name',user.name);
      const res= await fetch("/datesheet",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Accept: "application/json"
        },
        body:JSON.stringify({
          name,image
        }),
        credentials:"include"
      })
      // alert("logout sucess")
      const data = await res.json();
      console.log(data);
      if(res.status===200){
        alert(data)
        
      }
      else{
        alert(data);

      }
    }
    catch(err){
      console.log(err);
      // alert("you need to loin first");
    }
     
    
    }
    const show= async()=>{ 
      try{
      
        const res= await fetch("/datesheets",{
          method:"GET",
          headers:{
              Accept:"application/json",
            "Content-Type":"application/json"
          },
         
        })
        // alert("logout sucess")
        const data = await res.json();
        console.log(data);
        if(res.status!==201){
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
        else{
          setdata(data);
  
        }
      }
      catch(err){
        console.log(err);
        // alert("you need to loin first");
      }
       
      
      }
useEffect(() => {
  

show();
  
},[]);


  return (
    <>
    <Navbar2/>
    {/* <form method='POST' className='loginForm signinForm' encType="multipart/form-data">
  <input type="text"className='inp' placeholder="Enter name" value={user.name}  name="name" onChange={handleInputs}  required/>
  <input type="file"className='inp' accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" placeholder="Enter Email" defaultValue={user.image}  name="image" onChange={handleFileChange} required/>
<button className='btn' id='bt' type="submit" placeholder='Submit'  onClick={uploaddatesheet}>post</button>


  </form> */}
{/* {data} */}
<h4  style={{fontSize: "2rem", margin:"3rem" }}><span style={{border:"1px solid white", padding:"1rem", borderRadius:"1rem", color:"#fff" }}>  Date <span className='sp'>Sheets</span></span></ h4>
        {/* <marquee behavior="alternate" direction="right"><h3 style={{"fontWeight":"bolder", "margin": "2rem"}}> All The Best For Your Exams 😃</h3></marquee> */}
<div className='pdfs'>
{data.map((ele,id)=>{
  return(
    <div className='box-container'  key={id}>
<a href={`http://localhost:5000/img/${ele.image}`}  target='_blank'>
<div className="box">
{/* <embed src={`http://localhost:5000/img/${ele.image}`}  frameBorder="0" scrolling="no"  height="200" width="300" title="description" ></embed> */}
  <h3>{ele.name}</h3> 
  <MdDateRange style={{"font-size":"2rem", color: "white"}} />
</div>
  </a>
</div>
  )
})}
  
</div>
<Footer/>
    </>
  )
}

export default Datesheet