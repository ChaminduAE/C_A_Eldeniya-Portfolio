import { useEffect, useRef, useState } from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import UnderNavbar from "./Components/UnderNavbar";
import Blogs from "./Pages/Blogs";
import Footer from "./Components/Footer"
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const Homepage = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      try {
        const effect = BIRDS({
          el: vantaRef.current,
          THREE, // Pass the THREE.js instance
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          birdSize: 0.20

        });
        setVantaEffect(effect);
      } catch (error) {
        console.error("Vanta.js failed to initialize:", error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative min-h-screen overflow-hidden" ref={vantaRef}>
      <Navbar />
      <UnderNavbar />
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow">
         
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          {/* <section id="experience">
            <Experience />
          </section> */}
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section> 
          {/* <section id="blogs">
            <Blogs />
          </section> */}
          {/* <section id="contact">
            <Contact/>
          </section> */}
          <section id="footer">
            <Footer/>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
