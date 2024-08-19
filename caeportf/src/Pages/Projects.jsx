import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="px-6 pt-40 md:px-20 pb-52 " id="projects">
      <p className="text-[3rem] text-center text-white font-bold underline mt-10 md:mt-10 font-fonta">
        Projects
      </p>
      <div className="flex flex-wrap justify-center gap-10 mt-2">
        <div class="projectcard">
          <div class="projectcardup">
            <img
              src="../public/images/proj/blog.jpg "
              className=""
              alt="proj1"
            />
          </div>
          <div class="projectcarddown">
            <p class="projtit">MOSAIC </p>
            <p class="projdes">A Full-Stack Blogging Platform </p>
            <p className="projtit">
              <a href="https://github.com/ChaminduAE/MOSAIC-Blogging-Platform.git">
                <FaGithub />
              </a>{" "}
            </p>
          </div>
        </div>

        <div class="projectcard">
          <div class="projectcardup">
            <img
              src="../public/images/proj/portf.jpg "
              className=""
              alt="proj1"
            />
          </div>
          <div class="projectcarddown">
            <p class="projtit">A Portfolio Website </p>
            <p class="projdes">My Personal Portfolio</p>
            <p className="projtit">
              <a href="https://github.com/ChaminduAE/C_A_Eldeniya-Portfolio.git">
                <FaGithub />
              </a>
            </p>
          </div>
        </div>

        <div class="projectcard">
          <div class="projectcardup">
            <img src="../public/images/proj/air.jpg" className="" alt="proj1" />
          </div>
          <div class="projectcarddown">
            <p class="projtit">
              Air Quality Index From Various Locations of India{" "}
            </p>
            <p class="projdes">My Latest Power BI Dashboard Project</p>
            <p className="projtit">
              <a href="https://github.com/ChaminduAE/Air-Quality-Index-From-Various-Locations-of-India---My-second-Power-BI-Project.git">
                <FaGithub />
              </a>
            </p>
          </div>
        </div>

        <div class="projectcard">
          <div class="projectcardup">
            <img
              src="../public/images/proj/crash.jpg "
              className=""
              alt="proj1"
            />
          </div>
          <div class="projectcarddown">
            <p class="projtit">
              Road Accident Data by Vehicle Type and Provinces in Sri Lanka -
              2012{" "}
            </p>
            <p class="projdes">My first Power BI Dashboard Project</p>
            <p className="projtit">
              <a href="https://github.com/ChaminduAE/Road_accident_data_by_vehicle_type_Power-BI-Project.git">
                <FaGithub />
              </a>
            </p>
          </div>
        </div>

        <div class="projectcard">
          <div class="projectcardup">
            <img
              src="../public/images/proj/traf.jpg "
              className=""
              alt="proj1"
            />
          </div>
          <div class="projectcarddown">
            <p class="projtit">
              Identifying the Factors Affecting Traffic Jam in Kiribathgoda Area{" "}
            </p>
            <p class="projdes">Statistical Research Project</p>
            <p className="projtit">
              <a href="https://github.com/ChaminduAE/Identifying-the-Factors-Affecting-Traffic-Jam-in-Kiribathgoda-Area--Statistical-Research-Project-.git">
                <FaGithub />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
