import React from "react";
import Navbar from "./Navbar";
import HangingSocials from "./HangingSocials";
import Matrix from "../elements/Matrix";
import Footer from "./Footer";

const MoreAboutMe = () => {
  return (
    <>
      <div className="fixed w-screen flex justify-center z-50 ">
        <Navbar />
      </div>
      <div
        className="fixed ml-10 z-50 hidden md:block"
        // style={{
        //   display: window.innerWidth <= 450 ? "none" : "block",
        // }}
      >
        <HangingSocials />
      </div>

      <div className="bg-outer h-full w-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="bg-inner h-full w-4/5 flex flex-col justify-center items-center relative md:space-y-5">
          <div className="flex md:flex-col md:mt-20 flex-col justify-center items-center  w-full h-fit">
            <div className="flex flex-col w-full md:mt-0 mt-20 px-5 space-y-2">
              <h1 className="text-white font-firaCode font-bold md:text-3xl text-2xl ">
                <span className="text-purple">/</span>about-me
              </h1>
              <h1 className="text-gray font-firaCode">Who am I?</h1>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex flex-col mt-5 font-firaCode md:w-1/2 w-full px-5 text-gray">
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
            <div
              className="flex flex-row justify-start items-center px-5 md:mt-10 md:py-10 mt-10 w-full"
              data-aos="fade-right"
              data-aos-offset="0"
            >
              <h1 className="text-white font-firaCode font-bold md:text-2xl text-xl">
                <span className="text-purple">#</span>skills
              </h1>
            </div>
            <div className="w-full gap-4 mt-3 px-3 flex md:flex-row flex-col justify-center items-start mb-10">
              <div
                className="w-full border-2 border-gray h-fit"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h1 className="p-1 px-2 text-white font-firaCode font-medium border-b-2 border-gray">
                  Languages
                </h1>
                <div className="flex flex-wrap w-full">
                  {["JavaScript", "Python", "C", "Java", "TypeScript"].map(
                    (item, ind) => (
                      <h1
                        className="text-gray font-firaCode font-normal px-2 py-1 "
                        data-aos="fade-left"
                        data-aos-delay={ind * 50}
                        data-aos-offset="50"
                      >
                        {item}
                      </h1>
                    )
                  )}
                </div>
              </div>{" "}
              <div
                className="w-full border-2 border-gray h-fit "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h1 className="px-2 p-1 text-white font-firaCode font-medium border-b-2 border-gray">
                  Frameworks
                </h1>
                <div className="flex flex-wrap w-full">
                  {["React", "React-Native", "Flask", "Express.js"].map(
                    (item, ind) => (
                      <h1
                        className="text-gray font-firaCode font-normal px-2 py-1 "
                        data-aos="fade-left"
                        data-aos-delay={ind * 50}
                        data-aos-offset="50"
                      >
                        {item}
                      </h1>
                    )
                  )}
                </div>
              </div>
              <div
                className="w-full border-2 border-gray h-fit "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h1 className="px-2 p-1 text-white font-firaCode font-medium border-b-2 border-gray">
                  Tools
                </h1>
                <div className="flex flex-wrap w-full">
                  {[
                    "VSCode",
                    "Figma",
                    "Canva",
                    "Netbeans",
                    "Xampp",
                    "Postman",
                    "Git",
                    "Expo",
                  ].map((item, ind) => (
                    <h1
                      className="text-gray font-firaCode font-normal px-2 py-1 "
                      data-aos="fade-left"
                      data-aos-delay={ind * 50}
                      data-aos-offset="50"
                    >
                      {item}
                    </h1>
                  ))}
                </div>
              </div>
              <div
                className="w-full border-2 border-gray h-fit"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h1 className="px-2 p-1 text-white font-firaCode font-medium border-b-2 border-gray">
                  Databases
                </h1>
                <div className="flex flex-wrap w-full">
                  {["SQLite", "MySQL", "MongoDB", "Firebase"].map(
                    (item, ind) => (
                      <h1
                        className="text-gray font-firaCode font-normal px-2 py-1 "
                        data-aos="fade-left"
                        data-aos-delay={ind * 50}
                        data-aos-offset="50"
                      >
                        {item}
                      </h1>
                    )
                  )}
                </div>
              </div>
              <div
                className="w-full border-2 border-gray h-fit"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1 className="px-2 p-1 text-white font-firaCode font-medium border-b-2 border-gray">
                  Other
                </h1>
                <div className="flex flex-wrap w-full">
                  {["HTML", "CSS", "Jinja", "REST", "IoT", "Tailwind"].map(
                    (item, ind) => (
                      <h1
                        className="text-gray font-firaCode font-normal px-2 py-1 "
                        data-aos="fade-left"
                        data-aos-delay={ind * 50}
                        data-aos-offset="50"
                      >
                        {item}
                      </h1>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-row justify-start items-center px-5  mt-10 w-full pb-5"
            data-aos="fade-right"
            data-aos-offset="0"
          >
            <h1 className="text-white font-firaCode font-bold md:text-2xl text-xl">
              <span className="text-purple">#</span>volunteering
            </h1>
          </div>
          <div className="flex relative w-full flex-col h-fit space-y-5 px-20">
            <div
              className="w-full h-fit relative flex md:items-start md:justify-start justify-center items-center md:px-5"
              data-aos="fade-right"
            >
              <VolunteeringItem
                idx={1}
                imgSrc={"/assets/volunteering/NSS.jpg"}
                role={`Project Co-ordinator`}
                company={"NSS DMCE"}
                date={"August 2020 - May 2022"}
                listItems={[
                  "Leading a team of NSS volunteers to create a mobile application for specially abled which will help them communicate with normal people.",
                ]}
              />
            </div>
            <div
              className="w-full relative flex md:items-end md:justify-end  justify-center items-center md:px-5"
              data-aos="fade-left"
            >
              <VolunteeringItem
                idx={2}
                imgSrc={"/assets/volunteering/GITS.png"}
                role={`TECH-GITS Lead`}
                company={"GITS DMCE"}
                date={"May 2022 - Current"}
                listItems={[
                  "Managing and organizing all technical tasks, workshops, websites and technical events under TECH-GITS(Technical Team of GITS).",
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col relative w-full pb-10">
            <div className="absolute md:block hidden animatey top-10 right-[22%]">
              <Matrix vertical={5} horizontal={5} space={3} />
            </div>
            <div className="absolute md:block hidden bottom-10 right-[10%] animatey5">
              <img
                src="/assets/Logo.svg"
                alt="logo"
                className="w-28 animate-pulse "
              />
            </div>
            <div
              className="flex flex-row justify-start items-center px-5  mt-10 w-full pb-5"
              data-aos="fade-right"
              data-aos-offset="0"
            >
              <h1 className="text-white font-firaCode font-bold md:text-2xl text-xl">
                <span className="text-purple">#</span>achievements
              </h1>
            </div>
            <Achievement1 />
          </div>
        </div>
        <div className=" mt-10 lg:mt-0 w-full bg-outer border-t-2 h-1/4 pb-5 z-[10] border-gray flex flex-col justify-start items-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MoreAboutMe;

const VolunteeringItem = ({ idx, role, company, date, listItems, imgSrc }) => (
  <div className="lg:w-[31rem] w-72 lg:h-52 h-fit flex lg:flex-row flex-col space-y-0.5 space-x-0 lg:space-x-0.5 lg:space-y-0">
    <div className="lg:w-52 w-full max-w-52 h-full border-[1px] border-gray">
      <img
        src={imgSrc}
        alt="img"
        className="w-full h-full"
        style={{
          filter: "grayscale(50%)",
        }}
      />
    </div>
    <span className="lg:h-full w-full h-1 bg-purple lg:w-1"></span>
    <div className="w-72 h-full flex flex-col items-start border-[1px] border-gray">
      <h1 className="text-white font-firaCode font-bold text-xl py-1 pl-0.5">
        {role} <br /> <span className="text-gray">{company}</span>
      </h1>
      <h1 className="text-gray font-firaCode font-normal text-sm pl-0.5">
        {date}
      </h1>
      <hr className="w-full border-t-gray border-t-[1px]" />
      <div className="flex flex-col w-full justify-center items-center pl-0.5">
        <h1 className="text-gray font-firaCode font-normal py-2 text-sm">
          {listItems}
        </h1>
      </div>
    </div>
  </div>
);

const Achievement1 = () => {
  return (
    <>
      <div className="md:w-2/3 w-full flex flex-wrap gap-3 px-5">
        <h1 className="px-2 py-1 border-gray border-[2px] text-white font-firaCode ">
          Smart India Hackathon 2022 Winner
        </h1>
        <h1 className="px-2 py-1 border-gray border-[2px] text-white font-firaCode ">
          Techotsav '22 1st RunnerUp
        </h1>
        <h1 className="px-2 py-1 border-gray border-[2px] text-white font-firaCode ">
          DeepBlue Season 6 Semi-Finalist
        </h1>
        <a
          className="px-2 py-1 border-gray border-[2px] text-white font-firaCode hover:bg-slate-900"
          href="https://www.irjet.net/archives/V8/i10/IRJET-V8I10147.pdf"
          target="_blank"
          rel="noreferrer"
        >
          A Study of Content Conversation Suggestion in Messaging Applications
        </a>
      </div>
    </>
  );
};
