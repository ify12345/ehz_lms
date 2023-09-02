import React, { useState } from 'react'
import StudentNav from '../Components/StudentNav';
import {IoIosArrowDown } from "react-icons/io"
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const[display,setDisplay] =useState(false);
  const dropDown = ()=> setDisplay(!display) 
   
  return (
    <div>
      <StudentNav/>
      <section className='overflow-hidden flex justify-center items-center mx-[90px] my-[30px] rounded-xl'>
      <div className="bg-[#09355F] w-full h-screen p-6 flex gap-x-6 ">
            <div className="w-3/12 bg-white flex-shrink-0 flex flex-col items-center space-y-3 py-4">
              <div className='text-3xl'>FRONT END</div>
              
               
                 <p className='font-bold mt-4 text-xl'>Course Curriculum</p>
                 <button onClick={dropDown} className='flex items-center'> <span className='font-extrabold'>HTML 101</span>:Beginers Guide to Coding<IoIosArrowDown className='text-[#FF7A00]'/></button>
                  {/* drop down */}
                  { display ?
                  <div className='border-2 border-blue-950 w-fit h-[300px] flex  mx-3 justify-between p-4 space-x-6 overflow-y-auto'>
                     <div className='text-sm'>--INTRODUCTION TO HTML</div>
                     <Link to="/test" className='border px-4 py-3 h-[50px] bg-slate-400 rounded-xl'>Test</Link>
                  </div> : ""
                    }
                 <button className='flex items-center'> <span className='font-extrabold'>HTML 101</span>:Beginers Guide to Coding<IoIosArrowDown className='text-[#FF7A00]'/></button>
            
              
              </div>
              {/* section to display whatever course is clicked */}
              <div className="w-9/12 bg-white p-10">
               Html 101
              </div>
      </div>
      </section>
    </div>
  )
}

export default StudentDashboard
