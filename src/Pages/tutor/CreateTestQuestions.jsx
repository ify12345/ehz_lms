import React from "react";

const CreateTestQuestions = () => {
  return (
    <div>
      <form action="" className="py-[100px] px-4 space-y-6">
        <div className="flex justify-between">
          <button className="bg-white p-2">Select A topic</button>
          <button className="bg-white p-2">HTML 101: BEGINERS GUIDE TO</button>
        </div>
        <input
          type="text"
          className="w-full p-3"
          placeholder="Write a Question"
        />
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
            Upload
          </button>
          <label className="relative cursor-pointer">
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-200">
              Browse
            </span>
            <input
              type="file"
              className="absolute opacity-0 cursor-pointer inset-0"
              aria-label="Upload file"
            />
          </label>
        </div>
       <div className="flex justify-between">
        <div></div>
        <div className="text-white">Select Correct option</div>
       </div>
        {/* options */}
       <div className="flex justify-between">
        <input type="text" placeholder="OPTION A"  className="w-[400px] px-2 py-3 rounded-lg"/>
          <input type="checkbox" className="w-6" name="" id="" />        
       </div>
       <div className="flex justify-between">
        <input type="text" placeholder="OPTION B" className="w-[400px] px-2 py-3 rounded-lg" />
         <input type="checkbox" className="w-6" name="" id="" />
       </div>
       <div className="flex justify-between">
        <input type="text" placeholder="OPTION C" className="w-[400px] px-2 py-3 rounded-lg" />
         <input type="checkbox" className="w-6" name="" id="" />
       </div>
       <div className="flex justify-between">
        <input type="text" placeholder="OPTION D" className="w-[400px] px-2 py-3 rounded-lg" />
         <input type="checkbox" className="w-6" name="" id="" />
       </div>


        <div className="flex justify-between">
            <div></div>
            <button className="rounded-lg bg-white text-gray-500 p-3 b2">Submit</button>
        </div>


      </form>
    </div>
  );
};

export default CreateTestQuestions;
