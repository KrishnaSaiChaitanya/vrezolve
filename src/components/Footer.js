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
                          loading="lazy"
                          src="../images/icons/1.svg"
                          className="w-6 aspect-square"
                        />
                        <img
                          loading="lazy"
                          src="../images/icons/2.svg"
                          className="w-6 aspect-square"
                        />
                        <img
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
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/62230ee6874d036ceef67daffa907e74c33a88d57c56d370b802f84abf1501df?apiKey=67296d98361248faadca04e106a4f278&"
            className="self-stretch my-auto w-3 aspect-square fill-black"
          />
          <div className="self-stretch">
            <span className="">vre</span>
            <span className="leading-6 text-[#ff6600] ">z</span>
            <span className="">olve</span>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41b24e097cd4ee5ef41ae000b2659942b0040cd6c58f6fd1f19a3b4a12185ed4?apiKey=67296d98361248faadca04e106a4f278&"
            className="self-stretch my-auto aspect-[3.45] w-[34px]"
          />
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
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d20e42dc106b10fd0b2192ce69cc8630ed7d89178fbff45146e89f9abc888f?apiKey=67296d98361248faadca04e106a4f278&"
            className="mt-9 mx-auto w-6 aspect-square"
          />{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d7472b43bcea8fcc7cf4b653786f71698eb678302159cb8c3e0aa403e749310?apiKey=67296d98361248faadca04e106a4f278&"
            className="mt-7 w-6 mx-auto aspect-square"
          />{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb375e91d7f92b531398d50389c7ba9fa725cbd95aa201df7c35dcd82e5df4e9?apiKey=67296d98361248faadca04e106a4f278&"
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
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/62230ee6874d036ceef67daffa907e74c33a88d57c56d370b802f84abf1501df?apiKey=67296d98361248faadca04e106a4f278&"
            className="self-stretch my-auto w-3 aspect-square fill-black"
          />
          <div className="self-stretch">
            <span className="">vre</span>
            <span className="leading-6 text-[#ff6600] ">z</span>
            <span className="">olve</span>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41b24e097cd4ee5ef41ae000b2659942b0040cd6c58f6fd1f19a3b4a12185ed4?apiKey=67296d98361248faadca04e106a4f278&"
            className="self-stretch my-auto aspect-[3.45] w-[34px]"
          />
        </div>
      </div>
    </>
  );
}
export default Footer;
