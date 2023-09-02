import React from 'react';
import student from "../assets/WhatsApp Image 2023-08-22 at 14.23.png"
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
  return (
    <div className='l3 l4'>
    <NavBar/>
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
