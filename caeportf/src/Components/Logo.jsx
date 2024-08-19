import React from 'react'

import { HashLink as Link } from 'react-router-hash-link';

export default function Logo() {
  return (
    <div className='flex items-center w-full h-full '>
      <Link smooth to="#home" >
        <p className="pl-4 text-2xl text-transparent uppercase bg-gradient-to-r from-white to-green-700 via-red-600 bg-clip-text text-[1rem] md:text-[1.50rem] md:pl-32 font-fontb ">HOME</p>
        
 </Link>
    </div>
  )
}
