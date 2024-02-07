import React from "react";

import ExpertConsultation from "../ExpertConsultation";
import LogoSlider from "../LogoSlider";

import TransactionComponent from "../TransactionComponent";

import Section4 from "../home/Section4";

function HomeHero() {
  return (
    // <div>
    //   <div className="flex flex-col justify-center px-14 py-12 mt-4 w-full bg-white max-md:px-5 max-md:max-w-full">
    //     <div className="mt-20 mb-14 max-md:my-10 max-md:max-w-full">
    //       <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
    //         <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    //           <div className="flex flex-col grow mt-3 text-blue-700 max-md:max-w-full">
    //             <div className="text-5xl font-bold leading-[80px] tracking-[2.4px] max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
    //               Unleashing<span className="text-blue-700"> IT</span>{" "}
    //               Excellence
    //             </div>
    //             <div className="mt-12 text-xl tracking-wide leading-8 text-black max-md:mt-10 max-md:max-w-full">
    //               Discover the pinnacle of IT mastery with our comprehensive
    //               solutions. From robust fraud defense to seamless dispute
    //               management and beyond, we empower your digital landscape for
    //               unparalleled success.
    //             </div>
    //             <div className="mt-12 text-3xl font-medium tracking-widest leading-[62px] max-md:mt-10 max-md:max-w-full">
    //               Fraud Defense, Dispute Management & More
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
    //           <img
    //             loading="lazy"
    //             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&"
    //             className="w-full aspect-[1.41] max-md:max-w-full"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <Section /> */}
    //   <TransactionComponent />
    //   <Section4 />
    //   {/* <EnhancedSecurityComponent /> */}
    //   <ExpertConsultation />
    //   <LogoSlider />
    // </div>
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
        <div className="justify-center self-start px-11 py-1.5 mt-14 font-medium text-center text-white whitespace-nowrap bg-orange-500 leading-[150%] rounded-[100px] tracking-[2px] max-md:px-5 max-md:mt-10">
          Learn More
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bb0e9fb61dbe600eefb37129747a910f5f8ddfc6de6b9d4ea8fb9619baa5eebe?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb0e9fb61dbe600eefb37129747a910f5f8ddfc6de6b9d4ea8fb9619baa5eebe?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb0e9fb61dbe600eefb37129747a910f5f8ddfc6de6b9d4ea8fb9619baa5eebe?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb0e9fb61dbe600eefb37129747a910f5f8ddfc6de6b9d4ea8fb9619baa5eebe?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb0e9fb61dbe600eefb37129747a910f5f8ddfc6de6b9d4ea8fb9619baa5eebe?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb0e9fb61dbe600eefb37129747a910f5f8ddfc6de6b9d4ea8fb9619baa5eebe?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb0e9fb61dbe600eefb37129747a910f5f8ddfc6de6b9d4ea8fb9619baa5eebe?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bb0e9fb61dbe600eefb37129747a910f5f8ddfc6de6b9d4ea8fb9619baa5eebe?apiKey=67296d98361248faadca04e106a4f278&"
        className="mt-28 aspect-[0.21] w-[70px] max-md:mt-10"
      />
      <img
        loading="lazy"
        srcSet="../images/home/hero-new.svg"
        className="flex-1 w-full aspect-[1.04] max-md:max-w-full"
      />
    </div>
  );
}

export default HomeHero;
