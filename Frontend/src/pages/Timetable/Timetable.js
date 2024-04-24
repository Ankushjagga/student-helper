import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";
import Navbar2 from '../../components/navbar/Navbar2';
import Footer from '../../components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
const Timetable = () => {
  const [user,setUser]=useState({
    image:""
  });
const [data,setdata] = useState([]);

const history=useNavigate();
  
  const handleFileChange = (e) => {
    setUser({...user,image: e.target.files[0].name});
    console.log(user);
  
  };

console.log(user);
 

  const uploaddatesheet= async(e)=>{ 
    // e.preventDefault();
const {image} = user;

 
    try{
   
      const res= await fetch("/timetable",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Accept: "application/json"
        },
        body:JSON.stringify({
          image
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
    {/* <form method='POST' className='loginForm signinForm' encType="multipart/form-data">
  <input type="file"className='inp' accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" placeholder="Enter Email" defaultValue={user.image}  name="image" onChange={handleFileChange} required/>
<button className='btn' id='bt' type="submit" placeholder='Submit'  onClick={uploaddatesheet}>post</button>


  </form> */}



<Navbar2/>
     
        <div className='pdfs'>

{data.map((ele,id)=>{
  
  return(
    <div className='box-container'  key={id}>
<embed src={`http://localhost:5000/img/${ele.image}`}  style={{marginTop:"2rem"}} frameBorder="0" scrolling="no"  height="500" width="1050" title="EXCEL FILE FOR TIMETABLE" ></embed>
</div>
  )
})}
  {/* #toolbar=0&navpanes=0&scrollbar=0&#pagemode=none */}
  
</div>
<Footer/>
    </>
  )
}

export default Timetable