import React ,{useState,useEffect}from 'react'
const questionpaper = () => {
  const [user,setUser]=useState({
    semester: "",
    image:"",
    subject:"",
    stream:""
  });
const [data,setdata] = useState([]);
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
//     const formdata = new FormData();
// formdata.append('image',user.image);
// formdata.append('name',user.name);
      const res= await fetch("/question",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Accept: "application/json"
        },
        body:JSON.stringify({
          semester,image, subject,stream
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
// useEffect(() => {
  

// show();
  
// },[]);


  return (
    <>
    <form method='POST' className='loginForm signinForm' encType="multipart/form-data">
  <input type="text"className='inp' placeholder="Enter sub" value={user.subject}  name="subject" onChange={handleInputs}  required/>
  <select className='inp' id='select' name='semester' onChange={handleInputs}  value={user.semester}>
    <option name="registers"  onChange={handleInputs} value="semseter" hidden> semester </option>
    <option name="registers"  onChange={handleInputs} value="1st">1st</option>
    <option name="registers" onChange={handleInputs}  value="2nd">2nd</option>
    <option name="registers"  onChange={handleInputs} value="3rd">3rd</option>
    <option name="registers"  onChange={handleInputs} value="4th">4th</option>
    <option name="registers"  onChange={handleInputs} value="5th">5th</option>
    <option name="registers"  onChange={handleInputs} value="6th">6th</option>
    <option name="registers"  onChange={handleInputs} value="7th">7th</option>
    <option name="registers"  onChange={handleInputs} value="8th">8th</option>
</select>
<select className='inp' id='select' name='stream' onChange={handleInputs}  value={user.stream}>
    <option name="registers"  onChange={handleInputs} value="stream " hidden >stream</option>
    <option name="registers"  onChange={handleInputs} value="C.S.E">C.S.E</option>
    <option name="registers" onChange={handleInputs}  value="Civil">Civil</option>
    <option name="registers"  onChange={handleInputs} value="Mechanical">Mechanical</option>
    <option name="registers"  onChange={handleInputs} value="Electrical">Electrical</option>
</select>
  <input type="file"className='inp' accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" placeholder="Enter Email" defaultValue={user.image}  name="image" onChange={handleFileChange} required/>
<button className='btn' id='bt' type="submit" placeholder='Submit'  onClick={uploaddatesheet}>post</button>


  </form> 
 {data}

    </>
  )
}
export default questionpaper