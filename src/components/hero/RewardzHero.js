import React from "react";

function RewardzHero() {
  return (
    <div>
      <div className="self-stretch px-14 py-12 mt-6 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[46%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="../images/rewardz-hero.svg"
              alt=""
              className="object-contain object-center self-stretch my-auto w-full aspect-[0.88] fill-blue-700 max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-stretch self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-stretch ml-4 max-w-full w-[200px] max-md:ml-2.5">
                <div className="text-4xl  font-bold leading-5 whitespace-nowrap tracking-[5px]">
                  <span className="text-blue-700 ">reward</span>
                  <span className=" font-black text-orange-500">Z</span>
                </div>
                <img
                  loading="lazy"
                  src="../images/line.svg"
                  alt=""
                  className="object-contain object-center mr-3 self-center mt-6 max-w-full aspect-[50] stroke-[3px] stroke-blue-700 w-[179px]"
                />
              </div>
              <div className="mt-9 text-5xl  font-medium tracking-wider text-orange-500 leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[74px] max-sm:leading-[44px] max-sm:text-3xl ">
                <span className="font-bold text-blue-700">
                  Redefining Chargebacks
                </span>
                <span className="font-bold">: The dispute</span>
                <span className=" font-black text-orange-500">Z</span>
                <span className="font-bold"> Advantage</span>
              </div>
              <div className="mt-12 text-base tracking-wide leading-8 text-black max-md:mt-10 max-md:max-w-full">
                <span className="text-xl font-bold">dispute</span>
                <span className="text-xl  font-black text-orange-500">Z</span>
                <span className="text-xl">
                  {" "}
                  seamlessly integrates all chargeback processes – from customer
                  communication and reasoning to accounting, case management,
                  and closure. Transform your approach to chargeback operations
                  for a more streamlined and automated experience.
                </span>
              </div>
              <div className="mt-16 text-4xl font-bold tracking-widest leading-5 text-blue-700 max-md:mt-10 max-md:max-w-full">
                COMING SOON
              </div>
              <img
                loading="lazy"
                src="../images/line.svg"
                className="object-contain object-center mt-6 ml-12 max-w-full aspect-[50] stroke-[3px] stroke-blue-700 w-[179px] max-md:ml-2.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardzHero;
