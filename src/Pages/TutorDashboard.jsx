import React, { useState } from "react";
import NavLoggedIn from "../Components/NavLoggedIn";
import CreateTestQuestions from "./tutor/CreateTestQuestions";
import CreateCurricullum from "./tutor/CreateCurricullum";
import StudentsProfile from "./admin /StudentsProfile";


const TutorDashboard = () => {
  const[display,setDisplay] = useState(null);
 
   
  const viewStudents = ()=> setDisplay("viewstudents")
  const curriculum = ()=> setDisplay("curriculum")
  const test = ()=> setDisplay("test")



  return (
    <div>
      <NavLoggedIn />
      <section className="flex justify-center my-[100px] mx-[100px]  rounded-xl">

        <div className="flex h-screen w-full">
        <div className="w-3/12 border-r-2 rounded-l-xl bg-[#09355F]">
          <div className="flex flex-col px-4 py-[100px] flex-shrink-0 text-white font-bold gap-y-6">
            <button onClick={viewStudents} className={`p-3 bg-slate-50 text-black rounded-xl ${display === "viewstudents" ? "bg-gray-500 rounded-lg text-white":""}`}>
               All Students
            </button>
            {/* DROP DOWN FOR ALL CATEGORIES OF STUDENTS */}
            {display === "viewstudents" && (
              <div className="overflow-y-auto max-h-48 bg-white text-black p-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quaerat labore dicta ipsa amet eveniet quasi alias ea excepturi laborum numquam, ipsum iure reiciendis assumenda doloremque earum autem delectus voluptates.
              </div>
            )}

            <button onClick={curriculum} className={`p-3 bg-slate-50 text-black rounded-xl ${display === "curriculum" ? "bg-gray-500 rounded-lg text-white":""}`}>
               Create Curriculum
            </button>
            <button onClick={test} className={`p-3 bg-slate-50 text-black rounded-xl ${display === "test" ? "bg-gray-500 rounded-lg text-white":""}`}>
               Create Test Questions
            </button>
         
        </div>
        </div>
        
        {/* SECOND HALF OF THE SECTION */}
        <div className="w-9/12 bg-[#134473] rounded-r-xl">
          { display === "viewstudents" && <StudentsProfile/> }
          {display === "curriculum" && <CreateCurricullum/>}
          { display === "test" && <CreateTestQuestions/>}
        </div>
        </div>


      </section>
    </div>
  );
};

export default TutorDashboard;
