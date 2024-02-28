import React from "react";

function CardsSection() {
  return (
    // <div className="w-full m-auto">
    //   <div className="flex flex-col p-[40px] bg-[#f2f5fc] max-md:px-5 w-full">
    //     <div className="self-center  text-4xl font-bold text-center text-black leading-[80.16px] tracking-[2.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
    //       Unveiling the best of our platform
    //     </div>
    //     <div className="mt-6 max-md:mt-10 m-auto">
    //       <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
    //         <div className="flex flex-col ml-5 w-[350px] h-[350px] max-md:ml-0 max-md:w-full">
    //           <div className="flex flex-col grow items-center px-9 pt-6 pb-12 mt-1.5 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:mt-10 transition-transform transform hover:scale-105">
    //             <img
    //               alt="vrezolve"
    //               loading="lazy"
    //               srcSet="../images/alertz/4.svg"
    //               className="max-w-full  w-[50px] m-2"
    //             />
    //             <div className="mt-12 text-4xl font-medium leading-8 text-blue-700 whitespace-nowrap tracking-[2px] transition-all duration-500 transform hover:text-blue-900">
    //               Fraud Prevention
    //             </div>
    //             <div className="self-stretch mt-14 text-xl tracking-wider leading-8 text-center text-black max-md:mt-10 transition-all duration-500 transform hover:text-gray-800">
    //               Employing advanced technologies and vigilance for robust fraud
    //               prevention.
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex flex-col ml-5 w-[350px] h-[350px]max-md:ml-0 max-md:w-full transition-transform transform hover:scale-105">
    //           <div className="flex flex-col grow items-center px-9 pt-6 pb-12 mt-1.5 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:mt-10">
    //             <img
    //               alt="vrezolve"
    //               loading="lazy"
    //               srcSet="../images/alertz/5.svg"
    //               className="max-w-full  w-[50px] m-2"
    //             />
    //             <div className="mt-10 text-4xl font-medium leading-8 text-blue-700 whitespace-nowrap tracking-[2px] transition-transform duration-300 ease-in-out transform hover:text-blue-900">
    //               Cost Savings
    //             </div>
    //             <div className="self-stretch mt-10 text-xl tracking-wider leading-8 text-center text-black max-md:mt-10 transition-transform duration-300 ease-in-out transform hover:text-gray-800">
    //               Our approach to minimize disputes and associated fees.
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex flex-col ml-5 w-[350px] h-[350px] max-md:ml-0 max-md:w-full transition-transform transform hover:scale-105">
    //           <div className="flex flex-col grow items-center px-9 pt-6 pb-12 mt-1.5 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:mt-10">
    //             <img
    //               alt="vrezolve"
    //               loading="lazy"
    //               srcSet="../images/alertz/6.svg"
    //               className="max-w-full  w-[130px] m-1"
    //             />
    //             <div className="mt-5 text-4xl font-medium leading-8 text-blue-700 whitespace-nowrap tracking-[2px]">
    //               Faster Resolution
    //             </div>
    //             <div className="self-stretch mt-10 text-xl tracking-wider leading-8 text-center text-black max-md:mt-10">
    //               Facilitating swift and direct interactions between merchants
    //               and card issuer banks for expedited resolutions.
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full flex justify-center items-center px-16 py-11 bg-blue-700 bg-opacity-10 max-md:px-5">
      <div className="flex flex-col mt-1.5 w-full max-w-[1044px] max-md:max-w-full">
        <div className="self-center text-4xl font-bold text-center text-black leading-[60px] max-md:max-w-full">
          Unveiling the best of our platform
        </div>
        <div className="justify-center mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-[300px] h-[300px] pt-5 items-center px-5  w-full bg-white rounded-3xl shadow-sm max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="../images/alertz/4.svg"
                  className=" w-[50px]"
                />
                <div className="mt-3 text-2xl font-medium text-blue-700 whitespace-nowrap leading-[60px]">
                  Fraud Prevention
                </div>
                <div className="self-stretch mt-3 text-xl leading-8 text-center text-black">
                  Employing advanced technologies and vigilance for robust fraud
                  prevention.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-[300px] h-[300px] pt-4 items-center px-5  w-full bg-white rounded-3xl shadow-sm max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="../images/alertz/5.svg"
                  className="mt-3.5  w-[50px]"
                />
                <div className="mt-3 text-2xl font-medium text-blue-700 whitespace-nowrap leading-[60px]">
                  Cost Savings
                </div>
                <div className="self-stretch mt-3 text-xl leading-8 text-center text-black">
                  Our approach to minimize disputes and associated fees.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
              <div className="flex justify-center w-[300px] h-[300px] pt-1 items-center px-8 w-full bg-white rounded-3xl shadow-sm  max-md:px-5 max-md:mt-10">
                <div className="flex flex-col justify-center items-center px-1 py-6">
                  <img
                    loading="lazy"
                    srcSet="../images/alertz/6.svg"
                    className=" w-[61px]"
                  />
                  <div className="mt-1 text-2xl font-medium text-blue-700 whitespace-nowrap leading-[60px]">
                    Faster Resolution
                  </div>
                  <div className="self-stretch mt-1 text-xl leading-8 text-center text-black">
                    Facilitating direct interaction between merchants and
                    issuers for quick resolutions.
                  </div>
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
