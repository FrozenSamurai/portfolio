import "./App.css";
import Home from "./components/Home";
import HangingSocials from "./components/HangingSocials";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
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
        <Navbar />
      </div>
      <Home />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
