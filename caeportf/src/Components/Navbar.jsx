import React from 'react'
import Logo from "./Logo"
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import "./Navbar.css"

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className=' fixed z-50 flex  w-full h-[8vh] md:h-[11vh] bg-white '>

      
        <div className="w-1/4 ">
          <Logo />
        </div>
        <div className="flex items-center justify-start md:justify-center ml-[20px] md:ml-[230px] h-full gap-1 md:gap-10 ">
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
        <div className="flex flex-col items-start justify-start gap-2 mt-4 mb-4 ml-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:justify-center md:gap-16 md:ml-24 md:relative">
          <a href="https://www.linkedin.com/in/chamindueldeniya"><GrLinkedin className="navicon" /></a>
          <a href=" https://github.com/ChaminduAE"><FaGithub  className="navicon" /></a>
        </div>
        <div className="relative flex items-center ml-3 md:ml-48 ">
          <button className="p-2 text-[1rem] md:text-xl text-white bg-black hover:text-red-500 hover:animate-jump">Resume</button>
        </div>
      

    </div>
  )
}
