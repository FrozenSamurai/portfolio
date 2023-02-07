import React, { forwardRef } from "react";
import Matrix from "../elements/Matrix";
import { useNavigate } from "react-router-dom";

const AboutMe = forwardRef((_, ref) => {
  const navigate = useNavigate();
  return (
    <section id="AboutMe" ref={ref}>
      <div className="bg-outer md:h-full h-full w-screen flex  justify-center items-center relative overflow-hidden">
        <div className="bg-inner h-full w-4/5  ">
          <div className="relative  w-full h-full flex flex-col justify-start  mt-20">
            <div className="flex flex-row justify-between items-center  w-full">
              <div
                className="flex flex-row justify-start items-center md:w-4/5 w-full"
                data-aos="fade-right"
                data-aos-offset="0"
              >
                <h1 className="text-white font-firaCode font-bold md:text-3xl text-xl">
                  <span className="text-purple">#</span>about-me
                </h1>
                <span className="border-[1px] md:w-2/4 w-2/5 border-purple md:ml-10 bg-purple ml-3"></span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex flex-col mt-10 font-firaCode md:w-1/2 w-full md:px-10 text-gray">
                <h1 className="text-white" data-aos="fade-right">
                  Hello! I'm{" "}
                  <span className="text-purple">Raj Vijay Jadhav</span>.
                </h1>
                <p className=" py-5 " data-aos="fade-up" data-aos-delay="50">
                  I am a self-taught full-stack developer based in Mumbai,
                  India. I can develop responsive websites from scratch and
                  build them into dynamic, user-friendly web experiences.
                </p>
                <p className="" data-aos="fade-up" data-aos-delay="100">
                  Transforming my creativity and knowledge into websites has
                  been my passion for a few years. I have been assisting various
                  clients set up their presence online. I always strive to learn
                  about the newest technologies and frameworks.
                </p>
                <p className="py-5" data-aos="fade-up" data-aos-delay="150">
                  Additionally, I studied React Native and created an
                  application for the Smart India Hackathon, where our team won
                  first place. In addition to programming, I also have hands-on
                  IoT expertise.
                </p>
                <button
                  className="border-2 border-purple text-white w-fit py-1 px-4 hover:bg-purple"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  onClick={() => {
                    navigate("/aboutme");
                    window.scrollTo(0, 0);
                  }}
                >
                  Read more {"->"}
                </button>
              </div>
              <div className="flex md:w-1/2 w-full justify-center relative">
                <img
                  src="/assets/myself.png"
                  alt="myself"
                  className="border-b-2 border-purple"
                  data-aos="fade-up"
                  data-aos-delay="50"
                />
                <div
                  className="absolute md:left-[20%] left-0 top-20 animatey2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <Matrix vertical={5} horizontal={5} space={4} />
                </div>
                <div
                  className="absolute md:right-[25%] right-0 bottom-[30%] animatey "
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <Matrix vertical={4} horizontal={5} space={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border-y-[1px] border-r-[1px] md:bottom-[15%] top-[12rem] left-0 border-gray h-32 md:w-16 w-8  "></div>
        <div className="absolute hidden md:block md:bottom-[20%] md:right-0 right-0  border-gray h-20 w-fit ">
          <Matrix vertical={5} horizontal={5} space={4} />
        </div>
        <div className="absolute block md:hidden md:bottom-[20%] md:right-0 right-0  border-gray h-20 w-fit ">
          <Matrix vertical={5} horizontal={3} space={4} />
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
