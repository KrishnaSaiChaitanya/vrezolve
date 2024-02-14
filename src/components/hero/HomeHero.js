import React from "react";

import ExpertConsultation from "../ExpertConsultation";
import LogoSlider from "../LogoSlider";

import TransactionComponent from "../TransactionComponent";

import Section4 from "../home/Section4";

function HomeHero() {
  return (
    <div className="flex gap-4 justify-between items-start px-10 mt-[120px] mb-[120px] text-xl bg-white max-md:flex-wrap max-md:px-5">
      <div className="flex flex-col mx-5 flex-1 self-stretch my-auto max-md:max-w-full">
        <div className="text-5xl lg:text-7xl font-bold  leading-[80px] tracking-[2.4px] max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
          Unleashing<span className="text-[#0033cc]"> IT</span> Excellence
        </div>
        <div className="mt-12 tracking-wide lg:text-2xl leading-8 text-black max-md:mt-10 max-md:max-w-full lg:w-[750px]">
          Discover the pinnacle of IT mastery with our comprehensive solutions.
          From robust fraud defense to seamless dispute management and beyond,
          we empower your digital landscape for unparalleled success.
        </div>
        <button class="justify-center self-start px-11 py-1.5 mt-14 font-medium text-center text-white whitespace-nowrap bg-[#ff6600] leading-[150%] rounded-[100px] tracking-[2px] max-md:px-5 max-md:mt-10 transition-transform duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
      <img
        loading="lazy"
        srcSet="../images/home/4.svg"
        alt=""
        className="mt-28 lg:mt-[120px] aspect-[0.21] w-[70px] max-md:mt-10 lg-mr-5"
      />
      <img
        loading="lazy"
        alt=""
        srcSet="../images/home-hero.png"
        // style={{ maxWidth: "590px" }}
        className="flex-1 w-full p-5 max-w-[590px] lg:max-w-[720px]  max-md:max-w-full "
      />
    </div>
  );
}

export default HomeHero;
