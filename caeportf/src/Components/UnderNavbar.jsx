import React from 'react'
import "./UnderNavbar.css"

import { Link } from 'react-router-dom';

export default function

  () {
  return (
    <div className='flex z-40 flex-wrap fixed top-[8vh] md:top-[11vh] items-center justify-center gap-1 md:gap-2  w-full h-[6vh] md:h-[11vh] '>


      <Link to="/experience">
        <button className='expproj'>Experience</button>
      </Link>
      <Link to="/projects">
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
