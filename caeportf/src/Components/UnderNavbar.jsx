import React from 'react'
import "./UnderNavbar.css"

import { Link } from 'react-router-dom';

export default function

  () {
  return (
    <div className='flex z-40 fixed top-[8vh] md:top-[11vh] items-center justify-center gap-1 md:gap-40  w-full h-[6vh] md:h-[11vh] '>

{/* px-10 md:px-0 fixed flex-wrap mt-[11vh] items-center justify-center gap-8 md:gap-40 z-40 w-full h-[6] md:h-[12vh] bg-red-400 */}
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
