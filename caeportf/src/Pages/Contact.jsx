import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className='relative w-screen px-10 pt-10 pb-6 md:pb-20 md:px-40 z-20' id="contact" >
      {/* bg-gradient-to-l from-white to-yellow-200 via-green-300 */}
      {/* <video className="absolute inset-0 z-10 object-cover w-full h-full" muted loop autoPlay>
        <source src="./public/videos/z.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className="relative z-30">
        <p className="text-[2rem] md:text-[2rem] text-center underline mt-10 md:mt-10">Contact Me</p>
        <div className='flex flex-col gap-6 md:gap-20 md:flex-row'>
          <div className="w-full h-full md:w-1/2">
            <p className='mt-12 text-2xl text-left md:mt-10 md:text-center'>Get in Touch</p>
            <p className='mt-6 md:mt-20 content'>Feel free to get in touch with me for any inquiries, project discussions, or collaborations. I look forward to hearing from you!</p>
            <table className='w-[300px] h-[75px] mt-10'>
              <tr>
                <td><p className='content'>Telephone:</p></td>
                <td><p className='content2'>0766265828</p></td>
              </tr>
              <tr>
                <td><p className='content'>Email:</p></td>
                <td><p className='content2'>caeldeniya@outlook.com</p></td>
              </tr>
            </table>
          </div>

          <div className="w-full h-full md:w-1/2">
            <p className='mt-6 text-2xl text-left md:text-center md:mt-10'>Contact Form</p>
            <form className="mt-10" action="/submit" method="POST">
              <div className='mt-10 ml-2 md:mt-20 md:ml-20'>
                <div className='flex gap-0 md:gap-10'>
                  <div><label htmlFor="username" className='content'>UserName</label></div>
                  <div className='ml-10'><input type="text" name="username" className='border border-black'></input></div>
                </div>
                <div className='flex gap-0 md:gap-10'>
                  <div><label htmlFor="email" className='content'>Email</label></div>
                  <div className='ml-8 md:ml-10'><input type="text" name="email" className='border border-black ml-14'></input></div>
                </div>
                <div className='flex gap-0 md:gap-10'>
                  <div><label htmlFor="msg" className='content'>Message</label></div>
                  <div className='ml-8 md:ml-10'><input type="text" name="msg" className='ml-6 border border-black'></input></div>
                </div>
                <div className='flex items-center justify-center mt-10'>
                  <button className='w-20 h-10 text-white bg-black hover:animate-jump'>SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
