import React from 'react'

import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className='flex items-center w-full h-full '>
      <Link to="/" >
        <p className="pl-2 text-xl text-green-600 uppercase  md:pl-32 hover:animate-bounce">CHAMINDU</p>
        </Link>
    </div>
  )
}
