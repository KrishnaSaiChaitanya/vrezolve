import * as React from "react";
import Section from "../Section";
// import { EnhancedSecurityComponent } from "../test";
// import PlatformFeatures from "../Cards";

function AlertzHero(props) {
  return (
    <>
      <div className="px-10 pt-2 mb-[120px] bg-white max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="../images/alertz/1.png"
              id="hero-image"
              className="m-auto md:mt-[80px] mt-0"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-stretch mt-36 max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl  font-bold leading-5 text-left text-[#ff6600] tracking-[5px] max-md:max-w-full">
                <span className="text-[#0033cc]">alert</span>
                <span className=" font-black text-[#ff6600]">Z</span>
              </div>
              <img
                loading="lazy"
                src="../images/line.svg"
                className="object-center mt-6  max-w-full aspect-[50] stroke-[3px] stroke-[#0033cc] w-[150px] max-md:ml-2"
              />
              <div className="mt-9 text-4xl font-medium  text-black leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
                <span className="font-bold text-[#0033cc]">
                  E-commerce defense
                </span>
                <span className="font-bold">: Fraud & chargebacks</span>
              </div>
              <div className="flex flex-col items-stretch pr-20 pl-4 mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-base tracking-wide leading-8 text-black max-md:mr-2 max-md:max-w-full">
                  <span className="text-xl font-bold leading-6 tracking-[2px]">
                    alert
                  </span>
                  <span className="text-xl  font-black leading-6 text-[#ff6600] tracking-[2px]">
                    Z
                  </span>{" "}
                  <span className="text-xl">
                    empowers you with a robust shield against the threats of
                    fraud and chargeback disputes. Explore our cutting-edge
                    solutions and stay ahead in safeguarding your transactions.
                  </span>
                </div>
                <button className="justify-center items-stretch self-start px-12 py-1.5 mt-9 text-xl font-medium  leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] max-md:px-5">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <EnhancedSecurityComponent /> */}
      {/* <PlatformFeatures /> */}
    </>
  );
}
export default AlertzHero;
