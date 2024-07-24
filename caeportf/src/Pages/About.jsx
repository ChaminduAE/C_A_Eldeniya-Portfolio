import React from 'react'
import"./About.css"
import UnderNavbar from  "../Components/UnderNavbar"

export default function About() {
  return (
    <div className='px-8 md:px-32 h-[100vh] pt-40 bg-gradient-to-l from-white to-slate-400'>
        

    <p className="text-[2.1rem] md:text-[3rem] text-center underline mt-28 md:mt-10  ">About me</p>
      
      <p className="mt-20 text-[1.4rem] mb-0 md:mb-32">I'm a highly motivated computer science student with a thirst for knowledge and a passion for
         building innovative solutions. Currently in my junior year, I'm eager to leverage my classroom knowledge and skills in Web Development
          to contribute to a real-world development environment. I'm a fast learner, a team player, and always looking for opportunities to push 
          my abilities.
      </p>



    </div>
  )
}
