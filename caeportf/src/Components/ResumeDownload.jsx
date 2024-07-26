import React from 'react';
import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <a
        href="/Chamindu_Eldeniya_Resume.pdf"
        download
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        
        <button className="p-2 text-[1rem] md:text-xl text-white bg-black hover:text-red-500 hover:animate-jump">
        <div className='flex gap-1'>
        <p>Resume</p>
        {/* <FaDownload className='pt-2' /> */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4 4m0 0l4-4m-4 4V4m8 4h4m0 0h-4m4 0V4m-4 16h4"
          />
        </svg> */}
        </div>
        </button>
        
      </a>
    </div>
  );
};

export default ResumeDownload;
