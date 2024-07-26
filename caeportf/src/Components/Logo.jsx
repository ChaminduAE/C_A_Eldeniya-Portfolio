import React from 'react'

import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className='flex items-center w-full h-full '>
      <Link to="/" >
        <p className="pl-4 text-2xl font-bold text-transparent uppercase md:text-3xl bg-gradient-to-r from-white to-red-600 via-green-700 bg-clip-text md:pl-32 hover:animate-bounce font-fonta">CHAMINDU</p>
        </Link>
    </div>
  )
}
