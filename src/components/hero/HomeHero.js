import React from "react";

function HomeHero() {
  return (
    // <div className="mx-2  max-md:mt-10  max-md:max-w-full">
    //   <div
    //     id="hero-section"
    //     className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
    //   >
    //     <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    //       <div className="flex flex-col grow justify-center py-12 text-xl max-md:mt-10 max-md:max-w-full">
    //         <div className="mt-36 text-4xl font-bold  leading-[60px] max-md:mt-10 max-md:max-w-full">
    //           Unleashing<span className="text-blue-700"> IT</span> Excellence
    //         </div>
    //         <div className="mt-6 leading-8 text-black max-md:max-w-full">
    //           Discover the pinnacle of IT mastery with our comprehensive
    //           solutions. From robust fraud defense to seamless dispute
    //           management and beyond, we empower your digital landscape for
    //           unparalleled success.
    //         </div>
    //         <div className="justify-center self-start px-10 py-1.5 mt-6 font-medium text-center text-white whitespace-nowrap bg-orange-500 leading-[150%] rounded-[100px] max-md:px-5">
    //           LEARN MORE
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
    //       <img
    //         alt="vrezolve"
    //         loading="lazy"
    //         srcSet="../images/home/hero.png"
    //         className="grow w-full aspect-[0.85] max-md:mt-10 max-md:max-w-full"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div
      className="justify-center px-14 py-5 mx-10 mt-10 max-md:px-5 max-md:mr-2.5 max-md:max-w-full"
      id="hero-section"
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center py-12 leading-8 max-md:mt-10 max-md:max-w-full">
            <div className="mt-32 text-4xl font-bold  leading-[60px] max-md:mt-10 max-md:max-w-full">
              Unleashing<span className="text-blue-700"> IT</span> Excellence
            </div>
            <div className="mt-6 text-xl text-black max-md:max-w-full">
              Discover the pinnacle of IT mastery with our comprehensive
              solutions. From robust fraud defense to seamless dispute
              management and beyond, we empower your digital landscape for
              unparalleled success.
            </div>
            <div className="justify-center self-start px-7 py-1.5 mt-6 text-base font-medium text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5">
              LEARN MORE
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/26eff37503fc64f7113bda34dc7da2f7439f43336f0fdd6adfe02431c289eb1f?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff37503fc64f7113bda34dc7da2f7439f43336f0fdd6adfe02431c289eb1f?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff37503fc64f7113bda34dc7da2f7439f43336f0fdd6adfe02431c289eb1f?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff37503fc64f7113bda34dc7da2f7439f43336f0fdd6adfe02431c289eb1f?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff37503fc64f7113bda34dc7da2f7439f43336f0fdd6adfe02431c289eb1f?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff37503fc64f7113bda34dc7da2f7439f43336f0fdd6adfe02431c289eb1f?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff37503fc64f7113bda34dc7da2f7439f43336f0fdd6adfe02431c289eb1f?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff37503fc64f7113bda34dc7da2f7439f43336f0fdd6adfe02431c289eb1f?apiKey=67296d98361248faadca04e106a4f278&"
            className="self-stretch my-auto w-full aspect-[0.85] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
