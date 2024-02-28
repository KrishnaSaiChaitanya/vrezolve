import React from "react";

function RewardzHero() {
  return (
    <div>
      <div className="self-stretch px-14 py-[40px]  w-full bg-white max-md:px-5 max-md:max-w-full">
        <div
          className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch"
          id="hero-section"
        >
          <div className="flex flex-col items-stretch w-[46%] max-md:ml-0 max-md:w-full">
            <img
              alt="vrezolve"
              loading="lazy"
              src="../images/rewardz-hero.svg"
              className="w-[500px] m-auto"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-stretch self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-stretch  max-w-full w-[200px] max-md:ml-2.5">
                <div className="text-4xl text-left  font-bold leading-5 whitespace-nowrap tracking-[4px]">
                  <span className="text-[#0033cc] ">reward</span>
                  <span className=" font-black text-[#ff6600]">Z</span>
                </div>
                {/* <div className="mt-5 ml-2 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[150px]" /> */}
              </div>
              <div className="mt-10 text-4xl  font-medium tracking-wider max-md:max-w-full  max-sm:text-3xl w-[530px]">
                <span className="font-bold ">Unlock a World of Rewards</span>
              </div>
              <div className="mt-10 text-base tracking-wide leading-8 text-black max-md:mt-10 max-md:max-w-full">
                <span className="text-xl">
                  Our rewards program is designed to elevate your experience.
                  Earn points with every transaction, and watch as your loyalty
                  transforms into exciting rewards. From exclusive discounts to
                  special offers, your journey with us is about to become even
                  more rewarding. Start earning today and indulge in the perks
                  that await you!
                </span>
              </div>
              <div className="mt-10 text-4xl font-bold tracking-widest leading-5 text-[#0033cc] max-md:mt-10 max-md:max-w-full">
                COMING SOON
              </div>
              {/* <div className="mt-5 max-w-full ml-16 bg-[#0033cc] h-[3px] w-[180px]" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardzHero;
