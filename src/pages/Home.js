import React from "react";

import HomeHero from "../components/hero/HomeHero";

import LogoSlider from "../components/LogoSlider";

import ContactSection from "../components/ContactSection";
import HomeMobile from "../components/HomeMobile";

function Home() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="flex flex-col py-[40px] bg-white">
          <HomeHero />
          <div className="self-center mt-[40px] text-xl font-bold leading-8 text-blue-700 whitespace-nowrap tracking-[4px] max-md:mt-10">
            OUR SOLUTIONS
          </div>
          <div className="self-center mt-9 text-4xl font-bold text-center text-blue-700 leading-[60px] max-md:max-w-full">
            Issuer and Merchant Solutions
          </div>
          <p className="self-center mt-6 text-xl  text-center text-black w-[775px] max-md:max-w-full">
            Experience unmatched efficiency with our tailored solutions designed
            for both issuers and merchants. Our comprehensive suite of tools
            empowers seamless transactions, ensuring a smooth and secure
            interaction between issuers and merchants.
          </p>
          {/* Alertz */}
          <div className=" mt-[40px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div
              id="hero-section"
              className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
            >
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  alt="vrezolve"
                  loading="lazy"
                  srcSet="../images/home/5.svg"
                  className="w-[500px] m-auto"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center py-12 text-xl font-medium text-black leading-[60px] max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl  font-semibold leading-5 tracking-[5px] max-md:max-w-full">
                    <span className="font-bold">alert</span>
                    <span className="italic font-black text-orange-500">Z</span>
                  </div>
                  <div className="mt-6 leading-8 max-md:max-w-full">
                    Our solution facilitates instant communication of fraud and
                    chargeback information, empowering both parties to combat
                    fraud and swiftly resolve disputes. This not only enhances
                    collaboration but also ensures the preservation of the
                    issuer's chargeback rights throughout the process.
                  </div>
                  <div className="mt-6 max-md:max-w-full">Fraud Detection</div>
                  <div className="max-w-full bg-black h-[1px] w-[380px]" />
                  <div className="max-md:max-w-full">Fraud Prevention</div>
                  <div className="max-w-full bg-black h-[1px] w-[380px]" />
                  <div className="max-md:max-w-full">Dispute Resolution</div>
                  <div className="max-w-full bg-black h-[1px] w-[380px]" />
                  <div className="max-md:max-w-full">
                    Preservation of Chargeback Rights
                  </div>
                  <div className="max-w-full bg-black h-[1px] w-[380px]" />
                  <div className="max-md:max-w-full">
                    Real - Time Fraud Alerts
                  </div>
                  <div className="justify-center self-start px-7 py-1.5 mt-6 text-base leading-8 text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Why Alertz */}
          <div className="flex flex-col justify-center px-[40px] py-[40px] mt-[40px] w-full bg-[#f2f5fc] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="  max-md:pr-5 max-md:my-10 max-md:max-w-full">
              <div
                id="hero-section"
                className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
              >
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center py-12 pr-6 text-xl  max-md:mt-10 max-md:max-w-full">
                    <div className=" text-blue-700 self-start mt-16 ml-3 font-bold whitespace-nowrap leading-[150%] tracking-[4px] max-md:mt-10 max-md:ml-2.5">
                      WHY ALERTZ
                    </div>{" "}
                    <div className="mt-14  leading-8  max-md:mt-10 max-md:max-w-full">
                      <span className="">
                        {" "}
                        Its crucial for merchants to stay informed and ahead of
                        the curve. We have you covered with real time alerts, so
                        you stay informed and ahead of the curve. Resolve
                        disputes quickly and efficiently
                      </span>{" "}
                      <span className="font-bold">alert</span>{" "}
                      <span className=" font-semibold text-orange-500">Z</span>
                    </div>{" "}
                    <div className="mt-9 text-blue-700 text-4xl font-medium leading-[54px] max-md:max-w-full">
                      Real-time Fraud Alerts for Smart Merchants
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    alt="vrezolve"
                    loading="lazy"
                    srcSet="../images/home/8.svg"
                    className="w-[500px] m-auto"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="self-stretch w-full bg-[#0033cc] min-h-[2px]" />
          {/* Disputz */}
          <div className="py-[40px] mx-10  max-md:pr-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div
              id="hero-section"
              className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
            >
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  alt="vrezolve"
                  loading="lazy"
                  srcSet="../images/home/6.svg"
                  className="w-[500px] m-auto"
                />
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 pt-6 text-xl font-medium text-black leading-[60px] max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl  font-semibold leading-5  tracking-[5px] max-md:max-w-full">
                    <span className="font-bold">dispute</span>
                    <span className="italic font-black text-orange-500">Z</span>
                  </div>
                  <div className="mt-9 leading-8 max-md:max-w-full">
                    Our solution seamlessly integrates all aspects of chargeback
                    operations, ensuring a cohesive process from start to
                    finish. The result is a holistic and efficient system
                    designed to enhance every stage of the chargeback process,
                    providing a seamless experience for both issuers and
                    merchants.
                  </div>
                  <div className="mt-9 max-md:max-w-full">
                    Integrated Chargeback Operations
                  </div>
                  <div className="max-w-full bg-black h-[1px] w-[380px]" />
                  <div className="max-md:max-w-full">
                    Customer Communication
                  </div>
                  <div className="max-w-full bg-black h-[1px] w-[380px]" />
                  <div className="max-md:max-w-full">Chargeback Reasoning</div>
                  <div className="max-w-full bg-black h-[1px] w-[380px]" />
                  <div className="max-md:max-w-full">Chargeback Accounting</div>
                  <div className="max-w-full bg-black h-[1px] w-[380px]" />
                  <div className="max-md:max-w-full">
                    Case Management and Case closure
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Why disptez */}
          <div className="flex z-10 flex-col bg-[#f2f5fc] justify-center  w-full  max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col px-10 py-[40px] w-full max-md:px-5 max-md:max-w-full">
              {/* <div className="self-center  mb-12 text-4xl font-medium text-black leading-[54px] max-md:mt-10 max-md:max-w-full">
                Experience efficiency at every step
              </div>{" "} */}
              <div className="mt-3  mb-3 max-md:my-10 max-md:max-w-full">
                <div
                  id="hero-section"
                  className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
                >
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center py-12 pr-6 text-xl  max-md:mt-10 max-md:max-w-full">
                      <div className=" text-blue-700 self-start mt-6 ml-3 font-bold whitespace-nowrap leading-[150%] tracking-[4px] max-md:ml-2.5">
                        WHY DISPUTEZ
                      </div>{" "}
                      <div className="mt-14  leading-8  max-md:mt-10 max-md:max-w-full">
                        <span className="">
                          Our tailored solutions for issuers streamline the
                          process, providing efficient and strategic tools to
                          navigate and resolve disputes effortlessly. Stay in
                          control, enhance customer satisfaction, and maintain
                          the integrity of your financial transactions with
                        </span>{" "}
                        <span className="font-bold">dispute</span>
                        <span className=" font-black text-orange-500">Z</span>
                      </div>{" "}
                      <div className="text-blue-700 mt-9 text-4xl font-medium leading-[54px] max-md:max-w-full">
                        Streamlined Dispute Management Solutions for Issuers
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      alt="vrezolve"
                      loading="lazy"
                      srcSet="../images/home/9.svg"
                      className="w-[500px] m-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Expert consultation */}
          <img
            alt="vrezolve"
            loading="lazy"
            srcSet="../images/home/3.svg"
            className="mx-10 mt-[40px] aspect-[2] max-md:mt-10 max-md:mr-2.5 "
          />{" "}
          <div className="self-center mt-6 text-4xl font-bold text-center text-black leading-[80px] max-md:max-w-full max-md:text-4xl">
            Expert Consultation
          </div>{" "}
          <div className="self-center mt-11 text-xl leading-8 text-center  w-[775px] max-md:mt-10 max-md:max-w-full">
            {" "}
            <span className="font-extrabold text-blue-700">vre</span>
            <span className="text-orange-500">z</span>
            <span className="text-blue-700">olve</span> offers expert
            consultation and customized solutions to help businesses make the
            most of their technology investments. Our experienced staff is on
            hand to ensure you have the right tools and processes in place to
            take your business to the next level.
          </div>{" "}
          <div className="justify-center self-center px-7 py-1.5 mt-10 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5">
            TALK TO AN EXPERT
          </div>{" "}
        </div>
        <div className="flex flex-col justify-center py-[40px]  w-full text-center text-black bg-[#0033CC] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col py-[40px] pl-20   bg-white rounded-2xl max-md:pl-5 max-md:my-10 max-md:max-w-full">
            <div className="self-center  text-4xl font-bold leading-[80.16px]  max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Corporate Partners
            </div>{" "}
            {/* <div className="mt-5 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[400px]" /> */}
            <div className="self-end mt-12 text-xl mx-auto  leading-8 w-[775px] max-md:mt-10 max-md:max-w-full">
              Our corporate partners are integral to our journey, fostering
              trust and innovation. Through collaboration, we navigate
              challenges, seize opportunities, and achieve mutual growth.
              Together, we excel in delivering top-notch solutions and creating
              a thriving network.
            </div>{" "}
            <div className="self-center  w-[975px]">
              <LogoSlider />
            </div>
          </div>
        </div>{" "}
        <ContactSection />
      </div>
      <div className="sm:flex flex-col md:hidden ">
        <HomeMobile />
      </div>
    </>
  );
}

export default Home;
