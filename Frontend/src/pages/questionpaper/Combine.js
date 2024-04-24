import React from 'react'
import { Route ,Routes} from 'react-router-dom';
import CSEfirst from "./CSEfirst";
import ElectricalFirst from "./Electricalfirst";
import CSE2 from './CSE2';
import CSE3 from './CSE3';
import CSE4 from './CSE4';
import CSE5 from './CSE5';
import CSE6 from './CSE6';
import CSE7 from './CSE7';
import CSE8 from './CSE8';
import Electrical2 from './Electrical2';
import Electrical3 from './Electrical3';
import Electrical4 from './Electrical4';
import Electrical5 from './Electrical5';
import Electrical6 from './Electrical6';
import Electrical7 from './Electrical7';
import Electrical8 from './Electrical8';
import Civil1 from './Civil1';
import Civil2 from './Civil2';
import Civil3 from './Civil3';
import Civil4 from './Civil4';
import Civil5 from './Civil5';
import Civil6 from './Civil6';
import Civil7 from './Civil7';
import Civil8 from './Civil8';
import Mechanical1 from './Mechanical1';
import Mechanical2 from './Mechanical2';
import Mechanical3 from './Mechanical3';
import Mechanical4 from './Mechanical4';
import Mechanical5 from './Mechanical5';
import Mechanical6 from './Mechanical6';
import Mechanical7 from './Mechanical7';
import Mechanical8 from './Mechanical8';
import Navbar2 from '../../components/navbar/Navbar2';
const Combine = () => {
  return (
 <>

 <Routes>

 <Route exact path="/cse1st" element={<CSEfirst/>}>
</Route>
<Route exact path="/cse2nd" element={<CSE2/>}>
</Route>
<Route exact path="/cse3rd" element={<CSE3/>}>
</Route>
<Route exact path="/cse4th" element={<CSE4/>}>
</Route>
<Route exact path="/cse5th" element={<CSE5/>}>
</Route>
<Route exact path="/cse6th" element={<CSE6/>}>
</Route>
<Route exact path="/cse7th" element={<CSE7/>}>
</Route>
<Route exact path="/cse8th" element={<CSE8/>}>
</Route>
<Route exact path="/Electrical1st" element={<ElectricalFirst/>}></Route>
<Route exact path="/Electrical2nd" element={<Electrical2/>}></Route>
<Route exact path="/Electrical3rd" element={<Electrical3/>}></Route>
<Route exact path="/Electrical4th" element={<Electrical4/>}></Route>
<Route exact path="/Electrical5th" element={<Electrical5/>}></Route>
<Route exact path="/Electrical6th" element={<Electrical6/>}></Route>
<Route exact path="/Electrical7th" element={<Electrical7/>}></Route>
<Route exact path="/Electrical8th" element={<Electrical8/>}></Route>
<Route exact path="/civil1st" element={<Civil1/>}></Route>
<Route exact path="/civil2nd" element={<Civil2/>}></Route>
<Route exact path="/civil3rd" element={<Civil3/>}></Route>
<Route exact path="/civil4th" element={<Civil4/>}></Route>
<Route exact path="/civil5th" element={<Civil5/>}></Route>
<Route exact path="/civil6th" element={<Civil6/>}></Route>
<Route exact path="/civil7th" element={<Civil7/>}></Route>
<Route exact path="/civil8th" element={<Civil8/>}></Route>
<Route exact path="/mechanical1st" element={<Mechanical1/>}></Route>
<Route exact path="/mechanical2nd" element={<Mechanical2/>}></Route>
<Route exact path="/mechanical3rd" element={<Mechanical3/>}></Route>
<Route exact path="/mechanical4th" element={<Mechanical4/>}></Route>
<Route exact path="/mechanical5th" element={<Mechanical5/>}></Route>
<Route exact path="/mechanical6th" element={<Mechanical6/>}></Route>
<Route exact path="/mechanical7th" element={<Mechanical7/>}></Route>
<Route exact path="/mechanical8th" element={<Mechanical8/>}></Route>
 </Routes>

 </>
  )
}

export default Combine