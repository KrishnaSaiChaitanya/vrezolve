import React from "react";

function Section3() {
  return (
    <div>
      {" "}
      <div className="mt-24 text-4xl text-center font-medium leading-8 text-black tracking-[2px] max-md:mt-10 max-md:max-w-full">
        Experience efficiency at every step
      </div>
      <div className="mt-7 max-w-full mx-auto bg-blue-700 h-[3px] w-[500px]" />
      <div className="flex flex-col pr-3.5 pl-10 mt-28 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="px-0.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:max-w-full">
                <div className="text-xl max-w-[75%]  leading-8 text-black tracking-[2px] max-md:max-w-[75%]">
                  <span className="tracking-wider">
                    Our tailored solutions for issuers streamline the process,
                    providing efficient and strategic tools to navigate and
                    resolve disputes effortlessly. Stay in control, enhance
                    customer satisfaction, and maintain the integrity of your
                    financial transactions with
                  </span>{" "}
                  <span className="font-bold">dispute</span>
                  <span className=" font-black text-orange-500">Z</span>
                </div>
                <div className="mt-9 max-md:max-w-full">
                  <div className="flex gap-3 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                      <div className="z-10 mt-3 text-3xl font-medium text-blue-700 leading-[52px] tracking-[2px] max-md:max-w-full">
                        Streamlined Dispute Management Solutions for Issuers
                      </div>
                    </div>
                    <div className="flex flex-col ml-4 w-[34%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col justify-center items-start pr-10 w-full rounded-full border-blue-700 border-dashed aspect-square border-[3px]">
                        <img
                          loading="lazy"
                          src="../images/gears.svg"
                          alt=""
                          className="mt-28 pr-10 max-w-full aspect-[1.57] w-[159px] max-md:mt-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ml-5 w-[36%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="../images/home/2.svg"
                alt=""
                className="absolute right-5 inset-0 w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Section3;
