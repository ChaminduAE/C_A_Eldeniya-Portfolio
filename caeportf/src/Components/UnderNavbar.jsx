import React from 'react'
import "./UnderNavbar.css"

import { Link } from 'react-router-dom';

export default function 

() {
  return (
    <div className='px-10 md:px-0 fixed flex-wrap mt-[11vh] flex justify-center items-center gap-8 md:gap-40 z-40 w-full h-[6] md:h-[12vh]  '>

  
    <Link to="/experience">
    <button className='expproj'>Experience</button>
    </Link>
    <Link to ="/projects">
    <button className='expproj'>Projects</button>
    </Link>
    <Link to="/skills">
    <button className='expproj'>Skills</button>
    </Link>
    <Link to="/blogs">
    <button className='expproj'>Blogs</button>
    </Link>
    </div>

    

  )
}
