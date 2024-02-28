import React from "react";

function DisputszHero() {
  return (
    <div>
      <div className="self-stretch px-14 py-[40px] w-full bg-white max-md:px-5 max-md:max-w-full">
        <div
          className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch"
          id="hero-section"
        >
          <div className="flex flex-col items-stretch w-[46%] max-md:ml-0 max-md:w-full">
            <img
              alt="vrezolve"
              loading="lazy"
              src="../images/dispute-hero.svg"
              className="w-[500px] m-auto"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-stretch self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-stretch max-w-full w-[200px] max-md:ml-2.5">
                <div className="text-4xl  font-bold leading-5 whitespace-nowrap tracking-[5px]">
                  <span className="text-[#0033cc] ">dispute</span>
                  <span className=" font-black text-[#ff6600]">Z</span>
                </div>
                {/* <div className="mt-5 ml-5 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[150px]" /> */}
              </div>
              <div className="mt-[40px] text-4xl  font-medium tracking-wider leading-[60px] max-md:max-w-full max-sm:leading-[44px] max-sm:text-3xl ">
                <span className="font-bold text-[#0033cc]">
                  Redefining Chargebacks
                </span>
                <span className="font-bold">: The dispute</span>
                <span className=" font-black text-[#ff6600]">Z</span>
                <span className="font-bold"> Difference</span>
              </div>
              <div className="mt-12 text-base tracking-wide leading-8 text-black max-md:mt-10 max-md:max-w-full">
                <span className="text-xl font-bold">dispute</span>
                <span className="text-xl  font-black text-[#ff6600]">Z </span>
                <span className="text-xl">
                  seamlessly integrates all chargeback processes – from customer
                  communication and reasoning to accounting, case management,
                  and closure. Transform your approach to chargeback operations
                  for a more streamlined and automated experience.
                </span>
              </div>
              <div className="mt-16 text-4xl font-bold tracking-widest leading-5 text-[#0033cc] max-md:mt-10 max-md:max-w-full">
                COMING SOON
              </div>

              {/* <div className="mt-6 max-w-full ml-16 bg-[#0033cc] h-[3px] w-[180px]" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-stretch mt-5 px-10">
        <header className="mx-3 text-center text-5xl font-bold text-[#0033cc] leading-[80px] tracking-[2.4px] max-md:mr-2.5 max-md:max-w-full max-md:text-3xl max-md:leading-[54px] max-sm:leading-[14px]">
          Revolutionizing{" "}
          <span className="text-black">Chargeback Processes</span>
        </header>

        <form>
          <div className="flex gap-5 justify-between items-stretch p-3 mt-20  max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col my-auto w-4 h-4 text-[#0033cc] rounded-full"></div>
            <div className="grow text-2xl tracking-wider leading-10 text-black max-md:max-w-full">
              Earn points effortlessly with every transaction.
            </div>
          </div>
        </form>

        <form>
          <div className="flex gap-5 justify-between items-stretch p-3 mt-6 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col shrink-0 my-auto w-4 h-4 rounded-full" />
            <div className="grow text-2xl tracking-wider leading-10 text-black max-md:max-w-full">
              Loyalty transforms into exciting perks and privileges.
            </div>
          </div>
        </form>

        <form>
          <div className="flex gap-5 justify-between items-stretch p-3 mt-6 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col shrink-0 my-auto w-4 h-4 rounded-full" />
            <div className="grow text-2xl tracking-wider leading-10 text-black max-md:max-w-full">
              Access exclusive discounts and special offers.
            </div>
          </div>
        </form>

        <form>
          <div className="flex gap-5 justify-between items-stretch p-3 mt-6 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col shrink-0 my-auto w-4 h-4 rounded-full" />
            <div className="grow text-2xl tracking-wider leading-10 text-black max-md:max-w-full">
              Your journey with us is about to become even more rewarding.
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default DisputszHero;
