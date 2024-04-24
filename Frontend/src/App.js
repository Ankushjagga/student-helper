import React,{useState} from "react";
import { Route ,Routes} from 'react-router-dom';
import Questionpaper from "./pages/questionpaper/questionpaper";
import Datesheet from "./pages/Datesheet/Datesheet";
import Register from "./pages/Login/Register";
import "./App.css"
import Login from "./pages/Login/Login";
import TeacherAssistent from "./pages/TA/teacherAssistent";
import Student from "./pages/Student/Student";
import { ToastContainer } from 'react-toastify';
import Combine from "./pages/questionpaper/Combine";
import Timetable from "./pages/Timetable/Timetable";
import Time from "./pages/Timetable/Time"
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
function App() {
  const [data, setData] = useState([]);

  const createRequests = () => {
    console.log(data);
  };
  return (
    <div className="App">
<Routes>  
<Route exact path="/" element={<Register/>}>
</Route>
<Route exact path="/login" element={<Login/>}>
</Route>
 <Route exact path="/question" element={<Questionpaper/>}>
 </Route>
 <Route exact path="/datesheet" element={<Datesheet/>}>
 </Route>


<Route exact path="/teacherAssistent" element={<TeacherAssistent/>}>
</Route>
<Route exact path="/Student" element={<Student/>}>
</Route>

<Route exact path="/timetable" element={<Timetable  />}>
</Route>
<Route exact path="/contact" element={<Contact  />}>
</Route>
{/* <Route exact path='/*' element={<Error/>}/>  */}

 </Routes>  
 <Combine/>
 <ToastContainer
// position="top-right"
// autoClose={2000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="Dark"
/>
    </div>
  );
}

export default App;
