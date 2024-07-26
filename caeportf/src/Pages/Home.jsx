import React from 'react'
import BgAnimation from "../Components/BgAnimation"
import Navbar from "../Components/Navbar"
import UnderNavbar from "../Components/UnderNavbar"

import { Link } from 'react-router-dom';


export default function Home() {
  return (
    
  <div className="relative flex flex-col md:flex-row h-[100vh] overflow-hidden items-center pt-[19vh] ">
   {/* <BgAnimation/>  */}

   <video className="absolute inset-0 object-cover w-full h-full" muted loop autoPlay>
        <source src="./public/videos/z.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    
    <div className="z-30 order-2 w-full pl-10 md:w-1/2 md:pl-32 md:order-1 ">
        <div className="mt-16 md:mt-0  pr-10 md:pr-0 w-[400px] md:w-[700px] flex flex-col gap-6 h-full">
            <p className="text-5xl text-white font-fontc ">Hi, Its me</p>
              
            <p className="text-6xl text-white font-fonta "> <span className='text-transparent bg-gradient-to-r from-red-700 to-green-700 bg-clip-text '>Chamindu Eldeniya </span></p>
            {/* text-transparent bg-gradient-to-r from-red-700 to-green-700 bg-clip-text   */}
            <p className="text-[1.5rem] font-fontb md:text-2xl text-transparent bg-gradient-to-r from-white to-red-600 bg-clip-text ">
            {/* text-transparent bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text */}
              Data-driven Aspiring Web Developer | Seeking Internship. 
            <br/>
              Final Year Physical Science Student passionate about <br/> building innovative web solutions.
               </p>
               <Link to = "/projects">
            <button className="h-10 mt-10 ml-20 text-2xl text-white border-2 border-blue-600 md:ml-32 w-60 hover:animate-jump hover:bg-gradient-to-tl from-blue-600 to-yellow-400 via-green-600">View My Work</button>
            </Link>
            
        </div>
        
    </div>

    <div className="z-10 flex items-center justify-center order-1 w-1/2 mt-8 md:mt-0 md:order-2 ">
      
        <img src="./public/images/p1.jpg" className= "h-[200px] md:h-[300px] w-[200px] md:w-[300px] rounded-full border-4 border-green-500 "  alt="My Profile Photo" /> 
    </div>
</div>



  )
}
