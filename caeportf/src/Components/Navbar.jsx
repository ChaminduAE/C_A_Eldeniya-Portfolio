import React from 'react'
import Logo from "./Logo"
export default function Navbar() {
  return (
    <div>
        
        <div className=" flex items-center justify-center   h-[10vh] w-full bg-white ">
          <div className="w-1/4">
            <Logo/>
          </div>
          <div className="flex items-center justify-center w-3/4 gap-24">
            <button  className="text-xl ">Home</button>
            <button  className="text-xl">About</button>
            <button  className="text-xl">Contact me</button>

            <button  className="p-3 text-xl text-white bg-black">Resume</button>
          </div>
        </div>

    </div>
  )
}
