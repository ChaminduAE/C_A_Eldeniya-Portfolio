
import React from 'react';

import './App.css'

import Navbar from "./Components/Navbar"
// import UnderNavbar from "./Components/UnderNavbar"

// import Home from "./Pages/Home"
// import About from "./Pages/About"
// import Skills from "./Pages/Skills" 
// import Resume from "./Pages/Resume"
// import Projects from "./Pages/Projects"
// import Blogs from "./Pages/Blogs"
// import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"

import AppRoutes from './Routes';


function App() {
  return (
    <div>
      {/* <Navbar/>
      <UnderNavbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>  
      <Footer/>  */}
      <AppRoutes/>
     

     

    </div>
  );
}

export default App;





