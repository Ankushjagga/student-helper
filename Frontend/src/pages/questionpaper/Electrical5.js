import React ,{useEffect,useState}from 'react'
import Navbar2 from '../../components/navbar/Navbar2';
import Footer from '../../components/footer/Footer';
const Electrical5 = () => {
const [data,setdata] = useState([]);

    const show= async()=>{ 
        try{
        
          const res= await fetch("/ques",{
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
            alert(data)
            
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
  const cse1st=  data.filter((ele)=>{
 return    ele.stream==="Electrical"&& ele.semester === "5th" ;
  }) 
  return (
    <>
       <Navbar2/>
    <h4  style={{fontSize: "2rem", margin:"3rem" }}><span style={{border:"1px solid white", padding:"1rem", borderRadius:"1rem", color:"#fff" }}>  Qusetion <span className='sp'>Papers</span></span></ h4>
<div className='pdfs'>

{cse1st.length ?  cse1st.map((ele,id)=>{

  return(
    <div className='box-container'  key={id}>
<a href={`http://localhost:5000/img/${ele.image}`}  target='_blank'>
<div className="box">
{/* <embed src={`http://localhost:5000/img/${ele.image}`}  frameBorder="0" scrolling="no"  height="200" width="300" title="description" ></embed> */}
  <h3>{ele.subject}</h3> 
</div>
  </a>
</div>
  )
}):<h1>No Question Paper Found 😟</h1>}
  
</div>
<Footer/>
    </>
  )
}

export default Electrical5