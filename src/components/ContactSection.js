import React from "react";
import CardsSection from "./CardsSection";

function ContactSection() {
  return (
    <>
      <div className=" hidden md:block bg-[#f2f5fc]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start pl-16 self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="mt-40 sm:text-2xl md:text-5xl text-2xl font-bold leading-[60.16px] text-stone-750 tracking-[3px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Want to learn more?
              </div>
              <div className="flex-auto md:text-xl  text-black mt-5">
                Get in touch with us for any questions or assistance. We're here
                to help!
              </div>
            </div>
          </div>
          <div className="flex bg-[#f2f5fc] flex-col ml-5 md:mt-32 mt-6   w-5/12 max-md:ml-0 max-md:w-full">
            {/* <div className="flex px-5 flex-col grow text-base tracking-wider leading-8 whitespace-nowrap text-zinc-500 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col ml-20 max-w-full text-5xl font-bold text-center text-black leading-[80.16px] tracking-[2.4px] w-[383px] max-md:mt-10 sm:mt-5 max-md:mr-2.5 max-md:text-4xl mb-[50px]">
                <div className="max-md:text-4xl ">Contact Us</div>{" "}
                <div className="mt-3 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[200px]" />
              </div>{" "}
              <div className="flex flex-col bg-[#f2f5fc]  justify-center md:mr-5   py-0.5 mt-10  rounded max-md:mt-10 max-md:max-w-full">
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
            </div> */}
            <div className="flex flex-col grow justify-center text-base leading-8 text-zinc-500 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-bold text-center text-black max-md:max-w-full max-md:text-4xl">
                Contact Us
              </div>
              <div className="mt-3 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[200px]" />
              <div className="justify-center bg-white mt-20 items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
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
              <div className="justify-center bg-white items-start mt-5 pb-16 pt-3.5 pr-12 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                <input
                  type="text"
                  placeholder="Send us a message"
                  className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                />
              </div>
              <div className="justify-center self-center px-11 py-1.5 mt-6 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px] max-md:px-5">
                SUBMIT
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32  max-w-full mx-auto bg-[#0033cc] h-[3px] w-full" />
      </div>
      <div className="flex md:hidden flex-col self-stretch px-6 py-12 mt-24 w-full text-base tracking-wider leading-8 bg-[#f2f5fc] text-zinc-500">
        <div className="mt-16 text-2xl font-bold tracking-wider text-center text-black whitespace-nowrap">
          Want to learn more?
        </div>
        <div className="mt-14 text-xl text-center text-black">
          Get in touch with us for any questions or assistance. We're here to
          help!
        </div>{" "}
        <div className="self-center mt-9 text-2xl font-bold tracking-wider text-center text-black">
          Contact Us
        </div>{" "}
        <div className="self-center mt-5 h-0.5 bg-blue-700 w-[120px]" />{" "}
        <div className="flex flex-col bg-[#f2f5fc]  justify-center md:mr-5   py-0.5 mt-10  rounded max-md:mt-10 max-md:max-w-full">
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
        <div className="justify-center self-center px-8 py-1.5 mt-10 mb-8 font-medium text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px]">
          Submit
        </div>
      </div>
    </>
  );
}

export default ContactSection;
