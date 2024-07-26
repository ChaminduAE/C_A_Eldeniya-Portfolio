import React from 'react'
import Navbar from "../Components/Navbar"
import "./Skills.css"
import UnderNavbar from '../Components/UnderNavbar'
export default function Skills() {
  return (
    <div className="px-4 pt-40 pb-20 bg-white md:px-32 w-vw">
    
    {/* <video className="absolute inset-0 object-cover w-full h-full" muted loop autoPlay>
        <source src="./public/videos/z.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
     */}

      <p className="text-[3rem] text-center underline mt-10 md:mt-10 text-red-600 font-bold ">Skills</p>
      <div className="flex flex-col items-center justify-center gap-2 mt-10 md:mt-20 md:flex-row md:gap-20">
        <button className="skillsh" >Front-End Development</button>
        <button className="skillsh">Data Analysis</button>
        <button className="skillss">Communication</button>
        <button className="skillss">Leadership & TeamWork</button>
        <button className="skillss">Problem Solving</button>

      
      </div>
      <div className="">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[150px] mt-20 md:mt-36 ">
          <p className="topic1">Languages</p>
          <div className="px-10 md:px-0 mt-14 md:mt-32">
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-10 hover:animate-shake">
            <div><div className='imgsize'><img src="../public/images/web/html.svg" className="object-contain " alt="HTML Logo" /></div><div id="imggaptext">HTML</div></div>
              <div><div className='imgsize'><img src="../public/images/web/tailwind.svg" className="object-contain ml-8 " alt="HTML Logo" /></div><div id="imggaptext">TAILWIND CSS</div></div>
              <div><div className='imgsize'><img src="../public/images/web/css.svg" className="object-contain " alt="HTML Logo" /></div><div className='ml-2' id="imggaptext">CSS</div></div>
              <div><div className='imgsize'><img src="../public/images/web/js.svg" className="object-contain ml-4" alt="HTML Logo" /></div><div id="imggaptext">JAVASCRIPT</div></div>
              <div><div className='imgsize'><img src="../public/images/web/java.svg" className="object-contain " alt="HTML Logo" /></div><div id="imggaptext">JAVA</div></div>
              <div><div className='imgsize'><img src="../public/images/web/c.svg" className="object-contain " alt="HTML Logo" /></div><div className='ml-3' id="imggaptext">C</div></div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[150px] mt-52 md:mt-36  ">
          <p className="topic1">Frameworks| Libraries | IDEs| Code Editor <br/> DataBases | Version Control </p>
          <div className="px-10 md:px-0 mt-14 md:mt-24">
            <div className="techbox ">
              <div><div className='imgsize'><img src="../public/images/web/react.svg" className="object-contain " alt="HTML Logo" /></div><div id="imggaptext">REACT</div></div>
              <div><div className='imgsize'><img src="../public/images/web/node.svg" className="object-contain " alt="HTML Logo" /></div><div id="imggaptext">NODE</div></div>
              <div><div className='imgsize'><img src="../public/images/web/mongodb.svg" className="object-contain ml-6 " alt="HTML Logo" /></div><div id="imggaptext">MONGODB</div></div>
              <div><div className='imgsize'><img src="../public/images/web/github.svg" className="object-contain ml-2" alt="HTML Logo" /></div><div id="imggaptext">GITHUB</div></div>
              <div><div className='imgsize'><img src="../public/images/web/vscode.svg" className="object-contain " alt="HTML Logo" /></div><div id="imggaptext">VS CODE</div></div>
              
            </div>
          </div>
        </div>
      </div>


        <div className="flex flex-col mt-20 md:mt-0 md:flex-row">
        <div className="w-full md:w-1/2 h-[150px] mt-52 ">
          <p className="topic1 ">Statistical Softwares</p>
          <div className="mt-14 md:mt-24 ">
            <div className="techbox ">
            <div><div className='imgsize'><img src="../public/images/web/powerbi.svg" className="object-contain ml-4"  alt="HTML Logo" /></div><div id="imggaptext">POWER BI</div></div>
            <div><div className='imgsize'><img src="../public/images/web/minitab.svg" className="object-contain ml-4" alt="HTML Logo" /></div><div id="imggaptext">MINITAB</div></div>
              
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[150px] mt-20 md:mt-52  ">
          <p className="topic1">Microsoft Office</p>
          <div className="mt-14 md:mt-24 ">
            <div className="techbox ">
            <div><div className='imgsize'><img src="../public/images/web/word.svg" className="object-contain " alt="HTML Logo" /></div><div id="imggaptext">WORD</div></div>
            <div><div className='imgsize'><img src="../public/images/web/excel.svg" className="object-contain " alt="HTML Logo" /></div><div id="imggaptext">EXCEL</div></div>
            <div><div className='imgsize'><img src="../public/images/web/powerpoint.svg" className="object-contain ml-8 " alt="HTML Logo" /></div><div id="imggaptext">POWER POINT</div></div>
             
            </div>
          </div>
        </div>

        </div>

</div>

<div className="mt-28 md:mt-48">
        <p className="topicedu"  >Education</p>
        

        <div className="educont">
          <div className="edubox ">
            <div className="w-1/4 h-full "><img src="../public/images/edu/uoklogo.png " className="p-6" alt="HTML Logo" /></div>
            <div className="textbox ">
              <p className="text1">B.Sc in Physical Science</p>
              <p className="text2">University of Kelaniya</p>
              <p className="text2">2021-2024</p>
            </div>
          </div>

          <div className="edubox">
            <div className="w-1/4 h-full pt-7 "><img src="../public/images/edu/esoft.jpg " className="p-6" alt="HTML Logo" /></div>
            <div className="textbox ">
              <p className="text1">Diploma in Information Technology</p>
              <p className="text2">Esoft Metro Campus, Piliyandala</p>
              <p className="text2">2019-2020</p></div>
          </div>

        </div>

        <div className="educont">

          <div className="edubox">
            <div className="w-1/4 h-full mt-4"><img src="../public/images/edu/aq.png " className="p-6" alt="HTML Logo" /></div>
            <div className="textbox ">
              <p className="text1">Certificate in Spoken English for Professional Excellence</p>
              <p className="text2"> Aquinas College of Higher Education</p>
              <p className="text2">2024 Present</p>
            </div>
          </div>

          <div className="edubox ">
            <div className="w-1/4 h-full mt-6 "><img src="../public/images/edu/esoft.jpg " className="p-6" alt="HTML Logo" /></div>
            <div className="textbox ">
              <p className="text1">Diploma in English</p>
              <p className="text2">Esoft Metro Campus, Piliyandala</p>
              <p className="text2">2020-2021</p>
            </div>
          </div>

        </div>
</div>

         <div className='mt-20 md:mt-40'>
        <p className="topiccer">Certifications</p>

        <div className="educont">

          <div className="edubox ">
           <div className="w-1/4 h-full mt-8 "><img src="../public/images/edu/meta.png " className="p-3" alt="HTML Logo" /></div>
            <div className="textbox ">
            <p className="text1">Introduction to Front-End Development</p>
            <p className="text2"> Meta Technology Company</p>
            <p className="text2">2024-May</p>
            </div>
          </div>

      <div className="edubox">
        <div className="w-1/4 h-full "><img src="../public/images/edu/solo.png " className="p-4" alt="HTML Logo" /></div>
        <div className="textbox ">
        <p className="text1">Introduction to Python</p>
        <p className="text2">Sololearn</p>
        <p className="text2">2024 March</p>
        </div>
      </div>


      

</div>
</div>
      
    
    </div>
  )
}



