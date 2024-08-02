import React from 'react'

import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className='flex items-center w-full h-full '>
      <Link to="/" >
        <p className="pl-4 text-2xl text-transparent uppercase bg-gradient-to-r from-white to-green-700 via-red-600 bg-clip-text text-1xl md:text-xl md:pl-32 font-fontb">CHAMINDU</p>
        </Link>
    </div>
  )
}
