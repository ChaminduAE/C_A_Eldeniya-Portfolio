import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import About from './Pages/About';
import Experience from "./Pages/Experience"
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import UnderNavbar from './Components/UnderNavbar';
import Blogs from './Pages/Blogs';



const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <UnderNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
