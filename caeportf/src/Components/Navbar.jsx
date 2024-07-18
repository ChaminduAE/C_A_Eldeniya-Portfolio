import React from 'react'
import Logo from "./Logo"
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

      <div className=" flex items-center h-[70px] w-full  ">
        <div className="w-1/4 ">
          <Logo />

          
        </div>
        <div className="relative flex items-center justify-center gap-10 ml-[250px]  w-96">
          {/* <Link to="/"> */}
          <button className="text-xl hover:text-red-500 ">Home</button>
          {/* </Link>
          <Link to="/about"> */}
          <button className="text-xl hover:text-red-500">About</button>
          {/* </Link>
          <Link to="/contact"> */}
          <button className="text-xl hover:text-red-500">Contact me</button>
          {/* </Link> */}

        </div>
        <div className="relative flex items-center justify-center gap-16 ml-16">
          <GrLinkedin className="text-2xl text-black hover:text-red-500 hover:animate-jump" />
          <FaGithub  className="text-2xl text-black hover:text-red-500 hover:animate-jump" />
        </div>
        <div className="relative ml-32">
          <button className="p-2 text-xl text-white bg-black hover:text-red-500 hover:animate-jump">Resume</button>
        </div>
      </div>

    </div>
  )
}
