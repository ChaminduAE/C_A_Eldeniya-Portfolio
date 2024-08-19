
import "./UnderNavbar.css"

import { HashLink as Link } from 'react-router-hash-link';

export default function UnderNavbar() {
  return (
    <>
      <div className='flex z-40 flex-wrap fixed top-[8vh] md:top-[11vh] items-center justify-center gap-1 md:gap-2 w-full h-[6vh] md:h-[11vh]'>
        <Link smooth to="#experience">
          <button className='expproj'>Experience</button>
        </Link>
        <Link smooth to="#skills">
          <button className='expproj'>Skills</button>
        </Link>
        <Link smooth to="#projects">
          <button className='expproj'>Projects</button>
        </Link>
        <Link smooth to="#blogs">
          <button className='expproj'>Blogs</button>
        </Link>
      </div>

    

    </>
  );
}

