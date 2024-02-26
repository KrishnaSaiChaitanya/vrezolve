import React from "react";

const ExpertConsultation = (props) => {
  return (
    <div className="flex flex-col items-center mt-16 px-5 text-4xl   max-md:text-4xl">
      <header className="font-bold text-center text-black leading-[167%] max-md:max-w-full text-4xl">
        Expert Consultation
      </header>
      <div className="mt-5 max-w-full mx-auto bg-blue-700 h-[3px] w-[400px]" />
      <div className="mt-12 text-xl tracking-wider text-center text-black-200 w-[775px] max-md:mt-10 max-md:max-w-full">
        <span className="font-bold text-blue-700 ">vre</span>{" "}
        <span className=" font-black text-[#ff6600]">Z</span>{" "}
        <span className="font-bold text-blue-700 ">olve</span> offers expert
        consultation and customized solutions to help businesses make the most
        of their technology investments. Our experienced staff is on hand to
        ensure you have the right tools and processes in place to take your
        business to the next level.
      </div>

      <button
        class="justify-center items-stretch px-9 py-1.5 mt-9 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] tracking-[2px] max-md:px-5 transition-transform duration-300 transform hover:scale-105"
        aria-label="Talk to an Expert"
      >
        Talk to an Expert
      </button>

      <div class="relative overflow-hidden w-full max-w-full mt-16 aspect-w-2 aspect-h-1 group">
        <img
          alt="vrezolve"
          loading="lazy"
          src="../images/home/3.svg"
          class=" mx-auto mt-6 w-full aspect-[2] max-md:mr-2.5 max-md:max-w-ful"
        />
      </div>
    </div>
  );
};

export default ExpertConsultation;
