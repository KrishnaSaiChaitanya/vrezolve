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
          src="../images/dispute-hero.svg"
          className="mt-16 w-full aspect-[0.77] max-w-[305px]"
        />
        <div className="mt-14 text-2xl italic font-semibold leading-5 text-center text-orange-500 whitespace-nowrap tracking-[5px]">
          <span className="font-bold text-blue-700">dispute</span>
          <span className="italic font-black text-orange-500">Z</span>
        </div>
        <div className="h-0.5 mt-5 mx-auto bg-blue-700 w-[148px]" />
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
        <div className="h-0.5 mt-1.5 mx-auto text-orange-500 w-[148px]" />

        <div className="mt-24 text-2xl font-bold tracking-wider text-center text-black w-[309px]">
          <span className="text-blue-700">Revolutionizing</span> chargeback
          processes
        </div>
        <div className="flex gap-3 pr-5 mt-10 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
          {/* <div className="self-start mt-2.5 bg-blue-700 rounded-full h-[9px] w-[9px]" /> */}
          <div className="flex-auto">
            <span className="text-blue-700">Seamless Integration : </span>
            Customer communication, reasoning, accounting, case management and
            closure.
          </div>
        </div>
        <div className="flex gap-3 pr-5 mt-5 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
          {/* <div className="my-auto bg-blue-700 rounded-full h-[9px] w-[9px]" /> */}
          <div className="flex-auto">
            <span className="text-blue-700">Automated Experience :</span> Brace
            yourselves for a more streamlined chargeback process.
          </div>
        </div>
        <div className="flex gap-3 pr-5 mt-8 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
          {/* <div className="self-start mt-2.5 bg-blue-700 rounded-full h-[9px] w-[9px]" /> */}
          <div className="flex-auto">
            <span className="text-blue-700">Efficiency Unleashed :</span> The
            future of chargeback operations is coming soon!
          </div>
        </div>
        <div className="flex gap-3 pr-5 mt-5 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
          {/* <div className="self-start mt-2.5 bg-blue-700 rounded-full h-[9px] w-[9px]" /> */}
          <div className="flex-auto">
            <span className="text-blue-700">Stay Tuned :</span>{" "}
            #ChargebackInnovation #Coming Soon
          </div>
        </div>

        <ContactSection />
      </div>
    </>
  );
}

export default Disputz;
