import React from "react";
import "../cssAssets/Home.css";

const Projecteach = ({ image, stack, name, description, referance, index }) => {
  return (
    <a
      href={referance}
      rel="noreferrer"
      target="_blank"
      title="Click to View"
      data-aos="fade-up"
      data-aos-delay={(index % 3 ?? 3) * 100}
      className="h-fit  md:mx-2.5 mx-3 "
    >
      <div className="flex flex-col w-full h-full border-2 hover:scale-105 transition-transform duration-200 cursor-pointer  border-gray">
        <div>
          <img src={image} alt="project overview" />
        </div>
        <div className="flex justify-start items-center flex-wrap border-y-2 border-gray">
          {stack.split(",").map((item, ind) => (
            <h1
              className="text-gray font-firaCode font-normal text-sm px-2 py-1 "
              data-aos="fade-left"
              data-aos-delay={ind * 50}
              data-aos-offset="50"
            >
              {item}
            </h1>
          ))}
        </div>
        <div className="p-3">
          <h1 className="text-white font-firaCode font-medium text-2xl">
            {name}
          </h1>
          <h1>
            <span className="text-gray font-firaCode font-normal text-sm">
              {description}
            </span>
          </h1>
        </div>
      </div>
    </a>
  );
};

export default Projecteach;
