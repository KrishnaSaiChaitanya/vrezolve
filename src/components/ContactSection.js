import React from "react";
import CardsSection from "./CardsSection";

function ContactSection() {
  return (
    <div className=" bg-[#f2f5fc]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start pl-5 self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="mt-40 text-5xl font-bold leading-[60.16px] text-stone-750 tracking-[3px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Want to learn more?
            </div>
            <div className="flex-auto text-xl text-black mt-5">
              Get in touch with us for any questions or assistance. We're here
              to help!
            </div>
          </div>
        </div>
        <div className="flex bg-[#f2f5fc] flex-col ml-5 mt-32   w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex px-5 flex-col grow text-base tracking-wider leading-8 whitespace-nowrap text-zinc-500 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-end  mr-40 max-w-full text-5xl font-bold text-center text-black leading-[80.16px] tracking-[2.4px] w-[383px] max-md:mt-10 max-md:mr-2.5 max-md:text-4xl mb-[50px]">
              <div className="max-md:text-4xl">Contact Us</div>{" "}
              <div className="mt-3 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[200px]" />
            </div>{" "}
            <div className="flex flex-col bg-[#f2f5fc]  justify-center mr-5  py-0.5 mt-10  rounded max-md:mt-10 max-md:max-w-full">
              <div className="justify-center bg-white  items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                <input
                  type="text"
                  placeholder="First name"
                  className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                />
              </div>

              <div className="justify-center bg-white items-start mt-5 py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                <input
                  type="text"
                  placeholder="Last name"
                  className="placeholder-gray-400  text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                />
              </div>

              <div className="justify-center bg-white items-start mt-5 py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                />
              </div>

              <div className="justify-center bg-white items-start mt-5 py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                <input
                  type="text"
                  placeholder="Phone"
                  className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                />
              </div>
              <div className="justify-center bg-white items-start mt-5 pb-16 pt-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                <input
                  type="text"
                  placeholder="Send us a message"
                  className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                />
              </div>
            </div>
            <div className="justify-center self-center px-12 py-1.5 mt-6 text-xl font-medium leading-8 text-center text-white bg-orange-500 rounded-[100px] tracking-[2px] max-md:px-5">
              Submit
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32  max-w-full mx-auto bg-[#0033cc] h-[3px] w-full" />
    </div>
  );
}

export default ContactSection;