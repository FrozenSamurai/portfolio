import React from "react";
import Matrix from "../elements/Matrix";
import Projecteach from "./Projecteach";

const Projects = () => {
  const projects = {
    project1: {
      name: "Ujjwal",
      description:
        "Automated streetlight fault detection system that provides service engineer the reqired information to resolve the fault.",
      stack: "React,Flask,React Native,Firebase,IoT(Arduino)",
      image: "./assets/projects/ujjwal.jpg",
      referance: "https://ujjwal.vercel.app",
    },
    project3: {
      name: "Geofencing",
      description:
        "An IoT based project that allows hospital admins to track patient's real-time location inside a facility and notified when the patient breaches the facility.",
      stack: "React,Flask,React Native,Firebase,IoT(NodeMCU)",
      image: "./assets/projects/geofencing.png",
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
    <div className="bg-outer md:h-screen h-full w-screen flex pb-16 md:pb-0 justify-center items-center relative overflow-hidden">
      <div className="bg-inner h-full w-4/5  ">
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
            <a
              className="text-white font-firaCode flex flex-row md:text-lg text-xs cursor-pointer hover:text-purple"
              title="My Github Profile"
              href="https://github.com/FrozenSamurai"
              rel="noreferrer"
              target="_blank"
              data-aos="fade-left"
              data-aos-offset="0"
            >
              View more <span className="">{" ~~>"}</span>
            </a>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-start md:mx-5 md:space-x-5  md:space-y-0 md:mt-16 mt-10">
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
  );
};

export default Projects;
