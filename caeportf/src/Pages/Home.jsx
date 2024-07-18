import React from 'react'
import BgAnimation from "../Components/BgAnimation"
import Navbar from "../Components/Navbar"
import UnderNavbar from "../Components/UnderNavbar"




export default function Home() {
  return (
    <div>
  
  <Navbar/>
  {/* <UnderNavbar/> */}


  <div className="relative flex h-[90vh] overflow-hidden items-center">
   {/* <BgAnimation/>  */}
    <div className="z-30 w-1/2">
        <div className=" ml-32  w-[700px] flex flex-col gap-6 h-full  ">
            <p className="text-5xl ">Hello,</p>
              
              <p className="text-4xl hover:animate-jump ">I'm Chamindu Eldeniya</p>
              
              <p className="text-2xl ">Data-driven Aspiring Web Developer | Seeking Internship. 
              <br/>
              Final Year Physical Science Student passionate about <br/> building innovative web solutions.
               </p>
            <button className="h-10 mt-10 ml-32 text-2xl border-2 border-blue-600 w-60 hover:animate-jump">View My Work</button>
            
        </div>
        {/* <div className="mt-24 ml-20"><UnderNavbar/></div> */}
    </div>

    <div className="flex items-center justify-center w-1/2 ">
      
        <img src="./public/images/profile.jpg" className= "h-[470px] w-[400px]"  alt="My Profile Photo" /> 
    </div>
</div>

</div>

  )
}
