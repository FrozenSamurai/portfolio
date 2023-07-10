import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = ({ inView }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const navigate = useNavigate();

  return (
    <div
      className=" h-20 flex justify-between items-center w-4/5 bg-inner bg-opacity-80"
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <a
        href="/"
        className="flex flex-row justify-center items-center space-x-3 pl-1"
      >
        <img src="./assets/Union.svg" alt="Union" className="w-5 h-5" />
        <h1 className="capitalize font-firaCode font-extrabold text-white">
          Raj Jadhav
        </h1>
      </a>
      <button
        className="text-gray-300 cursor-pointer text-xl transition-all duration-300 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {!navbarOpen ? (
          <GiHamburgerMenu color="white" className="mx-1" />
        ) : (
          <IoClose color="white" className="mx-1 animateCross" />
        )}
      </button>
      <div
        className={
          " flex-grow items-center top-16 md:hidden right-0 left-0" +
          (navbarOpen ? " fixed" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex glow font-sora font-semibold bg-opacity-80 bg-outer pb-5 flex-col w-full items-center space-y-5 lg:flex-row list-none lg:ml-auto lg:justify-end">
          <li
            style={{
              animationDelay: window.innerWidth < 1024 ? "100ms" : "2s",
            }}
          >
            <div
              onClick={() => {
                navigate("/", { state: { name: "Home" } });
                const violation = document.getElementById("Home");
                window.scrollTo({
                  top: violation.offsetTop,
                  behavior: "smooth",
                });
              }}
              className={`lowercase font-firaCode font-extrabold animate-fadeDown1  ${
                inView === "Home" ? "text-white" : "text-gray"
              } nav-item`}
            >
              <span className="text-[#C778DD]">#</span>
              Home
            </div>
          </li>
          <li
            style={{
              animationDelay: window.innerWidth < 1024 ? "300ms" : "2.2s",
            }}
          >
            <div
              onClick={() => {
                navigate("/", { state: { name: "Projects" } });
                const violation = document.getElementById("Projects");
                window.scrollTo({
                  top: violation.offsetTop,
                  behavior: "smooth",
                });
              }}
              className={`lowercase font-firaCode font-extrabold animate-fadeDown2 ${
                inView === "Projects" || inView === "Skills"
                  ? "text-white"
                  : "text-gray"
              } nav-item`}
            >
              <span className="text-[#C778DD]">#</span>
              Works
            </div>
          </li>
          <li
            style={{
              animationDelay: window.innerWidth < 1024 ? "400ms" : "2.3s",
            }}
          >
            <div
              onClick={() => {
                navigate("/", { state: { name: "AboutMe" } });
                const violation = document.getElementById("AboutMe");
                window.scrollTo({
                  top: violation.offsetTop,
                  behavior: "smooth",
                });
              }}
              className={`lowercase font-firaCode font-extrabold animate-fadeDown3 ${
                inView === "AboutMe" ? "text-white" : "text-gray"
              } nav-item`}
            >
              <span className="text-[#C778DD]">#</span>
              About-me
            </div>
          </li>
          <li
            style={{
              animationDelay: window.innerWidth < 1024 ? "500ms" : "2.4s",
            }}
          >
            <div
              onClick={() => {
                navigate("/", { state: { name: "Contact" } });
                const violation = document.getElementById("Contact");
                window.scrollTo({
                  top: violation.offsetTop,
                  behavior: "smooth",
                });
              }}
              className={`lowercase font-firaCode font-extrabold animate-fadeDown4 ${
                inView === "Contact" ? "text-white" : "text-gray"
              } nav-item`}
            >
              <span className="text-[#C778DD]">#</span>
              Contacts
            </div>
          </li>
        </ul>
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
