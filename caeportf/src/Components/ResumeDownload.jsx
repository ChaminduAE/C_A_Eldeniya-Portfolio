import React from 'react';

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
        </div>
        </button>
        
      </a>
    </div>
  );
};

export default ResumeDownload;
