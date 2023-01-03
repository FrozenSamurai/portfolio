import "./App.css";
import Home from "./components/Home";
import HangingSocials from "./components/HangingSocials";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

import { Route, Routes } from "react-router-dom";
import AllProjects from "./components/AllProjects";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useInView } from "react-intersection-observer";
import MoreAboutMe from "./components/MoreAboutMe";
import { Model } from "./components/Model/Model";
import ThreedSamurai from "./components/Model/ThreedSamurai";

function App() {
  const options = {
    rootMargin: "-90px 0px 0px 0px",
  };

  const HomeScreen = () => {
    const [homeRef, homeInview] = useInView(options);
    const [projectRef, projectInview] = useInView(options);
    const [skillRef, skillInview] = useInView(options);
    const [aboutRef, aboutInview] = useInView(options);
    const [contactRef, contactInview] = useInView(options);
    const [inView, SetInview] = useState("Home");

    const location = useLocation();
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
      if (homeInview) {
        SetInview("Home");
      } else if (projectInview) {
        SetInview("Projects");
      } else if (skillInview) {
        SetInview("Skills");
      } else if (aboutInview) {
        SetInview("AboutMe");
      } else if (contactInview) {
        SetInview("Contact");
      }
    }, [homeInview, projectInview, skillInview, aboutInview, contactInview]);

    useEffect(() => {
      const violation = document.getElementById(
        location.state ? location.state.name : "Home"
      );
      window.scrollTo({
        top: violation.offsetTop,
        behavior: "smooth",
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        <div
          className="fixed ml-10 z-50 hidden md:block"
          // style={{
          //   display: window.innerWidth <= 450 ? "none" : "block",
          // }}
        >
          <HangingSocials />
        </div>
        <div className="fixed w-screen flex justify-center z-50 ">
          <Navbar inView={inView} />
        </div>
        <Home ref={homeRef} />
        <Projects ref={projectRef} />
        <Skills ref={skillRef} />
        <AboutMe ref={aboutRef} />
        <Contact ref={contactRef} />
        <div
          className={`w-fit bg-none h-fit fixed bottom-0 lg:block hidden z-[1000] ${
            playing ? "rotate-6 -right-14" : "-right-5 "
          }`}
          // data-aos="fade-right"
        >
          <h1
            className={`-rotate-6  w-52 text-center  bg-inner border-white border-2 text-white ${
              playing ? "block" : "hidden"
            }`}
          >
            I am a Samurai, a symbol of discipline
          </h1>
          <div className="w-fit h-fit raise-up">
            <ThreedSamurai playing={playing} setPlaying={setPlaying} />
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="w-full h-full relative bg-outer">
      <Routes>
        <Route index exact path="/" element={<HomeScreen />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/aboutme" element={<MoreAboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
