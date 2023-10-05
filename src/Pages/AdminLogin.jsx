import React, {useState} from 'react';
import staff from "../assets/WhatsApp Image 2023-08-22 at 14.23 (1).png";
import {FcGoogle} from "react-icons/fc"
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

const AdminLogin = () => {

  const[nav,setNav] = useState(false)
  function clicks(){
    setNav(!nav)
  }

  return (
    <div className='l3 l4 overflow-x-hidden'>
        <NavBar clicks={clicks}/>
       {nav?   <div className=" xl:hidden w-full bg-[#134574]  h-screen text-white absolute top-[80px] right-0 flex flex-col space-y-8 justify-center items-center z-30">
            <Link className="" to="/upskill">Upskill</Link>
            <Link className="" to="/creativetech">Creative Technology Program</Link>
            <Link className="" to="/about">About</Link>
            <Link className="" to="/hubs">Hubs</Link>
             <Link to="/adminlogin" className='border bg-[#134574] text-white px-6 py-3'>Login</Link>
               </div> 
  : ""}
       <div className="flex flex-col items-center my-[100px] z-0">
        <div className='flex flex-col items-center l1 absolute  l2'>
          <h1 className='text-[40px] font-extrabold tracking-wide w-full'>Good Evening, Admin</h1>
          <div className='' ><img className='rounded-full border-y shadow-2xl relative bottom-2 z-[2]' src={staff} alt="staff" /></div>
        </div>
        
            <form className="flex-col space-y-3 bg-[#134574] lg:min-w-[877px] min-w-[500px] h-[453px] rounded-xl mt-[-125px]  flex justify-center items-center absolute top-[360px] z-[1] " >
                <div className="flex items-center">
                    <label className='text-white mr-10' >Email</label>
                    <input  className="rounded px-6 w-[348px] py-3" type="email" placeholder="EhizuaHub@gmail.com" />
                </div>
                <div className="flex items-center">
                    <label className='text-white mr-5' htmlFor="">Login ID</label>
                    <input  className="rounded px-6 w-[348px] py-3" type="password" placeholder="..............." />
                </div>
                <button className='flex items-center text-white text-[16px]'>Login with Google <FcGoogle style={{paddingLeft:"5px"}} size={40}/></button>
                
            </form>
    
     </div>
    
    </div>
  )
}

export default AdminLogin
