import "./App.css";
import Home from "./components/Home";
import HangingSocials from "./components/HangingSocials";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div
        className="fixed ml-5 z-50"
        style={{
          display: window.innerWidth <= 450 ? "none" : "block",
        }}
      >
        <HangingSocials />
      </div>
      <div className="fixed w-full flex justify-center z-50 ">
        <Navbar />
      </div>
      <Home />
      <Projects />
    </>
  );
}

export default App;
