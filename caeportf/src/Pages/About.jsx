import React from 'react'
import"./About.css"
import UnderNavbar from  "../Components/UnderNavbar"
import BgAnimation from '../Components/BgAnimation'

export default function About() {
  return (
    
   
    <div className='relative px-8 md:px-32 h-[250vh] md:h-[140vh] z-20 pt-40'>
  
  <video className="absolute inset-0 z-10 object-cover w-full h-full" muted loop autoPlay>
    <source src="./public/videos/z.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="relative z-30">
    <p className="text-[2.6rem] md:text-[3rem] text-white text-center underline mt-10 md:mt-10 font-fonta">About me</p>
    <p className="mt-20 text-[1.6rem] mb-0 md:mb- font-fontb text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text">
    I'm a highly motivated Physical Science student specializing in Computer Science, with a thirst for knowledge and a passion for building innovative
     solutions. Currently in my junior year, I am eager to leverage my classroom knowledge and skills in Web Development and Data Analysis to contribute
      to a real-world development environment.<br/><br/>

    In Web Development, I have experience creating dynamic and responsive websites using HTML, CSS (including Tailwind CSS), JavaScript, and React. 
    I have successfully built projects that incorporate advanced features like background videos, animations, and gradient colors.<br/><br/>

  On the Data Analysis and Visualization side, I am proficient in using tools like Power BI to create insightful dashboards and reports. 
  I have worked on projects involving data cleaning, analysis, and visualization, ensuring that complex data is presented in an understandable and 
  actionable manner.<br/><br/>

  I'm a fast learner, a team player, and always looking for opportunities to push my abilities further. Whether it's developing web applications or 
  analyzing data, I am committed to delivering high-quality solutions and continuously improving my skill set.


    </p>
  </div>
</div>

  )
}
