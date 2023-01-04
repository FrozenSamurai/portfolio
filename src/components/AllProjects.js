import React from "react";
import Navbar from "./Navbar";
import Projecteach from "./Projecteach";
import SmallPro from "./SmallPro";
import Footer from "./Footer";
import HangingSocials from "./HangingSocials";

const AllProjects = () => {
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
      name: "Geofencing using IoT",
      description:
        "An IoT based project that allows hospital admins to track patient's real-time location inside a facility and notified when the patient breaches the facility.",
      stack: "React,Flask,React Native,Firebase,IoT(NodeMCU)",
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
    project4: {
      name: "Portfolio",
      description: "You are using it Right Now.",
      stack: "React, Tailwind, JS, Three JS",
      image: "./assets/projects/portfolio.jpg",
      referance: "https://github.com/FrozenSamurai/Portfolio",
    },
    project5: {
      name: "Solo Facilities",
      description:
        "Website to interact with clients and make them understand the business services better.",
      stack: "React, Tailwind, JS, Three JS",
      image: "./assets/projects/solo.jpg",
      referance: "https://solofacilities.com",
    },
    project6: {
      name: "Whatsapp Link Generator",
      description:
        "Website to Generate Whatsapp link with pre-written messages with easy to use user interface.",
      stack: "React, Tailwind, JS",
      image: "./assets/projects/whatsapplink.jpg",
      referance: "https://whatsapp-link-generator-eight.vercel.app/",
    },
    project7: {
      name: "Nutritionist App",
      description:
        "Application for nutritionists to take 24Hrs diet recall to assess nutrients intake from the diet.",
      stack: "React, Tailwind, JS, Firebase",
      image: "./assets/projects/nutritionist-app.jpg",
      referance: "https://nutrirecall.vercel.app/",
    },
    // project8: {
    //   name: "Gits Website",
    //   description:
    //     "Group Of Information Technology Students committee website.",
    //   stack: "React, Tailwind, Three JS",
    //   image: "./assets/projects/gits-website.jpg",
    //   referance: "https://gits.dmce.ac.in/",
    // },
    project9: {
      name: "Billing app",
      description:
        "For fast billing of solo facilities company with exporting as pdf feature.",
      stack: "React, Tailwind, Firebase, Flask",
      image: "./assets/projects/solo-billing.jpg",
      referance: "https://solo-billing.vercel.app",
    },
  };

  const smallProjects = {
    project1: {
      name: "Flask_auth",
      description:
        "Authentication using Flask, APIS for Authentication (Signup, Signin, Forget Password) and using encryption.",
      stack: "Flask, SQL, Cryptography",
      referance: "https://github.com/FrozenSamurai/Flask_auth",
    },
    project2: {
      name: "Steganography",
      description:
        "Hiding image in image and text in image using stagnography and user interface.",
      stack: "Python, SQL, PyQt5",
      referance: "https://github.com/FrozenSamurai/Flask_auth",
    },
    project3: {
      name: "Game Arcade",
      description:
        "90s Games like traditional Snake game, Tetris, TicTacToe, Pussle, Sprite, Brick Breaker using Java.",
      stack: "Java, SQL, Swing, AWT",
      referance: "https://github.com/FrozenSamurai/Flask_auth",
    },
  };
  return (
    <>
      <div className="fixed w-screen flex justify-center z-50 ">
        <Navbar />
      </div>
      <div
        className="fixed ml-10 z-50 hidden md:block"
        // style={{
        //   display: window.innerWidth <= 450 ? "none" : "block",
        // }}
      >
        <HangingSocials />
      </div>
      <div className="bg-outer h-full w-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="bg-inner h-full w-4/5 flex flex-col justify-center items-center relative md:space-y-5">
          <div className="flex flex-col md:mt-20 justify-center items-center  w-full h-fit">
            <div className="flex flex-col w-full md:mt-0 mt-20 px-5 space-y-2">
              <h1 className="text-white font-firaCode font-bold md:text-3xl text-2xl ">
                <span className="text-purple">/</span>projects
              </h1>
              <h1 className="text-gray font-firaCode">List of my projects</h1>
            </div>
            <div className="flex flex-col w-full px-5 space-y-2 mt-10 mb-6">
              <h1 className="text-white font-firaCode font-bold md:text-xl text-lg ">
                <span className="text-purple">#</span>complete-apps
              </h1>
            </div>
            <div className=" grid md:grid-cols-3 grid-cols-1 md:gap-y-5 md:px-2.5  space-y-5 md:space-y-0">
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
            <div className="flex flex-col w-full px-5 space-y-2 mt-16 mb-6">
              <h1 className="text-white font-firaCode font-bold md:text-xl text-lg ">
                <span className="text-purple">#</span>small-projects
              </h1>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-y-5 md:px-2.5 mb-10 space-y-5 md:space-y-0">
              {Object.keys(smallProjects).map((key, ind) => {
                return (
                  <SmallPro
                    name={smallProjects[key].name}
                    description={smallProjects[key].description}
                    stack={smallProjects[key].stack}
                    referance={smallProjects[key].referance}
                    index={ind}
                    key={ind}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className=" mt-5 lg:mt-0 w-full bg-outer border-t-2 h-1/4 pb-5 z-[1000] border-gray flex flex-col justify-start items-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AllProjects;
