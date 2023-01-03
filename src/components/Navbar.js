import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ inView }) => {
  const navigate = useNavigate();

  return (
    <div className=" h-20 flex justify-between items-center w-4/5 bg-inner bg-opacity-80">
      <div
        href="/"
        className="flex flex-row justify-center items-center space-x-3 pl-1"
      >
        <img src="./assets/Union.svg" alt="Union" className="w-5 h-5" />
        <h1 className="capitalize font-firaCode font-extrabold text-white">
          Raj Jadhav
        </h1>
      </div>
      <div className="md:flex flex-row justify-center items-center space-x-10 pr-10 hidden">
        <div
          onClick={() => {
            navigate("/", { state: { name: "Home" } });
            const violation = document.getElementById("Home");
            window.scrollTo({
              top: violation.offsetTop,
              behavior: "smooth",
            });
          }}
          className={`lowercase font-firaCode font-extrabold ${
            inView === "Home" ? "text-white" : "text-gray"
          } nav-item`}
        >
          <span className="text-[#C778DD]">#</span>
          Home
        </div>
        <div
          onClick={() => {
            navigate("/", { state: { name: "Projects" } });
            const violation = document.getElementById("Projects");
            window.scrollTo({
              top: violation.offsetTop,
              behavior: "smooth",
            });
          }}
          className={`lowercase font-firaCode font-extrabold ${
            inView === "Projects" || inView === "Skills"
              ? "text-white"
              : "text-gray"
          } nav-item`}
        >
          <span className="text-[#C778DD]">#</span>
          Works
        </div>
        <div
          onClick={() => {
            navigate("/", { state: { name: "AboutMe" } });
            const violation = document.getElementById("AboutMe");
            window.scrollTo({
              top: violation.offsetTop,
              behavior: "smooth",
            });
          }}
          className={`lowercase font-firaCode font-extrabold ${
            inView === "AboutMe" ? "text-white" : "text-gray"
          } nav-item`}
        >
          <span className="text-[#C778DD]">#</span>
          About-me
        </div>
        <div
          onClick={() => {
            navigate("/", { state: { name: "Contact" } });
            const violation = document.getElementById("Contact");
            window.scrollTo({
              top: violation.offsetTop,
              behavior: "smooth",
            });
          }}
          className={`lowercase font-firaCode font-extrabold ${
            inView === "Contact" ? "text-white" : "text-gray"
          } nav-item`}
        >
          <span className="text-[#C778DD]">#</span>
          Contacts
        </div>
      </div>
    </div>
  );
};

export default Navbar;
