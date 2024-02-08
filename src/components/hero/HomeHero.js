import React from "react";

import ExpertConsultation from "../ExpertConsultation";
import LogoSlider from "../LogoSlider";

import TransactionComponent from "../TransactionComponent";

import Section4 from "../home/Section4";

function HomeHero() {
  return (
    <div className="flex gap-4 justify-between items-start px-10 pt-8 pb-12 text-xl bg-white max-md:flex-wrap max-md:px-5">
      <div className="flex flex-col flex-1 self-stretch my-auto max-md:max-w-full">
        <div className="text-5xl font-bold text-blue-700 leading-[80px] tracking-[2.4px] max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
          Unleashing<span className="text-blue-700"> IT</span> Excellence
        </div>
        <div className="mt-12 tracking-wide leading-8 text-black max-md:mt-10 max-md:max-w-full">
          Discover the pinnacle of IT mastery with our comprehensive solutions.
          From robust fraud defense to seamless dispute management and beyond,
          we empower your digital landscape for unparalleled success.
        </div>
        <button class="justify-center self-start px-11 py-1.5 mt-14 font-medium text-center text-white whitespace-nowrap bg-orange-500 leading-[150%] rounded-[100px] tracking-[2px] max-md:px-5 max-md:mt-10 transition-transform duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
      <img
        loading="lazy"
        srcSet="../images/home/4.svg"
        alt=""
        className="mt-28 aspect-[0.21] w-[70px] max-md:mt-10"
      />
      <img
        loading="lazy"
        alt=""
        srcSet="../images/home-hero-1.png"
        className="flex-1 w-full  max-md:max-w-full"
      />
    </div>
  );
}

export default HomeHero;
