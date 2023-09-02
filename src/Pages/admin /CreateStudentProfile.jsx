import React from "react";

const CreateStudentProfile = () => {
  return (
    <>
      <section className="text-white ">
        <div className="font-extrabold flex justify-center py-6 text-2xl">
          Create Student Profile
        </div>
        {/* create student form */}
        <form className="space-y-4 mx-[30px] text-gray-500">
          <div className="grid grid-cols-2">
            First Name
            <input type="text" className=" py-2  rounded-lg"/>
          </div>
          <div className="grid grid-cols-2">
            Last Name
            <input type="text" className=" py-2  rounded-lg"/>
          </div>
          <div className="grid grid-cols-2">
            Email
            <input type="email" className=" py-2  rounded-lg"/>
          </div>
          <div className="grid grid-cols-2">
            Students Phone Number
            <input type="number" className=" py-2  rounded-lg"/>
          </div>
          <div className="grid grid-cols-2">
            Guardians/Parents Phone Number
            <input type="tel" className=" py-2  rounded-lg"/>
          </div>
          <div className="grid grid-cols-2">
            Home Address
            <input type="text" className=" py-2  rounded-lg"/>
          </div>
          <div className="grid grid-cols-2">
            Course Fee
            <input type="tel" className=" py-2  rounded-lg"/>
          </div>

          <div className="flex justify-between">
             <select  className="w-[300px] p-2" name="" id="">
                <option value="">Select Course</option>
                <option value="">Full stack development</option>
                <option value="">Cinematography</option>
             </select>
            <button className="flex justify-end p-2 bg-white w-fit">Full stack development</button>
          </div>
    
          <div className="flex justify-between">
            <div></div>
            <button className="flex justify-end px-3 py-2 bg-[#FF7A00] w-fit text-white rounded-lg b2">Submit</button>
          </div>
        </form>


      </section>
    </>
  );
};

export default CreateStudentProfile;
