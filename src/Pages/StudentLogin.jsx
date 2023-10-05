import React, { useState } from 'react';
import student from "../assets/WhatsApp Image 2023-08-22 at 14.23.png"
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
  //  function props passed in from Navbar for dropdown
  const[nav,setNav] = useState(false)
  function clicks(){
    setNav(!nav)
  }


  return (
    <div className='l3 l4'>
    <NavBar clicks={clicks}/>

    {nav?   <div className=" xl:hidden w-full bg-[#134574]  h-screen text-white absolute top-[80px] right-0 flex flex-col space-y-8 justify-center items-center z-30">
            <Link className="" to="/upskill">Upskill</Link>
            <Link className="" to="/creativetech">Creative Technology Program</Link>
            <Link className="" to="/about">About</Link>
            <Link className="" to="/hubs">Hubs</Link>
             <Link to="/adminlogin" className='border bg-[#134574] text-white px-6 py-3'>Login</Link>
               </div> 
  : ""}

     <div className="flex flex-col items-center my-[125px]">
        <div className='flex flex-col items-center l1 absolute z-20 l2'>
          <h1 className='text-[40px] font-extrabold tracking-wide w-full'>Good Evening, Student</h1>
          <div className='' ><img className='rounded-full border-y shadow-2xl' src={student} alt="student" /></div>
        
        </div>
        
            <form className="flex-col space-y-3 bg-[#134574] lg:min-w-[877px] min-w-[500px] h-[453px] rounded-xl mt-[-100px]  flex justify-center items-center absolute top-[360px] z-[-30]" >
                <div className="flex items-center">
                    <label className='text-white mr-10' >Email</label>
                    <input  className="rounded px-6 w-[348px] py-3" type="email" placeholder="EhizuaHub@gmail.com" />
                </div>
                <div className="flex items-center">
                    <label className='text-white mr-5' htmlFor="">Login ID</label>
                    <input  className="rounded px-6 w-[348px] py-3" type="email" placeholder="..............." />
                </div>
                <div className='text-white'>Forgot Password? <Link className='text-blue-500'>Recover</Link></div>
            </form>
            
     </div>
    </div>
  )
}

export default StudentLogin
