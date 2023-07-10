import React from "react";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiCopyleftLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="md:w-3/4 w-full px-5 md:px-0 md:h-3/4 h-44 flex flex-row font-firaCode text-gray ">
        <div className="flex flex-row w-full justify-start items-start py-5 ">
          <div className="flex flex-col w-1/2 space-y-3 ">
            <div className="flex md:flex-row flex-col w-full justify-start space-y-1 items-center">
              <div className="flex flex-row space-x-3 font-firaCode  text-white font-bold md:text-xl text-sm">
                <img src="/assets/Union.svg" alt="logo" className="w-6" />
                <h1 className=" flex flex-row">Raj Jadhav</h1>
              </div>
              <a
                href="mailto:rajjdhv2001@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                className="text-gray font-firaCode text-sm ml-5"
              >
                rajjdhv2001@gmail.com
              </a>
            </div>
            <h1 className="text-white md:text-xl text-xs w-full ml-5 md:ml-0">
              Full Stack Web and Mobile Developer based in Mumbai, India.
            </h1>
          </div>
          <div className="flex flex-col w-1/2 items-end">
            <div className="flex w-fit space-y-2 flex-col">
              <h1 className="text-white text-xl font-bold">Media</h1>
              <div className="flex flex-row space-x-3 z-[1000000]">
                <a
                  href="https://www.instagram.com/frozen_samurai/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GrInstagram
                    size={20}
                    className="hover:scale-110 hover:text-white"
                  />
                </a>

                <a
                  href="https://mobile.twitter.com/_raj_jadhav"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GrTwitter
                    size={20}
                    className="hover:scale-110 hover:text-white"
                  />
                </a>

                <a
                  href="https://www.github.com/FrozenSamurai/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub
                    size={20}
                    className="hover:scale-110 hover:text-white"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/frozensamurai/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaLinkedinIn
                    size={20}
                    className="hover:scale-110 hover:text-white"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="flex absolute lg:relative md:bottom-0 bottom-3 flex-row font-firaCode text-xs text-gray space-x-1">
        <RiCopyleftLine />
        <span>Copyleft 2023. Made by Raj</span>
      </h1>
    </>
  );
};

export default Footer;
