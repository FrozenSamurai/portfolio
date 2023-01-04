import React, { useEffect } from "react";

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("logodiv").classList.add("hidden");
      document.getElementById("divup").classList.add("animateup");
      document.getElementById("divdown").classList.add("animatedown");
    }, 10000);
  }, []);
  return (
    <div className="w-screen h-screen relative bg-transparent overflow-y-hidden">
      <div
        className="h-1/2 w-full absolute z-10 top-0 bg-black"
        id="divup"
      ></div>
      <div
        className="h-1/2 w-full absolute z-10 bottom-0 bg-black"
        id="divdown"
      ></div>
      <div
        className="svgWrapper fixed z-50 top-[45%] bottom-[50%] md:right-[45%]  left-[50%]"
        id="logodiv"
      >
        <svg
          width="82"
          height="65"
          viewBox="0 0 82 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-150"
        >
          <path
            className="path"
            d="M54 12V3C54 1.89543 53.1046 1 52 1H14.893C14.3247 1 13.7832 1.24177 13.4039 1.66491L1.51086 14.9302C1.18192 15.2971 1 15.7725 1 16.2653V56.7602C1 57.2376 1.17078 57.6992 1.48149 58.0617L6.40136 63.8016C6.78132 64.2449 7.33602 64.5 7.91987 64.5H12C13.1046 64.5 14 63.6046 14 62.5V20.3284C14 19.798 14.2107 19.2893 14.5858 18.9142L18.9142 14.5858C19.2893 14.2107 19.798 14 20.3284 14H52C53.1046 14 54 13.1046 54 12Z"
            stroke="#C778DD"
          />
          <path
            className="path"
            d="M54 36V28.5C54 27.3954 53.1046 26.5 52 26.5H29.5C28.3954 26.5 27.5 27.3954 27.5 28.5V44.1867C27.5 44.7082 27.7036 45.209 28.0675 45.5825L45.9112 63.8957C46.2877 64.2821 46.8042 64.5 47.3437 64.5H67.0296C67.6424 64.5 68.2213 64.2191 68.6006 63.7377L80.571 48.5445C80.8489 48.1918 81 47.7558 81 47.3068V3C81 1.89543 80.1046 1 79 1H70C68.8954 1 68 1.89543 68 3V45.1716C68 45.702 67.7893 46.2107 67.4142 46.5858L62.5858 51.4142C62.2107 51.7893 61.702 52 61.1716 52H54.8721C54.316 52 53.785 51.7684 53.4066 51.3609L44.1208 41.3609C42.9325 40.0812 43.8401 38 45.5864 38H52C53.1046 38 54 37.1046 54 36Z"
            stroke="#C778DD"
          />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
