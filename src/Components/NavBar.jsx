import React from 'react';
import img from "../assets/Ehizua-Hub-Logo-PNG-1536x211.png";
import { Link } from 'react-router-dom';
import {HiOutlineQueueList} from "react-icons/hi2"


const NavBar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 flex justify-between border-b h-[80px] items-center px-48 shadow-md z-[10px] bg-transparent">
         <div className="w-[250px] mx-[40px]">
            <img src={img} alt="img" />
         </div>
         <div className="space-x-20 hidden xl:flex" >   
           <Link className="" to="/upskill">Upskill</Link>
            <Link className="" to="/creativetech">Creative Technology Program</Link>
            <Link className="" to="/about">About</Link>
            <Link className="" to="/hubs">Hubs</Link>
         </div>   
        <div>
           {/* {}  */}
        </div>
        <button className="flex xl:hidden">
            <HiOutlineQueueList size={32}/>
        </button>
       
      </nav>
    </div>
  )
}

export default NavBar
