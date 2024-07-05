import React from 'react'
import BgAnimation from "../Components/BgAnimation"
import Navbar from "../Components/Navbar"

export default function Home() {
  return (
    <div>
  
  <Navbar/>

  <div className="relative flex h-[90vh] overflow-hidden ">
  <BgAnimation/>
    <div className="w-1/2 h-screen ">
        <div className=" relative z-30 top-24 left-24 w-[400px] h-[200px] ">
              <p className="text-8xl animate-fade-up">
              Hello,</p><br/> 
              <p className="text-4xl animate-fade-up">I'm Chamindu Eldeniya.</p>
              <br/><p className="text-2xl animate-fade-up">I am a fresh graduate from University of Kelaniya,
              <br/>My future goal is to become a full-stack developer.
            </p>
        </div>
    </div>
    <div className="w-1/2 h-screen ">
      
        <div class="flex  animate-fade-down m-20"><img src="./public/images/image1.png"   alt="My Profile Photo" />
        </div>
    </div>
</div>

</div>

  )
}
