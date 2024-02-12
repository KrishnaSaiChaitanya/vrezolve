import React from "react";
import ContactSection from "../components/ContactSection";
import DisputszHero from "../components/hero/DisputszHero";

function Disputz() {
  return (
    <>
      <div className="hidden md:block">
        <DisputszHero />
        <div className="flex flex-col items-center py-12 mb-6 bg-white">
          <div className="mt-32 text-5xl font-bold text-black leading-[80px] tracking-[2.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
            <span className="text-blue-700">Revolutionizing</span> Chargeback
            Processes
          </div>
          <div className="flex gap-5 justify-between p-3 mt-20 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="my-auto w-5 h-4 bg-blue-700 rounded-full" />
            <div className="flex-auto max-md:max-w-full">
              <span className="text-blue-700">Seamless Integration : </span>
              Customer communication, reasoning, accounting, case management and
              closure.
            </div>
          </div>
          <div className="flex gap-5 justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-blue-700 rounded-full" />
            <div className="flex-auto max-md:max-w-full">
              <span className="text-blue-700">Automated Experience :</span>{" "}
              Brace yourselves for a more streamlined chargeback process.
            </div>
          </div>
          <div className="flex gap-5 justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-blue-700 rounded-full" />
            <div className="grow max-md:max-w-full">
              <span className="text-blue-700">Efficiency Unleashed :</span> The
              future of chargeback operations is coming soon!
            </div>
          </div>
          <div className="flex gap-5 justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-blue-700 rounded-full" />
            <div className="grow max-md:max-w-full">
              <span className="text-blue-700">Stay Tuned :</span>{" "}
              #ChargebackInnovation #Coming Soon
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
      <div className="flex md:hidden flex-col items-center pt-5 pb-10 mx-auto w-full bg-white max-w-[400px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/96bdb81d1c0cd9c4b6dffb0bd68ab8da18c8e2c985d462ef90943c11b9b9d203?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/96bdb81d1c0cd9c4b6dffb0bd68ab8da18c8e2c985d462ef90943c11b9b9d203?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/96bdb81d1c0cd9c4b6dffb0bd68ab8da18c8e2c985d462ef90943c11b9b9d203?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/96bdb81d1c0cd9c4b6dffb0bd68ab8da18c8e2c985d462ef90943c11b9b9d203?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/96bdb81d1c0cd9c4b6dffb0bd68ab8da18c8e2c985d462ef90943c11b9b9d203?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/96bdb81d1c0cd9c4b6dffb0bd68ab8da18c8e2c985d462ef90943c11b9b9d203?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/96bdb81d1c0cd9c4b6dffb0bd68ab8da18c8e2c985d462ef90943c11b9b9d203?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/96bdb81d1c0cd9c4b6dffb0bd68ab8da18c8e2c985d462ef90943c11b9b9d203?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-20 w-full aspect-[0.77] max-w-[305px]"
        />
        <div className="mt-14 text-2xl italic font-semibold leading-5 text-center text-orange-500 whitespace-nowrap tracking-[5px]">
          <span className="font-bold text-blue-700">dispute</span>
          <span className="italic font-black text-orange-500">Z</span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f7b4f464a96596044bc4bfe490d83d187e3ad446033c7f1c288ce5d14c84625?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-5 max-w-full aspect-[50] stroke-[2px] stroke-blue-700 w-[100px]"
        />
        <div className="mt-14 text-2xl italic font-bold tracking-wider text-center text-orange-500">
          <span className="leading-7 text-blue-700">
            Redefining chargebacks :
          </span>
          <span className="leading-7"> The dispute</span>
          <span className="italic font-black text-orange-500">Z</span>
          <span className="leading-7"> advantage</span>
        </div>
        <div className="mt-12 text-base tracking-normal leading-6 text-center text-black">
          <span className="font-bold">dispute</span>
          <span className="italic font-black text-orange-500">Z</span>{" "}
          seamlessly integrates all chargeback processes – from customer
          communication and reasoning to accounting, case management, and
          closure. Transform your approach to chargeback operations for a more
          streamlined and automated experience.
        </div>
        <div className="mt-8 text-2xl font-bold text-orange-500 whitespace-nowrap leading-[60px] tracking-[4.8px]">
          COMING SOON
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8391036027d6aae7d56275dcbc40b0e28e054f2694fc0bb71bbe9534f6cdc05?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-1.5 w-40 max-w-full aspect-[100] stroke-[2px] stroke-orange-500"
        />
        <div className="mt-24 text-2xl font-bold tracking-wider text-center text-black w-[309px]">
          <span className="text-blue-700">Revolutionizing</span> chargeback
          processes
        </div>
        <div className="flex gap-3 pr-5 mt-10 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
          <div className="self-start mt-2.5 bg-blue-700 rounded-full h-[9px] w-[9px]" />
          <div className="flex-auto">
            <span className="text-blue-700">Seamless Integration : </span>
            Customer communication, reasoning, accounting, case management and
            closure.
          </div>
        </div>
        <div className="flex gap-3 pr-5 mt-5 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
          <div className="my-auto bg-blue-700 rounded-full h-[9px] w-[9px]" />
          <div className="flex-auto">
            <span className="text-blue-700">Automated Experience :</span> Brace
            yourselves for a more streamlined chargeback process.
          </div>
        </div>
        <div className="flex gap-3 pr-5 mt-8 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
          <div className="self-start mt-2.5 bg-blue-700 rounded-full h-[9px] w-[9px]" />
          <div className="flex-auto">
            <span className="text-blue-700">Efficiency Unleashed :</span> The
            future of chargeback operations is coming soon!
          </div>
        </div>
        <div className="flex gap-3 pr-5 mt-5 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
          <div className="self-start mt-2.5 bg-blue-700 rounded-full h-[9px] w-[9px]" />
          <div className="flex-auto">
            <span className="text-blue-700">Stay Tuned :</span>{" "}
            #ChargebackInnovation #Coming Soon
          </div>
        </div>
        <div className="flex flex-col self-stretch px-6 py-12 mt-24 w-full text-base tracking-wider leading-8 bg-blue-700 bg-opacity-10 text-zinc-500">
          <div className="mt-12 text-2xl font-bold tracking-wider text-center text-black whitespace-nowrap">
            Want to learn more?
          </div>
          <div className="mt-14 text-xl text-center text-black">
            Get in touch with us for any questions or assistance. We're here to
            help!
          </div>{" "}
          <div className="self-center mt-14 text-2xl font-bold tracking-wider text-center text-black">
            Contact Us
          </div>{" "}
          <div className="self-center mt-10 h-0.5 bg-blue-700 w-[120px]" />{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              First name
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Last name
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Email
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Phone
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="items-start pt-3.5 pr-16 pb-20 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Send us a message
            </div>
          </div>{" "}
          <div className="justify-center self-center px-8 py-1.5 mt-10 mb-8 font-medium text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px]">
            Submit
          </div>
        </div>{" "}
        <div className="self-stretch w-full bg-blue-700 min-h-[2px]" />{" "}
        <div className="mt-24 text-sm font-medium leading-6 text-center text-blue-700 tracking-[2px]">
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
        <div className="mt-20 text-sm font-medium leading-5 text-center text-blue-700 tracking-[2px]">
          SOLUTIONS
        </div>{" "}
        <div className="mt-9 text-sm text-center text-black whitespace-nowrap tracking-[2px]">
          Dispute management
        </div>{" "}
        <div className="mt-6 text-sm text-black whitespace-nowrap tracking-[2px]">
          Fraud and risk management
        </div>{" "}
        <div className="mt-6 text-sm text-center text-black whitespace-nowrap tracking-[2px]">
          Rewards program
        </div>{" "}
        <div className="mt-20 text-sm font-medium leading-6 text-blue-700 tracking-[2px]">
          SOCIAL
        </div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d20e42dc106b10fd0b2192ce69cc8630ed7d89178fbff45146e89f9abc888f?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-9 w-6 aspect-square"
        />{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d7472b43bcea8fcc7cf4b653786f71698eb678302159cb8c3e0aa403e749310?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-7 w-6 aspect-square"
        />{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb375e91d7f92b531398d50389c7ba9fa725cbd95aa201df7c35dcd82e5df4e9?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-7 w-6 aspect-square"
        />{" "}
        <div className="flex flex-col justify-center self-stretch py-6 mt-20 w-full text-sm leading-5 text-white whitespace-nowrap bg-blue-700">
          <div className="flex gap-5 justify-between px-2 py-0.5">
            <div className="grow">Terms of Use</div> <div>Compliance</div>{" "}
            <div>Privacy</div>{" "}
            <div className="">
              <span className="">Privacy</span> Policy
            </div>
          </div>
        </div>{" "}
        <div className="self-stretch mt-6 w-full bg-zinc-500 min-h-[1px]" />{" "}
        <div className="flex gap-5 pr-5 mt-2 text-sm tracking-wider text-black">
          <div className="text-center leading-[143%]">©</div>{" "}
          <div className="font-extrabold text-blue-700 tracking-[3.5px]">
            <span className="">vre</span>
            <span className="leading-6 text-orange-500 ">z</span>
            <span className="">olve</span>
          </div>{" "}
          <div className="self-start mt-2.5 text-center">2024</div>
        </div>
      </div>
    </>
  );
}

export default Disputz;
