import React from "react";

function CardsSection() {
  return (
    <div className="">
      <div className="flex flex-col p-12 bg-[#f2f5fc] max-md:px-5">
        <div className="self-center mt-24 text-5xl font-bold text-center text-black leading-[80.16px] tracking-[2.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Unveiling the best of our platform
        </div>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-9 pt-6 pb-12 mt-1.5 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:mt-10 transition-transform transform hover:scale-105">
                <img
                  loading="lazy"
                  srcSet="../images/alertz/4.svg"
                  className="max-w-full aspect-square w-[100px] m-2"
                />
                <div className="mt-12 text-4xl font-medium leading-8 text-blue-700 whitespace-nowrap tracking-[2px] transition-all duration-500 transform hover:text-blue-900">
                  Fraud Prevention
                </div>
                <div className="self-stretch mt-14 text-xl tracking-wider leading-8 text-center text-black max-md:mt-10 transition-all duration-500 transform hover:text-gray-800">
                  Employing advanced technologies and vigilance for robust fraud
                  prevention.
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full transition-transform transform hover:scale-105">
              <div className="flex flex-col grow items-center px-9 pt-6 pb-12 mt-1.5 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="../images/alertz/5.svg"
                  className="max-w-full aspect-square w-[100px] m-2"
                />
                <div className="mt-12 text-4xl font-medium leading-8 text-blue-700 whitespace-nowrap tracking-[2px] transition-transform duration-300 ease-in-out transform hover:text-blue-900">
                  Cost Savings
                </div>
                <div className="self-stretch mt-14 text-xl tracking-wider leading-8 text-center text-black max-md:mt-10 transition-transform duration-300 ease-in-out transform hover:text-gray-800">
                  Our approach to minimize disputes and associated fees.
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full transition-transform transform hover:scale-105">
              <div className="flex flex-col grow items-center px-9 pt-6 pb-12 mt-1.5 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="../images/alertz/6.svg"
                  className="max-w-full aspect-square w-[130px] m-1"
                />
                <div className="mt-5 text-4xl font-medium leading-8 text-blue-700 whitespace-nowrap tracking-[2px]">
                  Faster Resolution
                </div>
                <div className="self-stretch mt-14 text-xl tracking-wider leading-8 text-center text-black max-md:mt-10">
                  Facilitating swift and direct interactions between merchants
                  and card issuer banks for expedited resolutions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
