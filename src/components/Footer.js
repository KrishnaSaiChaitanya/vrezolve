import React from "react";

function Footer() {
  return (
    <>
      <div className="hidden md:flex  flex-col mt-[60px] items-center">
        <div className="max-w-full w-[789px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start max-md:mt-10">
                <p className="text-xl font-medium leading-5 text-center tracking-[2px] max-md:ml-2.5 text-[#0033cc] ">
                  COMPANY
                </p>
                <div className="flex flex-col self-start mt-5 text-base  text-black tracking-[2px]">
                  <div>About us</div>
                  <div className="mt-3 whitespace-nowrap">Partner with us</div>
                  <div className="mt-3">Contact us</div>
                  <div className="mt-3">Blog</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start max-md:mt-10">
                      <p className="text-xl font-medium leading-5 text-center  tracking-[2px] max-md:ml-2.5 text-[#0033cc] ">
                        SOLUTIONS
                      </p>
                      <div className="flex flex-col self-start mt-5 text-base  text-black tracking-[2px]">
                        <div>Dispute management</div>
                        <div className="mt-3 whitespace-nowrap">
                          Fraud and risk management
                        </div>
                        {/* <div className="mt-3">Rewards program</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-10">
                      <p className="text-xl font-[500] leading-5 text-center text-[#0033cc]  tracking-[2px] max-md:ml-2.5">
                        SOCIAL
                      </p>
                      <div className="flex flex-col gap-5 justify-between items-center px-5 mt-8">
                        <img
                          alt="vrezolve"
                          loading="lazy"
                          src="../images/icons/1.svg"
                          className="w-6 aspect-square"
                        />
                        <img
                          alt="vrezolve"
                          loading="lazy"
                          src="../images/icons/2.svg"
                          className="w-6 aspect-square"
                        />
                        <img
                          alt="vrezolve"
                          loading="lazy"
                          src="../images/icons/3.svg"
                          className="w-6 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center self-stretch py-6 mt-32 w-full bg-[#0033cc] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center px-16 pt-0.5 pb-2 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex text-white gap-5 justify-between max-w-full w-[467px] max-md:flex-wrap">
              <div>Terms of Use</div>
              <div>Compliance</div>
              <div>Privacy</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 items-center px-5 mb-5 mt-6 text-base font-extrabold text-[#0033cc] tracking-[4px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="../images/copy-right.svg"
            className="self-stretch my-auto w-3 aspect-square fill-black"
          />
          <div className="self-stretch">
            <span className="">vre</span>
            <span className="leading-6 text-[#ff6600] ">z</span>
            <span className="">olve</span>
          </div>
          <div className="my-auto text-sm leading-5 text-black font-normal text-center">
            2024
          </div>
        </div>
      </div>
      <div className="block md:hidden ">
        <div className="mt-16 text-sm font-medium leading-6 text-center text-[#0033cc] tracking-[2px]">
          COMPANY
        </div>{" "}
        <div className="mt-8 text-sm tracking-wider text-center text-black whitespace-nowrap">
          About us
        </div>{" "}
        <div className="mt-6 text-sm tracking-wider text-center text-black whitespace-nowrap">
          Partner with us
        </div>{" "}
        <div className="mt-6 text-sm tracking-wider text-center text-black whitespace-nowrap">
          Contact us
        </div>{" "}
        <div className="mt-6 text-sm tracking-wider text-center text-black">
          Blog
        </div>{" "}
        <div className="mt-20 text-sm font-medium leading-5 text-center text-[#0033cc] tracking-[2px]">
          SOLUTIONS
        </div>{" "}
        <div className="mt-9 text-sm text-center text-black whitespace-nowrap tracking-[2px]">
          Dispute management
        </div>{" "}
        <div className="mt-6 text-sm text-center text-black whitespace-nowrap tracking-[2px]">
          Fraud and risk management
        </div>{" "}
        {/* <div className="mt-6 text-sm text-center text-black whitespace-nowrap tracking-[2px]">
          Rewards program
        </div>{" "} */}
        <div className="mt-20 text-sm font-medium leading-5 text-center text-[#0033cc] tracking-[2px]">
          SOCIAL
        </div>{" "}
        <div className="w-full mx-auto">
          <img
            alt="vrezolve"
            loading="lazy"
            src="../images/icons/1.svg"
            className="mt-9 mx-auto w-6 aspect-square"
          />{" "}
          <img
            alt="vrezolve"
            loading="lazy"
            src="../images/icons/2.svg"
            className="mt-7 w-6 mx-auto aspect-square"
          />{" "}
          <img
            alt="vrezolve"
            loading="lazy"
            src="../images/icons/3.svg"
            className="mt-7 w-6 mx-auto aspect-square"
          />
        </div>
        <div className="flex flex-col justify-center self-stretch py-6 mt-20 w-full text-sm leading-5 text-white whitespace-nowrap bg-[#0033cc]">
          <div className="flex gap-5 justify-between px-2 py-0.5">
            <div className="grow">Terms of Use</div> <div>Compliance</div>{" "}
            <div>Privacy</div>{" "}
            <div className="grow leading-5">
              <span className="">Privacy</span> Policy
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 items-center justify-center px-5 mb-5 mt-6 text-base font-extrabold text-[#0033cc] tracking-[4px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="../images/copy-right.svg"
            className="self-stretch my-auto w-3 aspect-square fill-black"
          />
          <div className="self-stretch">
            <span className="">vre</span>
            <span className="leading-6 text-[#ff6600] ">z</span>
            <span className="">olve</span>
          </div>
          <div className="my-auto text-sm leading-5 text-black font-normal text-center">
            2024
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
