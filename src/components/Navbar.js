import React from "react";

const Navbar = () => {
  return (
    <div className=" h-20 flex justify-between items-center w-4/5 bg-inner bg-opacity-80">
      <a
        href="/"
        className="flex flex-row justify-center items-center space-x-3 pl-1"
      >
        <img src="./assets/Union.svg" alt="Union" className="w-5 h-5" />
        <h1 className="capitalize font-firaCode font-extrabold text-white">
          Raj Jadhav
        </h1>
      </a>
      <div className="flex flex-row justify-center items-center space-x-10 pr-10">
        <a
          href="google.com"
          className="lowercase font-firaCode font-extrabold text-gray nav-item"
        >
          <span className="text-[#C778DD]">#</span>
          Home
        </a>
        <a
          href="google.com"
          className="lowercase font-firaCode font-extrabold text-gray nav-item"
        >
          <span className="text-[#C778DD]">#</span>
          Works
        </a>
        <a
          href="google.com"
          className="lowercase font-firaCode font-extrabold text-gray nav-item"
        >
          <span className="text-[#C778DD]">#</span>
          About-me
        </a>
        <a
          href="google.com"
          className="lowercase font-firaCode font-extrabold text-gray nav-item"
        >
          <span className="text-[#C778DD]">#</span>
          Contacts
        </a>
      </div>
    </div>
  );
};

export default Navbar;
