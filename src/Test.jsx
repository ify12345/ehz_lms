import React from "react";

const Test = () => {
  return (
    <div>
      <nav className="h-[80px] shadow-xl flex items-center justify-between px-[100px]">
        <div className="font-extrabold text-blue-950 text-[30px]">
          {" "}
          Take your Test{" "}
        </div>
        <div className="space-x-6">
          <button className="bg-[#09355F] px-4 py-3 text-white">
            Back to Dashboard
          </button>
          <button className="bg-[#09355F] px-4 py-3 text-white">End Test</button>
        </div>
      </nav>


     <section className="flex justify-center mx-[100px] items-center my-10">
            <div className="bg-[#09355F] w-full h-screen rounded-xl px-[100px] py-[50px] space-y-6">
                  <div className="flex justify-between items-center">
                    <p className="text-white font-extrabold">HTML101:BEGINNERS GUIDE TO CODING TEST QUESTIONS</p>
                    <p className="bg-white text-red-600 px-6 py-1 rounded-xl flex items-center">3:07</p>
                  </div>
                  {/* test display section */}
                  <section className="bg-white w-full flex-grow flex justify-between p-10 rounded-xl">
                       <div></div>
                       <button className="b2 flex items-center px-6 py-2 h-[50px] rounded-xl text-white">Submit</button>
                  </section>
            </div>
     </section>


    </div>
  );
};

export default Test;
