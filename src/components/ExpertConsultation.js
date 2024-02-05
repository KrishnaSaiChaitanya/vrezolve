import React from "react";

const ExpertConsultation = (props) => {
  return (
    <div className="flex flex-col items-center px-5 text-5xl  tracking-[2.4px] max-md:text-4xl">
      <header className="font-bold text-center text-black leading-[167%] max-md:max-w-full max-md:text-4xl">
        Expert Consultation
      </header>
      <div className="mt-5 max-w-full mx-auto bg-blue-700 h-[3px] w-[400px]" />
      <div className="mt-12 text-xl tracking-wider text-center text-black-200 w-[775px] max-md:mt-10 max-md:max-w-full">
        <span className="font-bold text-blue-700 ">vre</span>{" "}
        <span className=" font-black text-orange-500">Z</span>{" "}
        <span className="font-bold text-blue-700 ">olve</span> offers expert
        consultation and customized solutions to help businesses make the most
        of their technology investments. Our experienced staff is on hand to
        ensure you have the right tools and processes in place to take your
        business to the next level.
      </div>

      <button
        className="justify-center items-stretch px-9 py-1.5 mt-9 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px] max-md:px-5"
        aria-label="Talk to an Expert"
        aria-role="button"
      >
        Talk to an Expert
      </button>
      <img
        loading="lazy"
        srcSet="../images/home/3.svg"
        alt=""
        className="object-contain object-center self-stretch mt-6 w-full aspect-[2.48] max-md:max-w-full"
      />
      <header className="font-bold mt-32 text-center text-black leading-[167%] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Corporate Partners
      </header>

      <div className="mt-5 max-w-full mx-auto bg-blue-700 h-[3px] w-[400px]" />
      <div className="mt-12 mb-3 text-xl tracking-wider leading-8 text-center text-black w-[795px] max-md:mt-10 max-md:max-w-full">
        Our corporate partners are integral to our journey, fostering trust and
        innovation. Through collaboration, we navigate challenges, seize
        opportunities, and achieve mutual growth. Together, we excel in
        delivering top-notch solutions and creating a thriving network.
      </div>
    </div>
  );
};

export default ExpertConsultation;
