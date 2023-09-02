import React, { useState } from 'react';
import NavLoggedIn from '../Components/NavLoggedIn';
import {IoIosArrowDown} from "react-icons/io";
import CreateStudentProfile from './admin /CreateStudentProfile';
import TutorsProfile from './admin /TutorsProfile';
import StudentsProfile from './admin /StudentsProfile';
import CreateTutorProfile from './admin /CreateTutor';


const AdminDashboard = () => {
  const[display,setDisplay] = useState(null);
   
  const createStudents = () => setDisplay("createstudents")
  const viewTutors = () => setDisplay("tutors")
  const viewStudents = () => setDisplay("viewstudents")
  const createTutor = () => setDisplay("createtutors")

  return (
    <div className="overflow-hidden">
     <NavLoggedIn/>
      <section className="flex justify-center mx-[100px] my-[30px] rounded-xl">
          <div className="w-full h-screen flex">

           {/* left side navigation  */}

            <div className=" w-4/12 border-r-2 rounded-l-xl bg-[#09355F] flex-shrink-0 flex flex-col px-12 py-[100px] text-white font-bold gap-y-6"> 
                <button  onClick={viewStudents} className={`flex items-center ${ display === "viewstudents" ?"bg-white text-gray-700 px-3 rounded-3xl group:h:": ""}`}>All Students  <IoIosArrowDown className='text-[#FF7A00]'/></button>
                {/* DROP DOWN FUNCTIONALITY */}
                {display === "viewstudents" ? 
                <div className="bg-white p-4 overflow-y-auto max-h-48 text-black">
                  {/* Dropdown content here */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel elit a tortor tristique venenatis vel id purus.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias inventore nam mollitia ipsam sed quos recusandae rem, sint quod est aliquam quas, quis rerum eligendi eveniet similique optio quae eius.
                </div> : ""
                }
                <button  onClick={createStudents}className={`flex items-center ${display === "createstudents" ? "bg-white text-gray-700 px-3 rounded-3xl": "" }`}>Create Student Profile <IoIosArrowDown className='text-[#FF7A00]'/></button>
                <button  onClick={createTutor} className={`flex items-center ${display === "createtutors" ? "bg-white text-gray-700 px-3 rounded-3xl": "" }`}>Create Tutor profile <IoIosArrowDown className='text-[#FF7A00]'/></button>


                <button  onClick={viewTutors} className={`flex items-center ${display === "tutors" ? "bg-white text-gray-700 px-3 rounded-3xl": "" }`}>View All Tutors <IoIosArrowDown className='text-[#FF7A00]'/></button>
                {display === "tutors" ? 
                    <div className='overflow-y-auto p-4 max-h-48 bg-white text-black'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius adipisci voluptatibus recusandae ullam soluta maxime veritatis enim perferendis doloribus iure, voluptatem impedit, aliquid eum! Voluptas alias impedit ut vero.
                    </div> : ""
                  }
      
            </div>
          



            <div className="w-8/12 bg-[#134473] rounded-r-xl">
              {display === "createstudents" && <CreateStudentProfile/>}
              {display === "viewstudents" && <StudentsProfile/>}
              {display === "tutors" &&  <TutorsProfile/>}
              {display === "createtutors" && <CreateTutorProfile/>}   
            </div>
          </div>
      
      </section>

      
    </div>
  )
}

export default AdminDashboard
