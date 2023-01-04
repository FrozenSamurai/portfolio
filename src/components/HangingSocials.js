import React from "react";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../cssAssets/Home.css";

const HangingSocials = () => {
  return (
    <div
      className="flex justify-center items-center  space-y-3 flex-col"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      {/* <span className="h-36 border-2 border-gray  bg-gray"></span> */}
      <span className="h-60 border-[1px] border-gray  bg-gray"></span>
      <div className="flex justify-center items-center flex-col space-y-3 ">
        <a
          href="https://www.instagram.com/frozen_samurai/"
          rel="noreferrer"
          target="_blank"
        >
          <GrInstagram className="text-3xl text-white  mx-2 transition-all duration-100 ease-linear hover:animate-none  animate-wiggle" />
        </a>
        <a
          href="https://mobile.twitter.com/_raj_jadhav"
          rel="noreferrer"
          target="_blank"
        >
          <GrTwitter className="text-3xl text-white  mx-2 transition-all duration-100 ease-linear hover:animate-none  animate-wiggle" />
        </a>
        <a href="mailto:rajjdhv2001@gmail.com" rel="noreferrer" target="_blank">
          <IoMailOutline className="text-3xl text-white  mx-2 transition-all duration-100 ease-linear hover:animate-none  animate-wiggle" />
        </a>
        <a
          href="https://www.linkedin.com/in/frozensamurai"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn className="text-3xl text-white  mx-2 transition-all duration-100 ease-linear hover:animate-none  animate-wiggle" />
        </a>
        <a
          href="https://www.github.com/FrozenSamurai/"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub className="text-3xl text-white  mx-2 transition-all duration-100 ease-linear hover:animate-none  animate-wiggle" />
        </a>
      </div>
    </div>
  );
};

export default HangingSocials;
