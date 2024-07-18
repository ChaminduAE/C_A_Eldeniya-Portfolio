import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className='mx-40 mt-40 '>
      

      <p className="text-[3rem] text-center">Contact Me</p>
      <div className='flex '>

      <div className="w-1/2 h-vh">
      <p className='mt-20 text-3xl text-center'>Get in Touch </p>

      <p className='mt-20 content'>Feel free to get in touch with me for any inquiries, project discussions, or collaborations. I look forward to hearing from you!</p>
      <table className='w-[300px] h-[75px] mt-10'>
        <tr ><td > <p className='content'>Telephone</p></td><td><p className='content2'>  0766265828   </p></td></tr>
        <tr><td > <p className='content'>Email </p></td><td>  <p className='content2'>caeldeniya@outlook.com  </p></td></tr>
      </table>

      </div>

      <div className="w-1/2 h-vh">
      <p className='mt-20 text-3xl text-center'>Contact Form</p>

      <form className="mt-10" action= "/submit" method="POST">
      <div className='mt-20 ml-20 '>
    
<div className='flex gap-10'>

  <div><label for ="username" className='content'>UserName</label> </div>  <div className='ml-10'><input  type="text" name="username" className='border border-black'></input></div>
  </div>
  <div className='flex gap-10'>
  <div><label for ="email" className='content' >Email</label></div>    <div className='ml-10'> <input  type="text" name="email" className='border border-black ml-14'></input></div>
  </div>
  <div className='flex gap-10'>
  <div><label for="msg" className='content' >Message</label></div>      <div className='ml-10'><input type="text" name="msg" className='ml-6 border border-black'></input></div>


  </div>
  <button className='w-20 h-10 mt-10 ml-32 text-white bg-black'>SUBMIT</button>
        
  </div>
  </form>
  </div>

  



  </div>
  
  
</div>

      
    
  )
}
