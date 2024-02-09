import React from "react";
import ContactSection from "../components/ContactSection";
import DisputszHero from "../components/hero/DisputszHero";

function Disputz() {
  return (
    <div>
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
            <span className="text-blue-700">Automated Experience :</span> Brace
            yourselves for a more streamlined chargeback process.
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
  );
}

export default Disputz;
