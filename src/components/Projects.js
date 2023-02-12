import React, { forwardRef } from "react";
import Matrix from "../elements/Matrix";
import Projecteach from "./Projecteach";

import { useNavigate } from "react-router-dom";

const Projects = forwardRef((_, ref) => {
  const navigate = useNavigate();

  const projects = {
    project1: {
      name: "Ujjwal",
      description:
        "Automated streetlight fault detection system that provides service engineer the reqired information to resolve the fault.",
      stack: "React,Flask,React-Native,Firebase,IoT(Arduino)",
      image: "./assets/projects/ujjwal.jpg",
      referance: "https://ujjwal.vercel.app",
    },
    project3: {
      name: "Geofencing",
      description:
        "An IoT based project that allows hospital admins to track patient's real-time location inside a facility and notified when the patient breaches the facility.",
      stack: "React,Flask,React-Native,Firebase,IoT(NodeMCU)",
      image: "./assets/projects/geofencing.jpg",
      referance: "https://github.com/FrozenSamurai/GeoFencing.git",
    },
    project2: {
      name: "Helpin'",
      description:
        "An android application for specially abled people to communicate with normal people also introducing morse code to communicate with people of 3 different impairments.",
      stack: "Java, XML,Firebase, Google-APIs",
      image: "./assets/projects/Helpin'.jpg",
      referance: "https://github.com/FrozenSamurai/Helpin",
    },
  };
  return (
    <section id="Projects" ref={ref}>
      <div className="bg-outer md:h-full h-full  w-screen flex pb-16 md:pb-0 justify-center items-center relative overflow-hidden">
        <div className="bg-inner h-full w-4/5  pb-3">
          <div className="relative  w-full flex flex-col justify-center items-center  mt-20">
            <div className="flex flex-row justify-between items-center  w-full">
              <div
                className="flex flex-row justify-start items-center md:w-4/5 w-3/5"
                data-aos="fade-right"
                data-aos-offset="0"
              >
                <h1 className="text-white font-firaCode font-bold md:text-3xl text-xl">
                  <span className="text-purple">#</span>projects
                </h1>
                <span className="border-[1px] md:w-3/6 w-2/3 border-purple md:ml-10 bg-purple ml-3"></span>
              </div>
              <div
                className="text-transparent md:w-60 font-bold font-firaCode flex flex-row md:text-lg text-xs cursor-pointer bg-slate-500 hover:text-purple btn-shine animate-ping md:pr-20"
                title="More Projects"
                data-aos="fade-left"
                data-aos-offset="0"
                onClick={() => {
                  navigate("/projects");
                  window.scrollTo(0, 0);
                }}
              >
                <h1 className="flex flex-row w-full">
                  View more <span className="">{" ~~>"}</span>
                </h1>
              </div>
            </div>
            <div className="md:px-2.5 space-y-5 md:space-y-0 md:mt-10 mt-10 grid md:grid-cols-3 grid-cols-1 md:gap-y-5 md:mb-3">
              {Object.keys(projects).map((key, ind) => {
                return (
                  <Projecteach
                    name={projects[key].name}
                    description={projects[key].description}
                    stack={projects[key].stack}
                    image={projects[key].image}
                    referance={projects[key].referance}
                    index={ind}
                    key={ind}
                  />
                );
              })}
            </div>
            <button
              className="border-2 md:hidden mt-5 animate-scale w-fit px-3 py-1  border-purple text-white hover:bg-purple"
              data-aos="fade-up"
              data-aos-delay="400"
              onClick={() => {
                navigate("/projects");
                window.scrollTo(0, 0);
              }}
            >
              View More {"~~>"}
            </button>
          </div>
        </div>
        <div className="absolute md:bottom-[25%] md:right-0 left-3 top-[15rem] border-gray h-20 w-fit ">
          <Matrix vertical={5} horizontal={2} space={4} />
        </div>
        <div className="absolute border-y-[1px] border-l-[1px] top-[28rem] right-0 border-gray h-32 md:w-16 w-8  "></div>
        <div className="absolute md:bottom-[25%] md:right-0 right-3 bottom-[15rem] border-gray h-20 w-fit md:hidden">
          <Matrix vertical={5} horizontal={2} space={4} />
        </div>
        <div className="absolute border-y-[1px] border-r-[1px] bottom-[32rem] left-0 border-gray h-32 md:w-16 w-10  md:hidden"></div>
      </div>
    </section>
  );
});

export default Projects;
