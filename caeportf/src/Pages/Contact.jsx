import React from 'react'
import "./Contact.css"
import Footer from "../Components/Footer"

export default function Contact() {
  return (
    <div className='w-screen px-10 pt-40 pb-24 md:px-40 bg-gradient-to-tl from-white to-gray-500 '>
      

      <p className="text-[2rem] md:text-[2rem] text-center underline mt-28 md:mt-10">Contact Me</p>
      <div className='flex flex-col gap-6 md:gap-20 md:flex-row'>

      <div className="w-full h-full md:w-1/2 ">
      <p className='mt-12 text-2xl text-left md:mt-10 md:text-center'>Get in Touch </p>

      <p className='mt-6 md:mt-20 content'>Feel free to get in touch with me for any inquiries, project discussions, or collaborations. I look forward to hearing from you!</p>
      <table className='w-[300px] h-[75px] mt-10'>
        <tr className=''><td > <p className='content'>Telephone:</p></td><td><p className='content2'> 0766265828   </p></td></tr>
        <tr><td > <p className='content'>Email: </p></td><td>  <p className='content2'> caeldeniya@outlook.com  </p></td></tr>
      </table>

      </div>

      <div className="w-full h-full md:w-1/2 ">
      <p className='mt-6 text-2xl text-left md:text-center md:mt-20'>Contact Form</p>

      <form className="mt-10" action= "/submit" method="POST">
      <div className='mt-10 ml-2 md:mt-20 md:ml-20 '>
    
<div className='flex gap-0 md:gap-10'>

  <div><label for ="username" className='content'>UserName</label> </div>  <div className='ml-10'><input  type="text" name="username" className='border border-black'></input></div>
  </div>
  <div className='flex gap-0 md:gap-10'>
  <div><label for ="email" className='content' >Email</label></div>    <div className='ml-8 md:ml-10'> <input  type="text" name="email" className='border border-black ml-14'></input></div>
  </div>
  <div className='flex gap-0 md:gap-10'>
  <div><label for="msg" className='content' >Message</label></div>      <div className='ml-8 md:ml-10'><input type="text" name="msg" className='ml-6 border border-black'></input></div>


  </div>
  <div className='flex items-center justify-center mt-10'>
  <button className='w-20 h-10 text-white bg-black hover:animate-jump'>SUBMIT</button>
        
  </div>
  </div>
  </form>
  </div>

  



  </div>
  
  
  
</div>

  
    
  )
}
