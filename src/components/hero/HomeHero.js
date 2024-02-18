import React from "react";

function HomeHero() {
  return (
    <div className="mx-2  max-md:mt-10  max-md:max-w-full">
      <div
        id="hero-section"
        className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
      >
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center py-12 text-xl max-md:mt-10 max-md:max-w-full">
            <div className="mt-36 text-4xl font-bold  leading-[60px] max-md:mt-10 max-md:max-w-full">
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
            srcSet="../images/home/hero.png"
            className="grow w-full aspect-[0.85] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
