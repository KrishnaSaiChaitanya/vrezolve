import React from "react";
import ContactSection from "../components/ContactSection";
import RewardzHero from "../components/hero/RewardzHero";

function Rewardz() {
  return (
    <div>
      <div>
        <RewardzHero />
        <div className="flex flex-col items-center py-12 mb-6 bg-white">
          <div className="mt-32 text-5xl font-bold text-black leading-[80px] tracking-[2.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
            <span className="text-blue-700">Discover </span>
            Excusive Rewards
          </div>
          <div className="flex gap-5 justify-between p-3 mt-20 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-blue-700 rounded-full" />
            <div className="flex-auto max-md:max-w-full">
              Earn points effortlessly with every transaction.
            </div>
          </div>
          <div className="flex gap-5 justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-blue-700 rounded-full" />
            <div className="flex-auto max-md:max-w-full">
              Loyalty transforms into exciting perks and privileges.
            </div>
          </div>
          <div className="flex gap-5 justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-blue-700 rounded-full" />
            <div className="grow max-md:max-w-full">
              Access exclusive discounts and special offers.
            </div>
          </div>
          <div className="flex gap-5 justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-blue-700 rounded-full" />
            <div className="grow max-md:max-w-full">
              Your journey with us is about to become even more rewarding.
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}

export default Rewardz;
