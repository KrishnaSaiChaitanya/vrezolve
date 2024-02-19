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
            <span className="text-[#0033cc]">Revolutionizing</span> Chargeback
            Processes
          </div>
          <div className="flex gap-[40px] justify-between p-3 mt-20 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <img
              alt="vrezolve"
              loading="lazy"
              src="../images/cube.svg"
              className="my-auto aspect-square w-[48px]"
            />
            <div className="flex-auto max-md:max-w-full">
              <span className="text-[#0033cc]">Seamless Integration : </span>
              Customer communication, reasoning, accounting, case management and
              closure.
            </div>
          </div>
          <div className="flex gap-[40px] justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <img
              alt="vrezolve"
              loading="lazy"
              src="../images/cube.svg"
              className="my-auto aspect-square w-[45px]"
            />
            <div className="flex-auto max-md:max-w-full">
              <span className="text-[#0033cc]">Automated Experience :</span>{" "}
              Brace yourselves for a more streamlined chargeback process.
            </div>
          </div>
          <div className="flex gap-[40px] justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <img
              alt="vrezolve"
              loading="lazy"
              src="../images/cube.svg"
              className="my-auto aspect-square w-[40px]"
            />
            <div className="grow max-md:max-w-full">
              <span className="text-[#0033cc]">Efficiency Unleashed :</span> The
              future of chargeback operations is coming soon!
            </div>
          </div>
          <div className="flex gap-[40px] justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <img
              alt="vrezolve"
              loading="lazy"
              src="../images/cube.svg"
              className="my-auto aspect-square w-[40px]"
            />
            <div className="grow max-md:max-w-full">
              <span className="text-[#0033cc]">Stay Tuned :</span>{" "}
              #ChargebackInnovation #Coming Soon
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
      <div className="flex md:hidden flex-col items-center pt-5 pb-10 mx-auto w-full bg-white max-w-[400px]">
        <div className="mt-14 text-2xl  font-semibold leading-5 text-center text-[#ff6600] whitespace-nowrap tracking-[5px]">
          <span className="font-bold text-[#0033cc]">dispute</span>
          <span className=" font-black text-[#ff6600]">Z</span>
        </div>
        <img
          alt="vrezolve"
          loading="lazy"
          src="../images/cube.svg"
          className="my-auto aspect-square w-[45px]"
        />
        <div className="mt-12 text-2xl  font-bold tracking-wider text-center ">
          <span className="leading-7 text-[#0033cc]">
            Redefining chargebacks :
          </span>
          <span className="leading-7"> The dispute</span>
          <span className=" font-black text-[#ff6600]">Z</span>
          <span className="leading-7"> advantage</span>
        </div>
        <img
          alt="vrezolve"
          loading="lazy"
          src="../images/dispute-hero.svg"
          className="mt-16 w-full aspect-[0.77] max-w-[305px]"
        />
        <div className="mt-12 text-base tracking-normal leading-6 text-center text-black">
          <span className="font-bold">dispute</span>
          <span className=" font-black text-[#ff6600]">Z</span> seamlessly
          integrates all chargeback processes – from customer communication and
          reasoning to accounting, case management, and closure. Transform your
          approach to chargeback operations for a more streamlined and automated
          experience.
        </div>
        <div className="mt-8 text-2xl font-bold text-[#ff6600] whitespace-nowrap leading-[60px] tracking-[4.8px]">
          COMING SOON
        </div>
        <div className="h-0.5 mt-1 mx-auto bg-[#ff6600] w-[148px]" />
        <div className="mt-24 text-2xl font-bold tracking-wider text-center text-black w-[309px]">
          <span className="text-[#0033cc]">Revolutionizing</span> chargeback
          processes
        </div>
        <div>
          <div className="flex gap-3 pr-5 mt-10 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
            {/* <div className="self-start mt-2.5 bg-[#0033cc] rounded-full h-[9px] w-[9px]" /> */}
            <div className="flex flex-row">
              <div className="bg-[#0033cc] mt-2 mr-3 rounded-full h-[9px] w-[10px]" />
              <span>
                <span className="text-[#0033cc]">Seamless Integration : </span>
                Customer communication, reasoning, accounting, case management
                and closure.
              </span>
            </div>
          </div>
          <div className="flex gap-3 pr-5 mt-5 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
            {/* <div className="my-auto bg-[#0033cc] rounded-full h-[9px] w-[9px]" /> */}
            <div className="flex-auto">
              <span className="text-[#0033cc]">Automated Experience :</span>{" "}
              Brace yourselves for a more streamlined chargeback process.
            </div>
          </div>
          <div className="flex gap-3 pr-5 mt-8 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
            {/* <div className="self-start mt-2.5 bg-[#0033cc] rounded-full h-[9px] w-[9px]" /> */}
            <div className="flex-auto">
              <span className="text-[#0033cc]">Efficiency Unleashed :</span> The
              future of chargeback operations is coming soon!
            </div>
          </div>
          <div className="flex gap-3 pr-5 mt-5 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
            {/* <div className="self-start mt-2.5 bg-[#0033cc] rounded-full h-[9px] w-[9px]" /> */}
            <div className="flex-auto">
              <span className="text-[#0033cc]">Stay Tuned :</span>{" "}
              #ChargebackInnovation #Coming Soon
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </>
  );
}

export default Disputz;
