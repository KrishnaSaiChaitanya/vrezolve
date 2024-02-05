import * as React from "react";

function EnhancedSecurityComponent() {
  return (
    <div className="flex flex-col items-center px-5">
      <header className="text-5xl font-bold text-center text-blue-700 leading-[80px] tracking-[2.4px] max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
        Trust in a <span className="text-blue-700">secure</span> tomorrow,
        today.
      </header>
      <div className="mt-16 text-xl tracking-wider leading-8 text-center text-black w-[775px] max-md:mt-10 max-md:max-w-full">
        Initiate your journey to enhanced security by getting started with
        alerts in just a few simple steps. Start now to experience a seamless
        and protected interaction with our platform.
      </div>
      <button
        className="justify-center items-stretch px-12 py-1.5 mt-9 text-xl font-medium tracking-wider leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5"
        type="button"
      >
        Get Started
      </button>
      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[46%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e772028dc6c3c80d605e8f4633546a917cc14410b17db915f539137fa9d5e04?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e772028dc6c3c80d605e8f4633546a917cc14410b17db915f539137fa9d5e04?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e772028dc6c3c80d605e8f4633546a917cc14410b17db915f539137fa9d5e04?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e772028dc6c3c80d605e8f4633546a917cc14410b17db915f539137fa9d5e04?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e772028dc6c3c80d605e8f4633546a917cc14410b17db915f539137fa9d5e04?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e772028dc6c3c80d605e8f4633546a917cc14410b17db915f539137fa9d5e04?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e772028dc6c3c80d605e8f4633546a917cc14410b17db915f539137fa9d5e04?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e772028dc6c3c80d605e8f4633546a917cc14410b17db915f539137fa9d5e04?apiKey=67296d98361248faadca04e106a4f278&"
              className="object-contain object-center self-stretch my-auto w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full"
              alt="Image 1"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-stretch max-md:mt-2 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:max-w-full">
                <div className="justify-center items-stretch self-end px-5 py-2.5 mt-6 text-4xl font-bold tracking-widest text-center text-white rounded-full aspect-square leading-[79.92px]">
                  <span className="opacity-0" aria-hidden="true">
                    1
                  </span>
                  <span className="sr-only">Step 1</span>
                </div>
                <h1 className="grow self-start text-4xl font-bold text-blue-700 leading-[60px] tracking-[5px] max-md:max-w-full">
                  Create an Account
                </h1>
              </div>
              <div className="flex gap-5 justify-between items-stretch mt-8 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f83f28b5831485691b9eb6912c673b2c2bcfaf74fb185e8ffd8202e433643390?apiKey=67296d98361248faadca04e106a4f278&"
                  className="object-contain object-center shrink-0 self-end mt-11 w-0.5 aspect-[0.02] stroke-[2px] stroke-blue-700 max-md:mt-10"
                  alt="Image 2"
                />
                <p className="flex-auto text-xl tracking-wider leading-8 text-black max-md:max-w-full">
                  Joining is Easy: <br /> Click 'Sign Up' <br /> Fill in your
                  details <br /> Verify and Create Your Account <br /> <br />{" "}
                  Welcome to a Seamless Experience!
                </p>
              </div>
              <div className="flex gap-5 justify-between items-stretch mt-9 max-md:flex-wrap max-md:max-w-full">
                <div className="justify-center items-stretch self-start px-3.5 py-2.5 mt-4 text-4xl font-bold tracking-widest text-center text-white rounded-full aspect-square leading-[79.92px]">
                  <span className="opacity-0" aria-hidden="true">
                    2
                  </span>
                  <span className="sr-only">Step 2</span>
                </div>
                <h1 className="grow text-4xl font-bold text-blue-700 leading-[60px] tracking-[5px] max-md:max-w-full">
                  Register For Alerts
                </h1>
              </div>
              <div className="flex gap-5 justify-between items-stretch mt-10 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f83f28b5831485691b9eb6912c673b2c2bcfaf74fb185e8ffd8202e433643390?apiKey=67296d98361248faadca04e106a4f278&"
                  className="object-contain object-center shrink-0 my-auto w-0.5 aspect-[0.02] stroke-[2px] stroke-blue-700"
                  alt="Image 3"
                />
                <p className="flex-auto text-xl tracking-wider leading-8 text-black max-md:max-w-full">
                  Register for Alerts in 3 Easy Steps: <br /> Log in to Your
                  Account <br /> Subscribe for Alerts <br /> Customize and Save
                  Your Preferences <br /> <br /> Stay Informed, Stay in Control!
                </p>
              </div>
              <div className="flex gap-5 justify-between items-stretch mt-5 max-md:flex-wrap max-md:max-w-full">
                <div className="justify-center items-stretch px-3.5 py-2.5 my-auto text-4xl font-bold tracking-widest text-center text-white rounded-full aspect-square leading-[79.92px]">
                  <span className="opacity-0" aria-hidden="true">
                    3
                  </span>
                  <span className="sr-only">Step 3</span>
                </div>
                <h1 className="grow text-4xl font-bold text-blue-700 leading-[60px] tracking-[5px] max-md:max-w-full">
                  Get Real-time Alerts
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EnhancedSecurityComponent;
