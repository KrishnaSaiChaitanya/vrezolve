import React from "react";
import LogoSlider from "./LogoSlider";
import ContactSection from "./ContactSection";

function HomeMobile() {
  return (
    <div>
      <div className="flex flex-col items-center pt-5 pb-12 mx-auto w-full bg-white max-w-[380px]">
        <div className="flex flex-col justify-center px-1.5 pt-1.5 mt-20 w-full text-base text-center max-w-[350px]">
          <div className="text-2xl font-bold leading-9  whitespace-nowrap">
            Unleashing<span className="text-blue-700"> IT</span> Excellence
          </div>
          <img
            alt="vrezolve"
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8246117a98344c15bb29dda1bfe13501195b0129a2fdfa54cd93f4a410a361b5?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8246117a98344c15bb29dda1bfe13501195b0129a2fdfa54cd93f4a410a361b5?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8246117a98344c15bb29dda1bfe13501195b0129a2fdfa54cd93f4a410a361b5?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8246117a98344c15bb29dda1bfe13501195b0129a2fdfa54cd93f4a410a361b5?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8246117a98344c15bb29dda1bfe13501195b0129a2fdfa54cd93f4a410a361b5?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8246117a98344c15bb29dda1bfe13501195b0129a2fdfa54cd93f4a410a361b5?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8246117a98344c15bb29dda1bfe13501195b0129a2fdfa54cd93f4a410a361b5?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8246117a98344c15bb29dda1bfe13501195b0129a2fdfa54cd93f4a410a361b5?apiKey=67296d98361248faadca04e106a4f278&"
            className="self-center mt-8 w-full aspect-[0.85] max-w-[306px]"
          />
          <div className="mt-9 leading-6 text-black">
            Discover the pinnacle of IT mastery with our comprehensive
            solutions. From robust fraud defense to seamless dispute management
            and beyond, we empower your digital landscape for unparalleled
            success.
          </div>
          <div className="justify-center self-center px-3.5 py-2 mt-9 font-medium text-white whitespace-nowrap bg-orange-500 leading-[150%] rounded-[100px]">
            LEARN MORE
          </div>
        </div>
        <div className="flex flex-col px-5 py-3 mt-20 w-full text-base  leading-6 text-center text-black max-w-[350px]">
          <div className="self-center font-bold text-blue-700 whitespace-nowrap tracking-[3.2px]">
            OUR SOLUTIONS
          </div>
          <div className="mt-8 text-2xl font-bold whitespace-nowrap">
            Issuer & Merchant Solutions
          </div>
          <div className="mt-9 text-base  text-center text-black leading-6">
            Experience unmatched efficiency with our tailored solutions designed
            for both issuers and merchants. Our comprehensive suite of tools
            empowers seamless transactions, ensuring a smooth and secure
            interaction between issuers and merchants.
          </div>
        </div>
        <div className="mt-24  text-2xl  font-semibold leading-9 text-center ">
          <span className="font-bold">alert</span>
          <span className=" font-black text-orange-500">Z</span>
        </div>
        <img
          alt="vrezolve"
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14573bcb5bbf9ad4256fd9ae1d341d5e2ec07a59f2b45a09af4fb73bd5526d96?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14573bcb5bbf9ad4256fd9ae1d341d5e2ec07a59f2b45a09af4fb73bd5526d96?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14573bcb5bbf9ad4256fd9ae1d341d5e2ec07a59f2b45a09af4fb73bd5526d96?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14573bcb5bbf9ad4256fd9ae1d341d5e2ec07a59f2b45a09af4fb73bd5526d96?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14573bcb5bbf9ad4256fd9ae1d341d5e2ec07a59f2b45a09af4fb73bd5526d96?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14573bcb5bbf9ad4256fd9ae1d341d5e2ec07a59f2b45a09af4fb73bd5526d96?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14573bcb5bbf9ad4256fd9ae1d341d5e2ec07a59f2b45a09af4fb73bd5526d96?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14573bcb5bbf9ad4256fd9ae1d341d5e2ec07a59f2b45a09af4fb73bd5526d96?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-8 w-full aspect-square max-w-[350px]"
        />
        <div className="mt-10 px-2 text-base leading-6 text-center text-black">
          Our solution facilitates instant communication of fraud and chargeback
          information, empowering both parties to combat fraud and swiftly
          resolve disputes. This not only enhances collaboration but also
          ensures the preservation of the issuer's chargeback rights throughout
          the process.
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-10 w-full text-base leading-6 text-black whitespace-nowrap max-w-[298px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec99c612ec500db945fa7470496aec07df0df2d16f9b867c6a7fe8711028c2e4?apiKey=67296d98361248faadca04e106a4f278&"
            className="w-6 aspect-square"
          />{" "}
          <div className="grow self-start mt-1.5">
            Fraud detection and prevention
          </div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-6 w-full text-base leading-6 text-black whitespace-nowrap max-w-[298px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec99c612ec500db945fa7470496aec07df0df2d16f9b867c6a7fe8711028c2e4?apiKey=67296d98361248faadca04e106a4f278&"
            className="w-6 aspect-square"
          />{" "}
          <div className="grow self-start mt-1.5">Dispute resolution</div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-6 w-full text-base leading-6 text-black whitespace-nowrap max-w-[298px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec99c612ec500db945fa7470496aec07df0df2d16f9b867c6a7fe8711028c2e4?apiKey=67296d98361248faadca04e106a4f278&"
            className="w-6 aspect-square"
          />{" "}
          <div className="grow my-auto">Real-time fraud alerts</div>
        </div>{" "}
        <div className="justify-center px-3.5 py-2 mt-6 text-base font-medium leading-6 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px]">
          LEARN MORE
        </div>
        <div className="bg-[#f2f5fc] py-10 mt-10">
          <div className=" text-base font-bold text-center  text-[#0033cc] whitespace-nowrap leading-[60px] tracking-[3.2px]">
            WHY ALERTZ
          </div>{" "}
          <div className="mt-9 text-2xl font-medium leading-8 text-center text-black tracking-[2px]">
            Defend against fraud & chargebacks
          </div>{" "}
          <div className="mt-16 text-base mx-3   leading-6 text-center ">
            {" "}
            Its crucial for merchants to stay informed and ahead of the curve.
            We have you covered with real time alerts, so you stay informed and
            ahead of the curve. Resolve disputes quickly and efficiently{" "}
            <span className="font-bold tracking-[2px]">alert</span>{" "}
            <span className=" font-semibold text-[#ff6600] tracking-[2px]">
              Z
            </span>
          </div>{" "}
          <div className="mt-14 text-2xl font-medium leading-8 text-center text-[#0033cc] tracking-[2px]">
            Real-time fraud alerts for smart merchants
          </div>{" "}
          <img
            alt="vrezolve"
            loading="lazy"
            src="../images/home/8.svg"
            className="mt-9 w-full mx-auto rounded-3xl shadow-sm aspect-[0.78] max-w-[328px]"
          />{" "}
        </div>
        <div className="self-stretch w-full bg-blue-700 min-h-[2px]" />{" "}
        <div className="mt-20 text-2xl  font-semibold leading-9 text-center  whitespace-nowrap">
          <span className="font-bold">dispute</span>
          <span className=" font-black text-orange-500">Z</span>
        </div>{" "}
        <img
          alt="vrezolve"
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/75738e68d8a4f506f6cc57779beb223fbdc43ffc336fba27a2dc69a4ef0b45c5?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/75738e68d8a4f506f6cc57779beb223fbdc43ffc336fba27a2dc69a4ef0b45c5?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75738e68d8a4f506f6cc57779beb223fbdc43ffc336fba27a2dc69a4ef0b45c5?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/75738e68d8a4f506f6cc57779beb223fbdc43ffc336fba27a2dc69a4ef0b45c5?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/75738e68d8a4f506f6cc57779beb223fbdc43ffc336fba27a2dc69a4ef0b45c5?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75738e68d8a4f506f6cc57779beb223fbdc43ffc336fba27a2dc69a4ef0b45c5?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/75738e68d8a4f506f6cc57779beb223fbdc43ffc336fba27a2dc69a4ef0b45c5?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/75738e68d8a4f506f6cc57779beb223fbdc43ffc336fba27a2dc69a4ef0b45c5?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-6 w-full aspect-square max-w-[350px]"
        />{" "}
        <div className="mt-6 px-2 text-base leading-6 text-center text-black">
          Our solution seamlessly integrates all aspects of chargeback
          operations, ensuring a cohesive process from start to finish. The
          result is a holistic and efficient system designed to enhance every
          stage of the chargeback process, providing a seamless experience for
          both issuers and merchants.
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-6 w-full text-base leading-6 text-black whitespace-nowrap max-w-[298px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec99c612ec500db945fa7470496aec07df0df2d16f9b867c6a7fe8711028c2e4?apiKey=67296d98361248faadca04e106a4f278&"
            className="w-6 aspect-square"
          />{" "}
          <div className="grow self-start mt-1.5">
            Integrated Chargeback Operations
          </div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-6 w-full text-base leading-6 text-black whitespace-nowrap max-w-[298px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec99c612ec500db945fa7470496aec07df0df2d16f9b867c6a7fe8711028c2e4?apiKey=67296d98361248faadca04e106a4f278&"
            className="w-6 aspect-square"
          />{" "}
          <div className="grow self-start mt-1.5">Customer Communication</div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-6 w-full text-base leading-6 text-black whitespace-nowrap max-w-[298px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec99c612ec500db945fa7470496aec07df0df2d16f9b867c6a7fe8711028c2e4?apiKey=67296d98361248faadca04e106a4f278&"
            className="w-6 aspect-square"
          />{" "}
          <div className="grow my-auto">Chargeback Reasoning</div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-6 w-full text-base leading-6 text-black whitespace-nowrap max-w-[298px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec99c612ec500db945fa7470496aec07df0df2d16f9b867c6a7fe8711028c2e4?apiKey=67296d98361248faadca04e106a4f278&"
            className="w-6 aspect-square"
          />{" "}
          <div className="grow my-auto">Chargeback Accounting</div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-6 w-full text-base leading-6 text-black whitespace-nowrap max-w-[298px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec99c612ec500db945fa7470496aec07df0df2d16f9b867c6a7fe8711028c2e4?apiKey=67296d98361248faadca04e106a4f278&"
            className="w-6 aspect-square"
          />{" "}
          <div className="grow self-start mt-1.5">Case Management</div>
        </div>{" "}
        <div className="flex gap-5 justify-between pr-5 mt-6 w-full text-base leading-6 text-black whitespace-nowrap max-w-[298px]">
          <img
            alt="vrezolve"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec99c612ec500db945fa7470496aec07df0df2d16f9b867c6a7fe8711028c2e4?apiKey=67296d98361248faadca04e106a4f278&"
            className="w-6 aspect-square"
          />{" "}
          <div className="grow self-start mt-1.5">Case Closure</div>
        </div>{" "}
        <div className="justify-center px-3.5 py-2 mt-6 text-base font-medium leading-6 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px]">
          LEARN MORE
        </div>{" "}
        <div className="bg-[#f2f5fc] py-10 my-10">
          <div className="text-base font-bold text-center text-[#0033cc] whitespace-nowrap leading-[60px] tracking-[3.2px]">
            WHY DISPUTEZ
          </div>
          {/* <div className="h-0.5 mx-auto bg-[#0033cc] w-[148px]" /> */}
          <div className="mt-9 text-2xl font-medium leading-8 text-center text-black tracking-[2px]">
            Experience efficiency at every step
          </div>
          <div className="mt-11 mx-3  text-base  text-center text-black leading-6 text-center">
            <span className="">
              Our tailored solutions for issuers streamline the process,
              providing efficient and strategic tools to navigate and resolve
              disputes effortlessly. Stay in control, enhance customer
              satisfaction, and maintain the integrity of your financial
              transactions with
            </span>{" "}
            <span className="font-bold">dispute</span>
            <span className=" font-black text-[#ff6600]">Z</span>
          </div>
          <div className="mt-12 text-2xl font-medium leading-8 text-center text-[#0033cc] tracking-[2px]">
            Streamlined dispute management solutions for issuers
          </div>
          <img
            alt="vrezolve"
            loading="lazy"
            srcSet="../images/home/9.svg"
            className="mt-9 w-full mx-auto rounded-3xl  aspect-square max-w-[334px]"
          />
        </div>
        <div className="mt-20 text-2xl font-bold leading-9 text-center text-black whitespace-nowrap">
          Expert Consultation
        </div>{" "}
        <img
          alt="vrezolve"
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f1b31ec5e14810a90e6210904dc3ff2ca7bd605dcfe223fe60c312b2e4433d?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8f1b31ec5e14810a90e6210904dc3ff2ca7bd605dcfe223fe60c312b2e4433d?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8f1b31ec5e14810a90e6210904dc3ff2ca7bd605dcfe223fe60c312b2e4433d?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8f1b31ec5e14810a90e6210904dc3ff2ca7bd605dcfe223fe60c312b2e4433d?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8f1b31ec5e14810a90e6210904dc3ff2ca7bd605dcfe223fe60c312b2e4433d?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8f1b31ec5e14810a90e6210904dc3ff2ca7bd605dcfe223fe60c312b2e4433d?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8f1b31ec5e14810a90e6210904dc3ff2ca7bd605dcfe223fe60c312b2e4433d?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8f1b31ec5e14810a90e6210904dc3ff2ca7bd605dcfe223fe60c312b2e4433d?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-6 w-full aspect-square max-w-[350px]"
        />{" "}
        <div className="mt-6 px-2 text-base leading-6 text-center text-black">
          <span className="font-extrabold text-blue-700">vre</span>
          <span className="text-orange-500">z</span>
          <span className="text-blue-700">olve</span> offers expert consultation
          and customized solutions to help businesses make the most of their
          technology investments. Our experienced staff is on hand to ensure you
          have the right tools and processes in place to take your business to
          the next level.
        </div>{" "}
        <div className="justify-center px-3.5 py-2 mt-6 text-base font-medium leading-6 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px]">
          TALK TO AN EXPERT
        </div>{" "}
        <div className="flex flex-col justify-center self-stretch px-5 py-10 mt-20 w-full text-center text-black bg-blue-700">
          <div className="flex flex-col items-center py-12 bg-white rounded-3xl">
            <div className="self-stretch mt-8 text-2xl font-bold leading-9 whitespace-nowrap">
              Corporate Partners
            </div>{" "}
            <div className="mt-6 text-base leading-6">
              Our corporate partners are integral to our journey, fostering
              trust and innovation. Together, we excel in delivering top-notch
              solutions and creating a thriving network.
            </div>{" "}
            <div className="self-center  w-[275px]">
              <LogoSlider />
            </div>
          </div>
        </div>{" "}
        <ContactSection />
      </div>
    </div>
  );
}

export default HomeMobile;
