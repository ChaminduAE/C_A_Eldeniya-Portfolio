
import Logo from "./Logo"
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import "./Navbar.css"
import Resume from "./ResumeDownload"


export default function Navbar() {
  return (
    <div className=' fixed z-50 flex  w-full h-[8vh] md:h-[11vh]  '>

      
        <div className="w-1/4 ">
          <Logo />
        </div>
        <div className="flex items-center justify-start md:justify-center ml-[20px] md:ml-[350px] h-full gap-1 md:gap-10 ">
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 mb-4 ml-24 md:mb-0 md:mt-0 md:items-center md:justify-center md:gap-8 md:ml-96 md:relative">
          
          <a href="mailto:caeldeniya@outlook.com">  <MdOutlineMarkEmailUnread className="navicon" /></a>
          <a href="https://www.linkedin.com/in/chamindueldeniya"><GrLinkedin className="navicon" /></a>
          <a href=" https://github.com/ChaminduAE"><FaGithub  className="navicon" /></a>
          
        </div>
        <div className="relative flex items-center ml-6 md:ml-20 ">
          <Resume/>
        </div>
      

    </div>
  )
}
