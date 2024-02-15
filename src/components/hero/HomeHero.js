import React from "react";

import ExpertConsultation from "../ExpertConsultation";
import LogoSlider from "../LogoSlider";

import TransactionComponent from "../TransactionComponent";

import Section4 from "../home/Section4";

function HomeHero() {
  return (
    // <div className="flex gap-4 justify-between items-start px-10 t-[120px]  text-xl bg-white max-md:flex-wrap max-md:px-5">
    //   <div className="flex flex-col mx-5 flex-1 self-stretch my-auto max-md:max-w-full">
    //     <div className="text-5xl font-bold  leading-[80px] tracking-[2.4px] max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
    //       Unleashing<span className="text-[#0033cc]"> IT</span> Excellence
    //     </div>
    //     <div className="mt-12 tracking-wide leading-8 text-black max-md:mt-10 max-md:max-w-full">
    //       Discover the pinnacle of IT mastery with our comprehensive solutions.
    //       From robust fraud defense to seamless dispute management and beyond,
    //       we empower your digital landscape for unparalleled success.
    //     </div>
    //     <button class="justify-center self-start px-11 py-1.5 mt-14 font-medium text-center text-white whitespace-nowrap bg-[#ff6600] leading-[150%] rounded-[100px] tracking-[2px] max-md:px-5 max-md:mt-10 transition-transform duration-300 transform hover:scale-105">
    //       Learn More
    //     </button>
    //   </div>
    //   {/* <img
    //     loading="lazy"
    //     srcSet="../images/home/4.svg"
    //     alt=""
    //     className="mt-28 aspect-[0.21] w-[70px] max-md:mt-10"
    //   /> */}
    //   <img
    //     loading="lazy"
    //     alt=""
    //     id="hero-image"
    //     srcSet="../images/home-hero.png"
    //     // style={{ maxWidth: "590px" }}
    //     className=" "
    //   />
    // </div>
    <div className="mx-10 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div
          id="hero-section"
          className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
        >
          <div className="flex flex-col grow justify-center py-12 text-xl max-md:mt-10 max-md:max-w-full">
            <div className=" text-4xl font-bold leading-[60px] max-md:mt-10 max-md:max-w-full">
              Unleashing<span className="text-blue-700"> IT</span> Excellence
            </div>
            <div className="mt-6 leading-8 text-black max-md:max-w-full">
              Discover the pinnacle of IT mastery with our comprehensive
              solutions. From robust fraud defense to seamless dispute
              management and beyond, we empower your digital landscape for
              unparalleled success.
            </div>
            <div className="justify-center self-start px-10 py-1.5 mt-6 font-medium text-center text-white whitespace-nowrap bg-orange-500 leading-[150%] rounded-[100px] max-md:px-5">
              LEARN MORE
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&"
            id="hero-image"
            className="grow w-full aspect-[0.85] m-auto max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
