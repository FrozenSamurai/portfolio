import React from "react";
import { RiWhatsappFill, RiCopyleftLine } from "react-icons/ri";
import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import Matrix from "../elements/Matrix";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-outer md:h-screen h-full w-screen flex  justify-center items-center relative overflow-hidden">
      <div className="bg-inner h-full w-4/5  ">
        <div className="relative  w-full h-full flex flex-col justify-start  mt-20">
          <div className="flex flex-row justify-between items-center  w-full">
            <div
              className="flex flex-row justify-start items-center md:w-4/5 w-full"
              data-aos="fade-right"
              data-aos-offset="0"
            >
              <h1 className="text-white font-firaCode font-bold md:text-3xl text-xl">
                <span className="text-purple">#</span>contacts
              </h1>
              <span className="border-[1px] md:w-1/6 w-1/5 border-purple md:ml-10 bg-purple ml-3"></span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-10">
            <div
              className="flex w-1/2 justify-start h-full"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p className="text-gray font-firaCode">
                I am interested in internship and job opportunities. However, if
                you have other requests or questions, feel free to contact me.
              </p>
            </div>
            <div className="flex flex-col justify-start items-end px-10 space-y-5">
              <div
                className="w-fit border-2 border-gray p-3 flex flex-col font-firaCode text-gray space-y-4"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <h1 className="text-lg text-white">Message me here</h1>
                <a
                  className="flex flex-row justify-start px-1 items-center hover:text-white"
                  href="https://api.whatsapp.com/send?phone=9167126442&text=Hi,%20Raj%20Jadhav"
                  rel="noreferrer"
                  target="_blank"
                >
                  <RiWhatsappFill size={25} />
                  <span className="mx-1">+91-9167126442</span>
                </a>
                <a
                  className="flex flex-row justify-start px-1 items-center hover:text-white"
                  href="mailto:rajjdhv2001@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoIosMail size={25} />
                  <span className="mx-1">rajjdhv2001@gmail.com</span>
                </a>
              </div>
              <div
                className="w-fit border-2 border-gray p-3 pr-10 flex flex-col font-firaCode text-gray space-y-4"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <h1 className="text-lg text-white">Find me here</h1>
                <a
                  className="flex flex-row justify-start px-1 items-center hover:text-white"
                  href="https://www.github.com/FrozenSamurai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub size={25} />
                  <span className="mx-1">github.com/FrozenSamurai</span>
                </a>
                <a
                  className="flex flex-row justify-start px-1 items-center hover:text-white"
                  href="https://www.linkedin.com/in/frozensamurai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoLinkedin size={25} />
                  <span className="mx-1">linkedin.com/in/frozensamurai/</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:top-[25%] md:left-0 left-0  border-gray h-20 w-fit ">
          <Matrix vertical={5} horizontal={3} space={4} />
        </div>
      </div>
      <div className="absolute w-full bg-outer border-t-2 h-1/4 bottom-0 border-gray flex flex-col justify-start items-center">
        <div className="w-3/4 h-3/4 flex flex-row font-firaCode text-gray">
          <div className="flex flex-row w-full justify-start items-start py-5 ">
            <div className="flex flex-col w-1/2 space-y-3 ">
              <div className="flex flex-row w-full justify-start items-center">
                <div className="flex flex-row space-x-3 font-firaCode  text-white font-bold text-xl">
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
              <h1 className="text-white">
                Full Stack Web and Mobile Developer based in Mumbai, India.
              </h1>
            </div>
            <div className="flex flex-col w-1/2 items-end">
              <div className="flex w-fit space-y-2 flex-col">
                <h1 className="text-white text-xl font-bold">Media</h1>
                <div className="flex flex-row space-x-3 ">
                  <GrInstagram
                    size={20}
                    className="hover:scale-110 hover:text-white"
                  />
                  <GrTwitter
                    size={20}
                    className="hover:scale-110 hover:text-white"
                  />
                  <FaGithub
                    size={20}
                    className="hover:scale-110 hover:text-white"
                  />
                  <FaLinkedinIn
                    size={20}
                    className="hover:scale-110 hover:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="flex flex-row font-firaCode text-xs text-gray space-x-1">
          <RiCopyleftLine />
          <span>Copyleft 2022. Made by Raj</span>
        </h1>
      </div>
    </div>
  );
};

export default Contact;
