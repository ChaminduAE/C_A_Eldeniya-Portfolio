import React from 'react'
import Logo from "./Logo"
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import "./Navbar.css"

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className=' fixed z-50 flex w-full h-[8vh] md:h-[11vh] bg-white '>

      
        <div className="w-1/4 ">
          <Logo />
        </div>
        <div className="flex items-center justify-center ml-[10px] md:ml-[230px] h-full gap-1 md:gap-10 ">
          <Link to="/">
          <button className="navbut">Home</button>
          </Link>
          <Link to="/about">
          <button className="navbut">About</button>
          </Link>
          <Link to="/contact">
          <button className="navbut">Contact</button>
          </Link>

        </div>
        <div className="flex items-center justify-center gap-2 ml-2 md:gap-16 md:ml-24 md:relative">
          <GrLinkedin className="navicon" />
          <FaGithub  className="navicon" />
        </div>
        <div className="relative flex items-center ml-2 md:ml-48 ">
          <button className="p-2 text-xl text-white bg-black hover:text-red-500 hover:animate-jump">Resume</button>
        </div>
      

    </div>
  )
}
