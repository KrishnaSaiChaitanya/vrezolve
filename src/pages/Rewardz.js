import React from "react";
import ContactSection from "../components/ContactSection";
import RewardzHero from "../components/hero/RewardzHero";

function Rewardz() {
  return (
    <div>
      <div className="hidden md:block">
        <RewardzHero />
        <div className="flex flex-col items-center py-12 mb-6 bg-white">
          <div className="mt-32 text-5xl font-bold text-black leading-[80px] tracking-[2.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
            <span className="text-[#0033cc]">Discover </span>
            Excusive Rewards
          </div>
          <div className="flex gap-5 justify-between p-3 mt-20 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-[#0033cc] rounded-full" />
            <div className="flex-auto max-md:max-w-full">
              Earn points effortlessly with every transaction.
            </div>
          </div>
          <div className="flex gap-5 justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-[#0033cc] rounded-full" />
            <div className="flex-auto max-md:max-w-full">
              Loyalty transforms into exciting perks and privileges.
            </div>
          </div>
          <div className="flex gap-5 justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-[#0033cc] rounded-full" />
            <div className="grow max-md:max-w-full">
              Access exclusive discounts and special offers.
            </div>
          </div>
          <div className="flex gap-5 justify-between p-3 mt-6 w-full text-2xl tracking-wider leading-10 text-black max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto w-4 h-4 bg-[#0033cc] rounded-full" />
            <div className="grow max-md:max-w-full">
              Your journey with us is about to become even more rewarding.
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
      <div className="flex md:hidden flex-col items-center pt-5 pb-12 mx-auto w-full bg-white max-w-[380px]">
        <div className="mt-14 text-2xl italic font-semibold leading-5 text-center text-[#ff6600] whitespace-nowrap tracking-[5px]">
          <span className="font-bold text-[#0033cc]">reward</span>
          <span className="italic font-black text-[#ff6600]">Z</span>
        </div>
        <div className="h-0.5 mt-5 mx-auto bg-[#0033cc] w-[128px]" />
        <div className="mt-12 text-2xl font-bold tracking-wider text-center text-[#0033cc] whitespace-nowrap">
          Unlock a world of rewards
        </div>
        <img
          loading="lazy"
          src="../images/rewardz-hero.svg"
          className="mt-20 w-full aspect-[0.77] max-w-[303px]"
        />

        <div className="mt-16 px-3 text-base tracking-normal leading-6 text-center text-black">
          Our rewards program is designed to elevate your experience. Earn
          points with every transaction, and watch as your loyalty transforms
          into exciting rewards. From exclusive discounts to special offers,
          your journey with us is about to become even more rewarding. Start
          earning today and indulge in the perks that await you!
        </div>
        <div className="mt-5 text-2xl font-bold text-center text-[#ff6600] whitespace-nowrap leading-[60px] tracking-[4.8px]">
          COMING SOON
        </div>
        <div className="h-0.5 mt-1 mx-auto bg-[#ff6600] w-[148px]" />
        <div className="mt-28 text-2xl font-bold tracking-wider text-center text-black whitespace-nowrap">
          Discover <span className="text-black">exclusive rewards</span>
        </div>
        <div className="">
          <div className="flex gap-3 pr-5 mt-9 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
            <div className=" flex flex-row">
              <div className="bg-[#0033cc] mt-2 mr-3 rounded-full h-[9px] w-[9px]" />
              Earn points effortlessly with every transaction.
            </div>
          </div>
          <div className="flex gap-3 pr-5 mt-5 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
            <div className=" flex flex-row">
              <div className="bg-[#0033cc] mt-2 mr-3 rounded-full h-[9px] w-[11px]" />
              Loyalty transforms into exciting perks and privileges.
            </div>
          </div>
          <div className="flex gap-3 pr-5 mt-8 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
            <div className=" flex flex-row">
              <div className="bg-[#0033cc] mt-2 mr-3 rounded-full h-[9px] w-[10px]" />
              Access exclusive discounts and special offers.
            </div>
          </div>
          <div className="flex pr-5 mt-5 w-full text-base tracking-normal leading-6 text-black max-w-[321px]">
            <div className=" flex flex-row">
              <div className="bg-[#0033cc] mt-2 mr-3  rounded-full h-[9px] w-[11px]" />
              Your journey with us about to become even more rewarding.
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}

export default Rewardz;
