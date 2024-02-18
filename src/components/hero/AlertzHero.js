import * as React from "react";

function AlertzHero(props) {
  return (
    <>
      <div className=" max-w-full w-[1200px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="../images/alertz/1.png"
              className="grow w-full aspect-[0.99] max-md:mt-3 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch px-5 my-auto text-4xl font-medium text-black leading-[60px] max-md:mt-10 max-md:max-w-full">
              <div className=" font-bold  max-md:max-w-full">
                <span className="">alert</span>
                <span className=" font-black text-orange-500">Z</span>
              </div>
              <div className="mt-6 max-md:max-w-full">
                <span className="font-bold text-blue-700">
                  E-commerce defense
                </span>
                <span className="font-bold">: Fraud & chargebacks</span>
              </div>
              <div className="mt-6 text-base tracking-wide leading-8 max-md:max-w-full">
                <span className="text-xl font-bold leading-6 tracking-[2px]">
                  alert
                </span>
                <span className="text-xl  font-black leading-6 text-orange-500 tracking-[2px]">
                  Z
                </span>{" "}
                <span className="text-xl">
                  empowers you with a robust shield against the threats of fraud
                  and chargeback disputes. Explore our cutting-edge solutions
                  and stay ahead in safeguarding your transactions.
                </span>
              </div>
              <div className="justify-center self-start px-9 py-1.5 mt-6 text-xl leading-8 text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5">
                GET STARTED
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AlertzHero;
