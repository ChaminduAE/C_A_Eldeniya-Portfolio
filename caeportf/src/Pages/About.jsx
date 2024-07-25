import React from 'react'
import"./About.css"
import UnderNavbar from  "../Components/UnderNavbar"
import BgAnimation from '../Components/BgAnimation'

export default function About() {
  return (
    
    <div className=' px-8 md:px-32 h-[110vh] md:h-[100vh] z-30 pt-40 bg-gradient-to-l from-white to-yellow-200 via-green-300'>
     {/* <BgAnimation/>  */}
        

    <p className="z-30 text-[2.6rem] md:text-[3rem] text-center underline mt-10 md:mt-10 font-fonta ">About me</p>
      
      <p className="z-30 mt-20 text-[1.6rem] mb-0 md:mb-32 font-fontb text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text ">I'm a highly motivated computer science student with a thirst for knowledge and a passion for
         building innovative solutions. Currently in my junior year, I'm eager to leverage my classroom knowledge and skills in Web Development
          to contribute to a real-world development environment. I'm a fast learner, a team player, and always looking for opportunities to push 
          my abilities.
      </p>



    </div>
  )
}
