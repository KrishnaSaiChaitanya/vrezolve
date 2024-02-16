import React from "react";
import LoginNavbar from "../components/LoginNavbar";
import HomeHero from "../components/hero/HomeHero";
import Footer from "../components/Footer";
import LogoSlider from "../components/LogoSlider";
import ExpertConsultation from "../components/ExpertConsultation";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="flex flex-col py-12 bg-white">
          {/* <div className="flex gap-5 justify-between self-end mt-6 mr-16 max-w-full text-xl leading-8 text-center w-[870px] max-md:flex-wrap max-md:mr-2.5">
          <div className="flex gap-5 justify-between px-3 py-6 text-black max-md:flex-wrap max-md:max-w-full">
            <div>Home</div>
            <div>Solutions</div>
            <div>Partners</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
          <div className="justify-center px-9 py-1.5 my-auto font-medium text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5">
            GET IN TOUCH
          </div>
        </div> */}
          <div className="mx-6  max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div
              id="hero-section"
              className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
            >
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center py-12 text-xl max-md:mt-10 max-md:max-w-full">
                  <div className="mt-36 text-4xl font-bold  leading-[60px] max-md:mt-10 max-md:max-w-full">
                    Unleashing<span className="text-blue-700"> IT</span>{" "}
                    Excellence
                  </div>
                  <div className="mt-6 leading-8 text-black max-md:max-w-full">
                    Discover the pinnacle of IT mastery with our comprehensive
                    solutions. From robust fraud defense to seamless dispute
                    management and beyond, we empower your digital landscape for
                    unparalleled success.
                  </div>
                  <div className="justify-center self-start px-10 py-1.5 mt-6 font-medium text-center text-white whitespace-nowrap bg-orange-500 leading-[150%] rounded-[100px] max-md:px-5">
                    LEARN MORE
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b99a4dc60c86aa775d0b3eb5ecaca827d38327ed286762076fa3c2b1e9979a3b?apiKey=67296d98361248faadca04e106a4f278&"
                  className="grow w-full aspect-[0.85] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="self-center mt-32 text-xl font-bold leading-8 text-blue-700 whitespace-nowrap tracking-[4px] max-md:mt-10">
            OUR SOLUTIONS
          </div>
          <div className="self-center mt-9 text-4xl font-bold text-center text-blue-700 leading-[60px] max-md:max-w-full">
            Issuer and Merchant Solutions
          </div>
          <div className="self-center mt-6 text-xl leading-8 text-center text-black w-[775px] max-md:max-w-full">
            Experience unmatched efficiency with our tailored solutions designed
            for both issuers and merchants. Our comprehensive suite of tools
            empowers seamless transactions, ensuring a smooth and secure
            interaction between issuers and merchants.
          </div>
          <div className=" mt-[200px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div
              id="hero-section"
              className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
            >
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d624c6051665d185bc444e8872e63574855ac3740fa7f349e8c4d5edc9431a94?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d624c6051665d185bc444e8872e63574855ac3740fa7f349e8c4d5edc9431a94?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d624c6051665d185bc444e8872e63574855ac3740fa7f349e8c4d5edc9431a94?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d624c6051665d185bc444e8872e63574855ac3740fa7f349e8c4d5edc9431a94?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d624c6051665d185bc444e8872e63574855ac3740fa7f349e8c4d5edc9431a94?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d624c6051665d185bc444e8872e63574855ac3740fa7f349e8c4d5edc9431a94?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d624c6051665d185bc444e8872e63574855ac3740fa7f349e8c4d5edc9431a94?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d624c6051665d185bc444e8872e63574855ac3740fa7f349e8c4d5edc9431a94?apiKey=67296d98361248faadca04e106a4f278&"
                  className="grow w-full aspect-[0.77] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-start py-6 text-xl leading-8 text-black max-md:mt-10 max-md:max-w-full">
                  <div className="ml-3 text-4xl  font-semibold leading-5 whitespace-nowrap tracking-[5px] max-md:ml-2.5">
                    <span className="font-bold">alert</span>
                    <span className=" font-black text-orange-500">Z</span>
                  </div>
                  <div className="mt-9 leading-8 max-md:max-w-full">
                    Our solution facilitates instant communication of fraud and
                    chargeback information, empowering both parties to combat
                    fraud and swiftly resolve disputes. This not only enhances
                    collaboration but also ensures the preservation of the
                    issuer's chargeback rights throughout the process.
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-9">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="aspect-square w-[45px]"
                    />{" "}
                    <div className="flex-auto my-auto">Fraud Detection</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="aspect-square w-[45px]"
                    />{" "}
                    <div className="flex-auto my-auto">Fraud Prevention</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-11 aspect-[0.98]"
                    />{" "}
                    <div className="flex-auto self-start mt-5">
                      Dispute Resolution
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between self-stretch mt-6 max-md:flex-wrap max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-11 aspect-[0.98]"
                    />{" "}
                    <div className="flex-auto self-start mt-5 max-md:max-w-full">
                      Preservation of Chargeback Rights
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-11 aspect-[0.98]"
                    />{" "}
                    <div className="flex-auto my-auto">
                      Real - Time Fraud Alerts
                    </div>
                  </div>{" "}
                  <div className="justify-center px-10 py-1.5 mt-9 font-medium text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Why Alertz */}
          <div className="flex flex-col justify-center px-10 py-[120px] mt-44 w-full bg-[#f2f5fc] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="mt-40 mb-11 max-md:pr-5 max-md:my-10 max-md:max-w-full">
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
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a3ca12bfe5968508f08fb45088ad21e824e5169d0ca342044bde28a544db6bd5?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3ca12bfe5968508f08fb45088ad21e824e5169d0ca342044bde28a544db6bd5?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3ca12bfe5968508f08fb45088ad21e824e5169d0ca342044bde28a544db6bd5?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3ca12bfe5968508f08fb45088ad21e824e5169d0ca342044bde28a544db6bd5?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3ca12bfe5968508f08fb45088ad21e824e5169d0ca342044bde28a544db6bd5?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3ca12bfe5968508f08fb45088ad21e824e5169d0ca342044bde28a544db6bd5?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3ca12bfe5968508f08fb45088ad21e824e5169d0ca342044bde28a544db6bd5?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3ca12bfe5968508f08fb45088ad21e824e5169d0ca342044bde28a544db6bd5?apiKey=67296d98361248faadca04e106a4f278&"
                    className="w-full shadow-sm aspect-square max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="self-stretch w-full bg-[#0033cc] min-h-[2px]" />
          {/* Disputz */}
          <div className="py-11 mx-10 mt-28 max-md:pr-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div
              id="hero-section"
              className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
            >
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74d68dc564b9f1938ba465a0127c7cf3ec9f7aaef80e370dec4a3f78a5125d20?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d68dc564b9f1938ba465a0127c7cf3ec9f7aaef80e370dec4a3f78a5125d20?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d68dc564b9f1938ba465a0127c7cf3ec9f7aaef80e370dec4a3f78a5125d20?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d68dc564b9f1938ba465a0127c7cf3ec9f7aaef80e370dec4a3f78a5125d20?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d68dc564b9f1938ba465a0127c7cf3ec9f7aaef80e370dec4a3f78a5125d20?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d68dc564b9f1938ba465a0127c7cf3ec9f7aaef80e370dec4a3f78a5125d20?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d68dc564b9f1938ba465a0127c7cf3ec9f7aaef80e370dec4a3f78a5125d20?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d68dc564b9f1938ba465a0127c7cf3ec9f7aaef80e370dec4a3f78a5125d20?apiKey=67296d98361248faadca04e106a4f278&"
                  className="grow w-full aspect-[0.77] max-md:mt-10 max-md:max-w-full"
                />
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-start py-6 text-xl leading-8 text-black max-md:mt-10 max-md:max-w-full">
                  <div className="ml-3 text-4xl  font-semibold leading-5 whitespace-nowrap tracking-[5px] max-md:ml-2.5">
                    <span className="font-bold">dispute</span>
                    <span className=" font-black text-orange-500">Z</span>
                  </div>
                  <div className="mt-9 leading-8 max-md:max-w-full">
                    Our solution seamlessly integrates all aspects of chargeback
                    operations, ensuring a cohesive process from start to
                    finish. The result is a holistic and efficient system
                    designed to enhance every stage of the chargeback process,
                    providing a seamless experience for both issuers and
                    merchants.
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-9">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="aspect-square w-[45px]"
                    />{" "}
                    <div className="flex-auto my-auto">
                      Integrated chargeback operations
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="aspect-square w-[45px]"
                    />{" "}
                    <div className="flex-auto my-auto">
                      Customer communication
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-11 aspect-[0.98]"
                    />{" "}
                    <div className="flex-auto self-start mt-5">
                      Chargeback reasoning
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between self-stretch mt-6 max-md:flex-wrap max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-11 aspect-[0.98]"
                    />{" "}
                    <div className="flex-auto self-start mt-5 max-md:max-w-full">
                      Chargeback accounting
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-11 aspect-[0.98]"
                    />{" "}
                    <div className="flex-auto my-auto">Case management</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e938c6020f597be79130a9b34a6624c0b5083acbaca0bba35de0c62a51b4a6b?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-11 aspect-[0.98]"
                    />{" "}
                    <div className="flex-auto my-auto">Case closure</div>
                  </div>{" "}
                  <div className="justify-center px-10 py-1.5 mt-9 font-medium text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Why disptez */}
          <div className="flex z-10 flex-col bg-[#f2f5fc] justify-center mt-32 w-full  max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col px-10 py-[120px] w-full max-md:px-5 max-md:max-w-full">
              <div className="self-center  mb-12 text-4xl font-medium text-black leading-[54px] max-md:mt-10 max-md:max-w-full">
                Experience efficiency at every step
              </div>{" "}
              <div className="mt-14  mb-12 max-md:my-10 max-md:max-w-full">
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
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f868742dd283d787879cdc4362be0e7fd166bca78c26ff757f00766370900a?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f868742dd283d787879cdc4362be0e7fd166bca78c26ff757f00766370900a?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f868742dd283d787879cdc4362be0e7fd166bca78c26ff757f00766370900a?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f868742dd283d787879cdc4362be0e7fd166bca78c26ff757f00766370900a?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f868742dd283d787879cdc4362be0e7fd166bca78c26ff757f00766370900a?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f868742dd283d787879cdc4362be0e7fd166bca78c26ff757f00766370900a?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f868742dd283d787879cdc4362be0e7fd166bca78c26ff757f00766370900a?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f868742dd283d787879cdc4362be0e7fd166bca78c26ff757f00766370900a?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-full shadow-sm aspect-square max-md:mt-10 max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Expert consultation */}
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa106cc7aa2f7d248e0092ec034e546ae04627501ee3c49da85266d4c68d3e53?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa106cc7aa2f7d248e0092ec034e546ae04627501ee3c49da85266d4c68d3e53?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa106cc7aa2f7d248e0092ec034e546ae04627501ee3c49da85266d4c68d3e53?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa106cc7aa2f7d248e0092ec034e546ae04627501ee3c49da85266d4c68d3e53?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa106cc7aa2f7d248e0092ec034e546ae04627501ee3c49da85266d4c68d3e53?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa106cc7aa2f7d248e0092ec034e546ae04627501ee3c49da85266d4c68d3e53?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa106cc7aa2f7d248e0092ec034e546ae04627501ee3c49da85266d4c68d3e53?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa106cc7aa2f7d248e0092ec034e546ae04627501ee3c49da85266d4c68d3e53?apiKey=67296d98361248faadca04e106a4f278&"
            className="mx-10 mt-28 w-full aspect-[2] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full"
          />{" "}
          <div className="self-center mt-6 text-5xl font-bold text-center text-black leading-[80.16px] tracking-[2.4px] max-md:max-w-full max-md:text-4xl">
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
        <div className="flex flex-col justify-center py-12 mt-32 w-full text-center text-black bg-[#0033CC] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col py-12 pl-20 mt-20 mb-12 bg-white rounded-2xl max-md:pl-5 max-md:my-10 max-md:max-w-full">
            <div className="self-center  text-5xl font-bold leading-[80.16px] tracking-[2.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
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
      <div className="sm:flex flex-col md:hidden items-center py-6 mx-auto w-full bg-white max-w-[400px]">
        <div className="mt-12 p-3 text-2xl font-bold  text-center  whitespace-nowrap">
          Unleashing<span className="leading-7 text-[#0033cc]"> IT</span>{" "}
          Excellence
        </div>
        <img
          loading="lazy"
          srcSet="../images/home-hero.png"
          className="mt-16 mx-auto w-full aspect-[0.85] max-w-[306px]"
        />
        <div className="mt-6 px-3  text-base tracking-normal leading-6 text-center text-black">
          Discover the pinnacle of IT mastery with our comprehensive solutions.
          From robust fraud defense to seamless dispute management and beyond,
          we empower your digital landscape for unparalleled success.
        </div>
        <div className="justify-center px-3.5 mx-auto w-[200px] py-1.5 mt-12 text-base font-medium leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] tracking-[2px]">
          Learn more
        </div>
        {/* <div className="self-stretch mt-20 w-full bg-[#0033cc] min-h-[2px]" /> */}
        <div className="flex flex-col pb-12 self-stretch px-5 pt-12 pb-12 w-full text-base ">
          <div className="self-center mt-7 font-bold text-center text-[#0033cc] whitespace-nowrap leading-[60px] tracking-[3.2px]">
            OUR SOLUTIONS
          </div>
          <div className="self-center h-0.5 bg-[#0033cc] w-[148px]" />
          <div className="flex flex-col px-5 mt-8 w-full  text-black leading-[187.5%]">
            <div className="text-2xl font-bold  text-center">
              <span className="leading-7 ">Issuer & Merchant Solutions</span>
            </div>
            <div className="mt-11 leading-6 text-center">
              Experience unmatched efficiency with our tailored solutions
              designed for both issuers and merchants. Our comprehensive suite
              of tools empowers seamless transactions, ensuring a smooth and
              secure interaction between issuers and merchants.
            </div>
          </div>
        </div>
        {/* <div className="self-stretch  w-full bg-[#0033cc] min-h-[2px]" /> */}
        {/* <div className="z-10 self-stretch mt-14 w-full bg-[#0033cc] min-h-[2px]" /> */}
        <div className="flex flex-col self-stretch px-5 py-12 w-full ">
          <div className="self-center mt-10 text-2xl  font-semibold leading-5 text-center  whitespace-nowrap tracking-[5px]">
            <span className="font-bold">alert</span>
            <span className=" font-black text-[#ff6600]">Z</span>
          </div>
          <div className="flex flex-col px-6 mt-11 mb-8 w-full text-base  leading-8 text-black">
            <div className="leading-6 text-center">
              Our solution facilitates instant communication of fraud and
              chargeback information, empowering both parties to combat fraud
              and swiftly resolve disputes. This not only enhances collaboration
              but also ensures the preservation of the issuer's chargeback
              rights throughout the process.
            </div>{" "}
            {/* <ul className="">
              <li className="flex  self-start mt-10">
                
                <div className="flex-auto">Fraud Detection</div>
              </li>{" "}
              <li className="flex justify-between mt-8 whitespace-nowrap">
                
                <div className="grow">Fraud Prevention</div>
              </li>{" "}
              <li className="flex  justify-between mt-8 whitespace-nowrap">
                
                <div className="grow">Dispute Resolution</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
                
                <div className="grow">Preservation of Chargeback Rights</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
               
                <div className="grow">Real - Time Fraud Alerts</div>
              </li>{" "}
            </ul> */}
            <div className="flex flex-col justify-center items-center px-6 mt-10 w-full text-base leading-6 text-center text-black whitespace-nowrap max-w-[380px]">
              <div>Fraud Detection</div>
              <div className="mt-6">Fraud Prevention</div>
              <div className="mt-6">Dispute Resolution</div>
              <div className="self-stretch mt-6">Real - Time Fraud Alerts</div>
            </div>
            <div className="justify-center self-center px-3.5 py-1.5 mt-11 font-medium leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] tracking-[2px]">
              Learn More
            </div>{" "}
            <img
              loading="lazy"
              srcSet="../images/home/5.svg"
              className="self-center mt-10 w-full max-w-xs rounded-3xl shadow-sm aspect-[0.71]"
            />
          </div>
        </div>{" "}
        {/* <div className="self-stretch w-full bg-[#0033cc] min-h-[2px]" />{" "} */}
        <div className="bg-[#f2f5fc] py-20">
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
            loading="lazy"
            src="../images/home/8.svg"
            className="mt-9 w-full mx-auto rounded-3xl shadow-sm aspect-[0.78] max-w-[328px]"
          />{" "}
        </div>
        <div className="flex flex-col self-stretch px-5 py-12 w-full ">
          <div className="self-center mt-10 text-2xl  font-semibold leading-5 text-center  whitespace-nowrap tracking-[5px]">
            <span className="font-bold">dispute</span>
            <span className=" font-black text-[#ff6600]">Z</span>
          </div>
          <div className="flex flex-col px-6 mt-11 mb-8 w-full text-base  leading-8 text-black">
            <div className="leading-6 text-center">
              Our solution seamlessly integrates all aspects of chargeback
              operations, ensuring a cohesive process from start to finish. The
              result is a holistic and efficient system designed to enhance
              every stage of the chargeback process, providing a seamless
              experience for both issuers and merchants.
            </div>{" "}
            {/* <ul className="">
              <li className="flex  self-start mt-10">
                <div className="flex-auto">
                  Integrated Chargeback Operations
                </div>
              </li>{" "}
              <li className="flex justify-between mt-8 whitespace-nowrap">
                <div className="grow">Customer Communication</div>
              </li>{" "}
              <li className="flex  justify-between mt-8 whitespace-nowrap">
                <div className="grow">Chargeback Reasoning</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
                <div className="grow">Chargeback Accounting</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
                <div className="grow">Case Management</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
                <div className="grow">Case Closure</div>
              </li>{" "}
            </ul> */}
            <div className="flex flex-col justify-center items-center px-6 mt-10 w-full text-base leading-6 text-center text-black whitespace-nowrap max-w-[380px]">
              <div>Integrated Chargeback Operations</div>
              <div className="mt-6">Customer Communication</div>
              <div className="mt-6">Chargeback Reasoning</div>
              <div className="mt-6">Chargeback Accounting</div>
              <div className="mt-6">Case Management</div>
              <div className="self-stretch mt-6">Case Closure</div>
            </div>
            <div className="justify-center self-center px-3.5 py-1.5 mt-11 font-medium leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] tracking-[2px]">
              Learn More
            </div>{" "}
            <img
              loading="lazy"
              srcSet="../images/home/6.svg"
              className="self-center mt-10 w-full max-w-xs rounded-3xl shadow-sm aspect-[0.71]"
            />
          </div>
        </div>{" "}
        <div className="bg-[#f2f5fc] py-20">
          <div className="text-base font-bold text-center text-[#0033cc] whitespace-nowrap leading-[60px] tracking-[3.2px]">
            WHY DISPUTEZ
          </div>
          {/* <div className="h-0.5 mx-auto bg-[#0033cc] w-[148px]" /> */}
          <div className="mt-9 text-2xl font-medium leading-8 text-center text-black tracking-[2px]">
            Experience efficiency at every step
          </div>
          <div className="mt-11 mx-3 text-base  leading-6 text-center  tracking-[2px]">
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
            loading="lazy"
            srcSet="../images/home/9.svg"
            className="mt-9 w-full mx-auto rounded-3xl  aspect-square max-w-[334px]"
          />
        </div>
        <div className="self-stretch  w-full bg-[#0033cc] min-h-[2px]" />{" "}
        <div className="mt-20 text-2xl font-bold  text-center text-black">
          Expert Consultation
        </div>{" "}
        <div className="mt-3 mx-auto bg-[#0033cc] h-[px] w-[200px]" />{" "}
        <div className="mt-11 text-base px-3  leading-6 text-center text-black">
          <span className="font-extrabold text-[#0033cc]">vre</span>
          <span className="text-[#ff6600]">z</span>
          <span className="text-[#0033cc]">olve</span> offers expert
          consultation and customized solutions to help businesses make the most
          of their technology investments. Our experienced staff is on hand to
          ensure you have the right tools and processes in place to take your
          business to the next level.
        </div>{" "}
        <div className="justify-center w-[200px] mx-auto px-3.5 py-1.5 mt-12 text-base font-medium leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] tracking-[2px]">
          Talk to an Expert
        </div>{" "}
        <img
          loading="lazy"
          src="../images/home/3.svg"
          className="w-full aspect-square max-w-[350px]"
        />{" "}
        <div className="flex flex-col justify-center self-stretch px-5 py-12 w-full text-center text-black bg-[#0033cc]">
          <div className="flex flex-col items-center py-12 mt-8 mb-8 bg-white rounded-3xl">
            <div className="text-2xl font-bold ">Corporate Partners</div>{" "}
            <div className="mt-5 h-0.5 bg-[#0033cc] w-[200px]" />{" "}
            <div className="flex flex-col self-stretch pr-5 pl-2.5 mt-10 mb-9 text-base  leading-6">
              <div>
                Our corporate partners are integral to our journey, fostering
                trust and innovation. Through collaboration, we navigate
                challenges, seize opportunities, and achieve mutual growth.
                Together, we excel in delivering top-notch solutions and
                creating a thriving network.
              </div>{" "}
              <LogoSlider />
            </div>
          </div>
        </div>{" "}
        <ContactSection />
      </div>
    </>
  );
}

export default Home;
