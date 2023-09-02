import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import StudentLogin from './Pages/StudentLogin';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import TutorDashboard from './Pages/TutorDashboard';
import StudentDashboard from './Pages/StudentDashboard';
import Test from './Test';

const App = () => {
  return (
    <div >  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/studentlogin" element={<StudentLogin/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/tutordashboard" element={<TutorDashboard/>}/>
        <Route path="/studentdashboard/:id" element={<StudentDashboard/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </div>
  )
}

export default App
