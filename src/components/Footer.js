import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="flex gap-5 mx-auto justify-between items-start self-center px-5 mt-20 w-full max-w-[1095px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 self-stretch">
          <div className="flex gap-5 justify-between">
            <img src="../images/logo.svg" />
            <div className="flex-auto self-start mt-4 text-xl font-medium leading-5 text-center text-black tracking-[2px]">
              COMPANY
            </div>
          </div>
          <div className="flex flex-col self-end text-base  text-black tracking-[2px]">
            <div>About us</div>{" "}
            <div className="mt-3 whitespace-nowrap">Partner with us</div>{" "}
            <div className="mt-3">Contact us</div>{" "}
            <div className="mt-3">Blog</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 mt-3 text-base text-center text-black tracking-[2px]">
          <div className="text-xl font-medium leading-5">SOLUTIONS</div>{" "}
          <div className="mt-6">Dispute management</div>{" "}
          <div className="mt-3 whitespace-nowrap">
            Fraud and risk management
          </div>{" "}
          <div className="mt-3">Rewards program</div>
        </div>{" "}
        <div className="flex flex-col mt-3 text-base  text-black whitespace-nowrap basis-0 tracking-[2px]">
          <div className="text-xl font-medium leading-5 ">LEGAL</div>{" "}
          <div className="mt-6">Privacy</div>{" "}
          <div className="mt-3">Compliance</div>{" "}
          <div className="mt-3">Terms of use</div>
        </div>{" "}
        <div className="flex flex-col mt-3 basis-0">
          <div className="self-start ml-3 text-xl font-medium leading-5 text-center text-black tracking-[2px] max-md:ml-2.5">
            SOCIAL
          </div>{" "}
          <div className="flex gap-5 justify-between mt-7">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d20e42dc106b10fd0b2192ce69cc8630ed7d89178fbff45146e89f9abc888f?apiKey=67296d98361248faadca04e106a4f278&"
              className="w-6 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64b4f077ef6571a6f0d6f763178b9855e4d885a0480abc796c018eba2ab0ee09?apiKey=67296d98361248faadca04e106a4f278&"
              className="w-6 aspect-square"
            />{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb375e91d7f92b531398d50389c7ba9fa725cbd95aa201df7c35dcd82e5df4e9?apiKey=67296d98361248faadca04e106a4f278&"
              className="w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <img className="mt-5 mx-auto" src="../images/footer-line.svg" />
      <div className="flex gap-3.5 justify-center mb-[45px] pr-5 mt-6  text-base tracking-wider text-black">
        <div className="text-center">©</div>{" "}
        <div className="font-extrabold text-blue-700 tracking-[4px]">
          <span className="">vre</span>
          <span className="leading-6 text-orange-500 ">z</span>
          <span className="">olve</span>
        </div>{" "}
        <div className="my-auto text-sm leading-5 text-center">2024</div>
      </div>
    </div>
  );
}
export default Footer;
