import React, { forwardRef } from "react";
import Matrix from "../elements/Matrix";

const Skills = forwardRef((_,ref) => {
  return (
    <section id="Skills" ref={ref}>
      <div className="bg-outer md:h-96 h-full w-screen flex  justify-center items-center relative overflow-hidden">
        <div className="bg-inner h-full w-4/5  ">
          <div className="relative  w-full h-full flex flex-col justify-start  ">
            <div className="flex flex-row justify-between items-center  w-full">
              <div
                className="flex flex-row justify-start items-center md:w-4/5 w-full"
                data-aos="fade-right"
                data-aos-offset="0"
              >
                <h1 className="text-white font-firaCode font-bold md:text-3xl text-xl">
                  <span className="text-purple">#</span>skills
                </h1>
                <span className="border-[1px] md:w-1/4 w-3/5 border-purple md:ml-10 bg-purple ml-3"></span>
              </div>
            </div>
            <div className="w-full h-full justify-center md:flex flex-row hidden">
              <div
                className="w-2/5   h-full relative hidden xl:flex"
                data-aos="fade-up"
              >
                <div className="absolute animatey top-14 left-10">
                  <Matrix vertical={5} horizontal={5} space={3} />
                </div>
                <div className="absolute bottom-14 left-14 animatey5">
                  <img
                    src="/assets/Logo.svg"
                    alt="logo"
                    className="w-28 animate-pulse "
                  />
                </div>
                <div className="absolute top-[45%] right-[40%] animatey2">
                  <Matrix vertical={5} horizontal={5} space={3} />
                </div>
                <div className="w-24 h-24 border-2 border-gray right-28 top-3 absolute animatey3"></div>
                <div className="w-16 h-16 border-2 border-gray right-16 bottom-16 absolute animatey4"></div>
              </div>
              <div className="xl:w-3/5 w-full pt-5 xl:pt-0 h-full flex flex-row px-2">
                <div
                  className="w-1/3 border-2 border-gray h-fit mx-3"
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
                </div>
                <div className="flex flex-col w-1/3 space-y-6  mx-3">
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
                <div className="flex flex-col w-1/3 space-y-6 mx-3">
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
                    className="w-full border-2 border-gray h-fit "
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <h1 className="px-2 p-1 text-white font-firaCode font-medium border-b-2 border-gray">
                      Frameworks
                    </h1>
                    <div className="flex flex-wrap w-full">
                      {["React", "React Native", "Flask", "Express.js"].map(
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
            </div>
          </div>
          <div className="w-full gap-4 mt-3 px-3 flex flex-col justify-center items-center">
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
                {["SQLite", "MySQL", "MongoDB", "Firebase"].map((item, ind) => (
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
              className="w-full border-2 border-gray h-fit "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="px-2 p-1 text-white font-firaCode font-medium border-b-2 border-gray">
                Frameworks
              </h1>
              <div className="flex flex-wrap w-full">
                {["React", "React Native", "Flask", "Express.js"].map(
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
      </div>
    </section>
  );
});

export default Skills;
