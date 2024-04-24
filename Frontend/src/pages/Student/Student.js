import React ,{useState,useEffect}from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import "../TA/teacher.css"
import Navbar2 from  "../../components/navbar/Navbar2"
import Footer from "../../components/footer/Footer"
import "./student.css"
import Image from "../../images/home.png"
function Student() {
  const [data,setdata] = useState([]);

  const history=useNavigate();
  const show= async()=>{ 
    try{
    
      const res= await fetch("/timetable",{
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
   <div className='stud'>
   <div className='home-content'>

<h1>Welcome to Student <span className='sp'><b>Helper</b> </span>  😃</h1>
<p>This is a <span className='sp'>single online platform</span> where students can access the different criterias including sitting plan, timetable, E-question papers  and semester and date sheet.<br></br><br/>
<h4  style={{fontSize: "2rem", marginBottom:"2rem" }}><span style={{border:"1px solid white", padding:"1rem", borderRadius:"1rem"}}>  Our <span className='sp'>Services</span></span></ h4>
<ol className='services'  >
  <li>

✔️<b>  To provide the <span className='sp'>sitting plan</span> for MSTs as well as finals  exams .<br/></b>
  </li>
  <li>

✔️<b> To provide previous <span className='sp'> question papers </span> of different subjects.<br/></b>
  </li>
  <li>
✔️<b>  To show<span className='sp'>Timetable</span> of all branch .<br/></b>

  </li>
  <li>

✔️<b> To show<span className='sp'>Datesheet</span> of all branch .<br/></b>
  </li>
</ol>



</p>
    </div>
   <div className="details">
		<img className='login-img' src={Image} alt='img' />
		</div>
   </div>
<Footer/>
      </>
    )
  }
  

export default Student  