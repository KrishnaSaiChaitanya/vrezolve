import React from "react";
import LoginNavbar from "./LoginNavbar";
import HomeHero from "./hero/HomeHero";
import Footer from "./Footer";
import LogoSlider from "./LogoSlider";
import ExpertConsultation from "./ExpertConsultation";
import ContactSection from "./ContactSection";

function Home() {
  return (
    <>
      <div className="animation_container md:flex sm:hidden">
        <div className="flex flex-col py-12 bg-white">
          <HomeHero />
          <div className="flex flex-col items-center px-10 py-12 w-full bg-[#f2f5fc] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center mt-20 max-w-full text-xl text-black w-[858px] max-md:mt-10">
              <div className="self-center text-[#0033cc] font-bold whitespace-nowrap leading-[60px] tracking-[4px] anm_mod left delay">
                OUR SOLUTIONS
              </div>
              <div className="mt-3 h-[3px] max-w-full mx-auto bg-[#0033cc] w-[179px]" />
              <header className="mt-20 text-5xl font-bold text-center text-black leading-[70px] tracking-[2.4px] w-[951px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[64px]">
                <span className="text-blue-700">
                  Issuer and Merchant Solutions
                </span>{" "}
                : Empowering Seamless Transactions
              </header>

              <p className="mt-16 text-xl tracking-wider leading-8 text-center text-black w-[775px] max-md:mt-10 max-md:max-w-full">
                Experience unmatched efficiency with our tailored solutions
                designed for both issuers and merchants. Our comprehensive suite
                of tools empowers seamless transactions, ensuring a smooth and
                secure interaction between issuers and merchants.
              </p>
              <div className="mt-40 text-4xl  font-semibold leading-5 whitespace-nowrap tracking-[5px] max-md:mt-10 anm_mod left delay">
                <span className="font-bold">dispute</span>
                <span className=" font-black text-orange-500">Z</span>
              </div>
              <div className="mt-10 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[160px]" />
              <div className="mt-16 tracking-wider leading-8 text-center max-md:mt-10 max-md:max-w-full">
                Our solution seamlessly integrates all aspects of chargeback
                operations, ensuring a cohesive process from start to finish.
                The result is a holistic and efficient system designed to
                enhance every stage of the chargeback process, providing a
                seamless experience for both issuers and merchants.
              </div>
            </div>
            <div className="mt-20 mb-20 w-full max-w-[990px] max-md:my-10 max-md:max-w-full">
              <div className="flex gap-[50px] max-md:flex-col max-md:gap-0 max-md:">
                <div className=" flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="../images/home/6.svg"
                    alt=""
                    //   className=" grow w-full shadow-sm aspect-[0.91] max-md:mt-10 max-md:max-w-full"
                    className="hover15"
                  />
                </div>{" "}
                <div className=" flex flex-col grow items-start mx-5 pl-5 mt-3 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-center self-stretch mt-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black max-md:max-w-full">
                      Integrated Chargeback Operations
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between items-center self-stretch mt-9 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black max-md:max-w-full">
                      Customer Communication
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between items-center mt-10">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black">
                      Chargeback Reasoning
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between items-center mt-9">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black">
                      Chargeback Accounting
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between items-center mt-9">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black">
                      Case Management
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between items-center mt-9">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black">
                      Case Closure
                    </div>
                  </div>

                  <button className="justify-center items-stretch px-11 py-1.5 mt-12 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px] max-md:px-5 max-md:mt-10">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  items-center px-16 py-12 w-full text-xl text-blue-700 bg-white tracking-[2px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center mt-20 mb-12 max-w-full w-[780px] max-md:my-10">
              <div className="anm_mod text-[#0033cc] left delay self-center font-bold whitespace-nowrap leading-[60px] tracking-[4px]">
                WHY DISPUTEZ
              </div>
              <div className="mt-3 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[160px]" />
              <div className="self-stretch mt-20 text-4xl text-center font-medium leading-8 text-black max-md:mt-10 max-md:max-w-full">
                Experience efficiency at every step
              </div>{" "}
              <div className="mt-24  w-[588px]  leading-8 text-center text-black max-md:mt-10 max-md:max-w-full">
                <span className="tracking-wider ">
                  Our tailored solutions for issuers streamline the process,
                  providing efficient and strategic tools to navigate and
                  resolve disputes effortlessly. Stay in control, enhance
                  customer satisfaction, and maintain the integrity of your
                  financial transactions with
                </span>{" "}
                <span className="font-bold">dispute</span>{" "}
                <span className=" font-semibold text-orange-500">Z</span>
              </div>{" "}
              <div className="mt-16 text-4xl text-center leading-[62px] max-md:mt-10 max-md:max-w-full">
                Streamlined Dispute Management Solutions for Issuers
              </div>
              <div className="">
                <img
                  loading="lazy"
                  srcSet="../images/home/2.png"
                  alt=""
                  className="mt-14 w-full  aspect-[1.11] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-12 pr-20 pl-10 w-full bg-[#f2f5fc]  max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center mt-24 max-w-full text-center w-[780px] max-md:mt-10">
              <h1 className="anm_mod left delay text-4xl  font-semibold leading-5 text-orange-500 tracking-[5px] max-md:max-w-full">
                <span className="font-bold text-black">alert</span>{" "}
                <span className=" font-black text-orange-500">Z</span>
              </h1>

              <div className="mt-10 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[160px]" />
              <div className="self-stretch mt-16 text-xl tracking-wider leading-8 text-black max-md:mt-10 max-md:max-w-full">
                Our solution facilitates instant communication of fraud and
                chargeback information, empowering both parties to combat fraud
                and swiftly resolve disputes. This not only enhances
                collaboration but also ensures the preservation of the issuer's
                chargeback rights throughout the process.
              </div>
            </div>{" "}
            <div className="mt-20 mb-20 w-full max-w-[990px] max-md:my-10 max-md:max-w-full">
              <div className="flex gap-[50px] max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="../images/home/5.svg"
                    className="grow w-full  aspect-[0.91] max-md:mt-10 max-md:max-w-full"
                  />
                </div>{" "}
                <div className="flex flex-col grow items-start mx-5 pl-5 mt-3 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-center self-stretch mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black max-md:max-w-full">
                      Fraud Detection
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between items-center self-stretch mt-9 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black max-md:max-w-full">
                      Fraud Prevention
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between items-center mt-10">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black">
                      Dispute Resolution
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between items-center mt-9">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black">
                      Preservation of Chargeback Rights
                    </div>
                  </div>

                  <div className="flex gap-5 justify-between items-center mt-9">
                    <div className="flex flex-col shrink-0 w-4 h-4 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto text-xl tracking-wider leading-8 text-black">
                      Real - Time Fraud Alerts
                    </div>
                  </div>

                  <button class="justify-center items-stretch px-11 py-1.5 mt-12 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px] max-md:px-5 max-md:mt-10 transition-colors duration-300 hover:bg-orange-600">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex justify-center items-center px-16 py-12 w-full text-xl text-blue-700 bg-white tracking-[2px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center mt-20 mb-12 max-w-full w-[780px] max-md:my-10">
              <div className="anm_mod  text-[#0033cc] left delay self-center font-bold whitespace-nowrap leading-[60px] tracking-[4px]">
                WHY ALERTZ
              </div>
              <div className="mt-3 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[150px]" />
              <div className="self-stretch mt-20 text-4xl text-center font-medium leading-8 text-black max-md:mt-10 max-md:max-w-full">
                Defend against fraud and chargebacks
              </div>{" "}
              <div className="mt-24  w-[558px]  leading-8 text-center text-black max-md:mt-10 max-md:max-w-full">
                <span className="tracking-wider ">
                  {" "}
                  Its crucial for merchants to stay informed and ahead of the
                  curve. We have you covered with real time alerts, so you stay
                  informed and ahead of the curve. Resolve disputes quickly and
                  efficiently
                </span>{" "}
                <span className="font-bold">alert</span>{" "}
                <span className=" font-semibold text-orange-500">Z</span>
              </div>{" "}
              <div className="mt-16  w-[588px] text-4xl text-center leading-[62px] max-md:mt-10 max-md:max-w-full">
                Real-time Fraud Alerts for Smart Merchants
              </div>
              <div class="relative overflow-hidden w-[600px] max-w-full mt-14 max-md:mt-10 group">
                <img loading="lazy" src="../images/home/1.png" class="" />
              </div>
            </div>
          </div>{" "}
          <ExpertConsultation />
          <div className="flex flex-col justify-center py-12 px-10 mt-32 w-full text-center text-black bg-[#0033CC] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col py-12 pl-20 mt-20 mb-12 bg-white rounded-2xl max-md:pl-5 max-md:my-10 max-md:max-w-full">
              <div className="self-center  text-5xl font-bold leading-[80.16px] tracking-[2.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Corporate Partners
              </div>{" "}
              <div className="mt-5 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[400px]" />
              <div className="self-end mt-12 text-xl mx-auto tracking-wider leading-8 w-[775px] max-md:mt-10 max-md:max-w-full">
                Our corporate partners are integral to our journey, fostering
                trust and innovation. Through collaboration, we navigate
                challenges, seize opportunities, and achieve mutual growth.
                Together, we excel in delivering top-notch solutions and
                creating a thriving network.
              </div>{" "}
              <div className="self-center  w-[975px]">
                <LogoSlider />
              </div>
            </div>
          </div>{" "}
          <ContactSection />
        </div>
      </div>
      <div className="sm:flex flex-col px-3 md:hidden items-center py-6 mx-auto w-full bg-white max-w-[380px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/040da6087941280e424846fcc85dbc41083ff08de47489cca24ef5a4157ddddf?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/040da6087941280e424846fcc85dbc41083ff08de47489cca24ef5a4157ddddf?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/040da6087941280e424846fcc85dbc41083ff08de47489cca24ef5a4157ddddf?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/040da6087941280e424846fcc85dbc41083ff08de47489cca24ef5a4157ddddf?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/040da6087941280e424846fcc85dbc41083ff08de47489cca24ef5a4157ddddf?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/040da6087941280e424846fcc85dbc41083ff08de47489cca24ef5a4157ddddf?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/040da6087941280e424846fcc85dbc41083ff08de47489cca24ef5a4157ddddf?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/040da6087941280e424846fcc85dbc41083ff08de47489cca24ef5a4157ddddf?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-16 mx-auto w-full aspect-[0.85] max-w-[306px]"
        />
        <div className="mt-12 p-3 text-2xl font-bold tracking-wider text-center text-blue-700 whitespace-nowrap">
          Unleashing<span className="leading-7 text-blue-700"> IT</span>{" "}
          Excellence
        </div>
        <div className="mt-6 text-base tracking-normal leading-6 text-center text-black">
          Discover the pinnacle of IT mastery with our comprehensive solutions.
          From robust fraud defense to seamless dispute management and beyond,
          we empower your digital landscape for unparalleled success.
        </div>
        <div className="justify-center px-3.5 mx-auto w-[200px] py-1.5 mt-12 text-base font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px]">
          Learn more
        </div>
        <div className="self-stretch mt-20 w-full bg-blue-700 min-h-[2px]" />
        <div className="flex flex-col self-stretch px-5 pt-12 w-full text-base bg-blue-700 bg-opacity-10">
          <div className="self-center mt-7 font-bold text-center text-blue-700 whitespace-nowrap leading-[60px] tracking-[3.2px]">
            OUR SOLUTIONS
          </div>
          <div className="self-center h-0.5 bg-blue-700 w-[148px]" />
          <div className="flex flex-col px-5 mt-8 w-full tracking-wider text-black leading-[187.5%]">
            <div className="text-2xl font-bold tracking-wider text-center">
              <span className="leading-7 text-blue-700">
                Issuer & Merchant Solutions :
              </span>
              <span className="leading-7">
                {" "}
                Empowering seamless transactions{" "}
              </span>
            </div>
            <div className="mt-11 leading-6 text-center">
              Experience unmatched efficiency with our tailored solutions
              designed for both issuers and merchants. Our comprehensive suite
              of tools empowers seamless transactions, ensuring a smooth and
              secure interaction between issuers and merchants.
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9440d15cd388b06c6142621546ecf4aa288ca2db93a0b3204d383f97aecae187?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440d15cd388b06c6142621546ecf4aa288ca2db93a0b3204d383f97aecae187?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440d15cd388b06c6142621546ecf4aa288ca2db93a0b3204d383f97aecae187?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440d15cd388b06c6142621546ecf4aa288ca2db93a0b3204d383f97aecae187?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440d15cd388b06c6142621546ecf4aa288ca2db93a0b3204d383f97aecae187?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440d15cd388b06c6142621546ecf4aa288ca2db93a0b3204d383f97aecae187?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440d15cd388b06c6142621546ecf4aa288ca2db93a0b3204d383f97aecae187?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9440d15cd388b06c6142621546ecf4aa288ca2db93a0b3204d383f97aecae187?apiKey=67296d98361248faadca04e106a4f278&"
              className="self-center mt-14 w-full rounded-3xl shadow-sm aspect-[1.01] max-w-[325px]"
            />
            <div className="self-center mt-8 text-2xl italic font-semibold leading-5 text-center text-orange-500 whitespace-nowrap tracking-[5px]">
              <span className="font-bold">dispute</span>
              <span className="italic font-black text-orange-500">Z</span>
            </div>
            <div className="mt-7 leading-6">
              Our solution seamlessly integrates all aspects of chargeback
              operations, ensuring a cohesive process from start to finish. The
              result is a holistic and efficient system designed to enhance
              every stage of the chargeback process, providing a seamless
              experience for both issuers and merchants.
            </div>
            <div className="flex gap-3 justify-between mt-6 whitespace-nowrap">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />
              <div className="grow">Integrated Chargeback Operations</div>
            </div>
            <div className="flex gap-3 justify-between mt-7 whitespace-nowrap">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />
              <div className="grow">Customer Communication</div>
            </div>
            <div className="flex gap-3 justify-between mt-8 whitespace-nowrap">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />
              <div className="grow">Chargeback Reasoning</div>
            </div>
            <div className="flex gap-3 justify-between mt-7 whitespace-nowrap">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />
              <div className="grow">Chargeback Accounting</div>
            </div>
            <div className="flex gap-3 justify-between mt-7 whitespace-nowrap">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />
              <div className="grow">Case Management</div>
            </div>
            <div className="flex gap-3 self-start mt-7">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />
              <div>Case Closure</div>
            </div>
            <div className="justify-center self-center px-3.5 py-1.5 mt-11 font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px]">
              Learn More
            </div>
          </div>
          <div className="mt-20 w-full bg-blue-700 min-h-[2px]" />
        </div>
        <div className="mt-20 text-base font-bold text-center text-blue-700 whitespace-nowrap leading-[60px] tracking-[3.2px]">
          WHY DISPUTEZ
        </div>
        <div className="h-0.5 bg-blue-700 w-[148px]" />
        <div className="mt-9 text-2xl font-medium leading-8 text-center text-black tracking-[2px]">
          Experience efficiency at every step
        </div>
        <div className="mt-11 text-base italic leading-6 text-center text-orange-500 tracking-[2px]">
          <span className="tracking-wider">
            Our tailored solutions for issuers streamline the process, providing
            efficient and strategic tools to navigate and resolve disputes
            effortlessly. Stay in control, enhance customer satisfaction, and
            maintain the integrity of your financial transactions with
          </span>{" "}
          <span className="font-bold">dispute</span>
          <span className="italic font-black text-orange-500">Z</span>
        </div>
        <div className="mt-12 text-2xl font-medium leading-8 text-center text-blue-700 tracking-[2px]">
          Streamlined dispute management solutions for issuers
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14661d7fd3b93dea2963f5e6ec4b910e666c8b3ee08858df05ff54d5e04f2aed?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14661d7fd3b93dea2963f5e6ec4b910e666c8b3ee08858df05ff54d5e04f2aed?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14661d7fd3b93dea2963f5e6ec4b910e666c8b3ee08858df05ff54d5e04f2aed?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14661d7fd3b93dea2963f5e6ec4b910e666c8b3ee08858df05ff54d5e04f2aed?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14661d7fd3b93dea2963f5e6ec4b910e666c8b3ee08858df05ff54d5e04f2aed?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14661d7fd3b93dea2963f5e6ec4b910e666c8b3ee08858df05ff54d5e04f2aed?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14661d7fd3b93dea2963f5e6ec4b910e666c8b3ee08858df05ff54d5e04f2aed?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14661d7fd3b93dea2963f5e6ec4b910e666c8b3ee08858df05ff54d5e04f2aed?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-9 w-full rounded-3xl shadow-sm aspect-square max-w-[334px]"
        />
        <div className="z-10 self-stretch mt-14 w-full bg-blue-700 min-h-[2px]" />
        <div className="flex flex-col self-stretch px-5 py-12 w-full bg-blue-700 bg-opacity-10">
          <div className="self-center mt-10 text-2xl italic font-semibold leading-5 text-center text-orange-500 whitespace-nowrap tracking-[5px]">
            <span className="font-bold">alert</span>
            <span className="italic font-black text-orange-500">Z</span>
          </div>
          <div className="flex flex-col px-6 mt-11 mb-8 w-full text-base tracking-wider leading-8 text-black">
            <div className="leading-6">
              Our solution facilitates instant communication of fraud and
              chargeback information, empowering both parties to combat fraud
              and swiftly resolve disputes. This not only enhances collaboration
              but also ensures the preservation of the issuer's chargeback
              rights throughout the process.
            </div>{" "}
            <div className="flex gap-3 self-start mt-10">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />{" "}
              <div className="flex-auto">Fraud Detection</div>
            </div>{" "}
            <div className="flex gap-3 justify-between mt-8 whitespace-nowrap">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />{" "}
              <div className="grow">Fraud Prevention</div>
            </div>{" "}
            <div className="flex gap-3 justify-between mt-8 whitespace-nowrap">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />{" "}
              <div className="grow">Dispute Resolution</div>
            </div>{" "}
            <div className="flex gap-3 justify-between mt-7 whitespace-nowrap">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />{" "}
              <div className="grow">Preservation of Chargeback Rights</div>
            </div>{" "}
            <div className="flex gap-3 justify-between mt-7 whitespace-nowrap">
              <div className="self-start bg-blue-700 rounded-full h-[9px] w-[9px]" />{" "}
              <div className="grow">Real - Time Fraud Alerts</div>
            </div>{" "}
            <div className="justify-center self-center px-3.5 py-1.5 mt-11 font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px]">
              Learn More
            </div>{" "}
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e878af2e3a4036183e64875b55ce86ccb82fe5adc8a0902a9a59a881f517da2c?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e878af2e3a4036183e64875b55ce86ccb82fe5adc8a0902a9a59a881f517da2c?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e878af2e3a4036183e64875b55ce86ccb82fe5adc8a0902a9a59a881f517da2c?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e878af2e3a4036183e64875b55ce86ccb82fe5adc8a0902a9a59a881f517da2c?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e878af2e3a4036183e64875b55ce86ccb82fe5adc8a0902a9a59a881f517da2c?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e878af2e3a4036183e64875b55ce86ccb82fe5adc8a0902a9a59a881f517da2c?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e878af2e3a4036183e64875b55ce86ccb82fe5adc8a0902a9a59a881f517da2c?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e878af2e3a4036183e64875b55ce86ccb82fe5adc8a0902a9a59a881f517da2c?apiKey=67296d98361248faadca04e106a4f278&"
              className="self-center mt-10 w-full max-w-xs rounded-3xl shadow-sm aspect-[1.01]"
            />
          </div>
        </div>{" "}
        <div className="self-stretch w-full bg-blue-700 min-h-[2px]" />{" "}
        <div className="mt-20 text-base font-bold text-center text-blue-700 whitespace-nowrap leading-[60px] tracking-[3.2px]">
          WHY ALERTZ
        </div>{" "}
        <div className="mt-9 text-2xl font-medium leading-8 text-center text-black tracking-[2px]">
          Defend against fraud & chargebacks
        </div>{" "}
        <div className="mt-16 text-base italic tracking-wider leading-6 text-center text-orange-500">
          {" "}
          Its crucial for merchants to stay informed and ahead of the curve. We
          have you covered with real time alerts, so you stay informed and ahead
          of the curve. Resolve disputes quickly and efficiently{" "}
          <span className="font-bold tracking-[2px]">alert</span>{" "}
          <span className="italic font-semibold text-orange-500 tracking-[2px]">
            Z
          </span>
        </div>{" "}
        <div className="mt-14 text-2xl font-medium leading-8 text-center text-blue-700 tracking-[2px]">
          Real-time fraud alerts for smart merchants
        </div>{" "}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c81a03fa11b7f7c8396e3042b32e0e029b726ae7eee4eb90346a8cd8f6107b5?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c81a03fa11b7f7c8396e3042b32e0e029b726ae7eee4eb90346a8cd8f6107b5?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c81a03fa11b7f7c8396e3042b32e0e029b726ae7eee4eb90346a8cd8f6107b5?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c81a03fa11b7f7c8396e3042b32e0e029b726ae7eee4eb90346a8cd8f6107b5?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c81a03fa11b7f7c8396e3042b32e0e029b726ae7eee4eb90346a8cd8f6107b5?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c81a03fa11b7f7c8396e3042b32e0e029b726ae7eee4eb90346a8cd8f6107b5?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c81a03fa11b7f7c8396e3042b32e0e029b726ae7eee4eb90346a8cd8f6107b5?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c81a03fa11b7f7c8396e3042b32e0e029b726ae7eee4eb90346a8cd8f6107b5?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-9 w-full rounded-3xl shadow-sm aspect-[0.98] max-w-[328px]"
        />{" "}
        <div className="self-stretch mt-16 w-full bg-blue-700 min-h-[2px]" />{" "}
        <div className="mt-20 text-2xl font-bold tracking-wider text-center text-black">
          Expert Consultation
        </div>{" "}
        <div className="mt-3 bg-blue-700 h-[3px] w-[200px]" />{" "}
        <div className="mt-11 text-base tracking-wider leading-6 text-center text-black">
          <span className="font-extrabold text-blue-700">vre</span>
          <span className="text-orange-500">z</span>
          <span className="text-blue-700">olve</span> offers expert consultation
          and customized solutions to help businesses make the most of their
          technology investments. Our experienced staff is on hand to ensure you
          have the right tools and processes in place to take your business to
          the next level.
        </div>{" "}
        <div className="justify-center px-3.5 py-1.5 mt-12 text-base font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px]">
          Talk to an Expert
        </div>{" "}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/12db0978ba46274fcb8db8bde2c8dcbe9e13b9876ec67794bb92d86b70c298a8?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/12db0978ba46274fcb8db8bde2c8dcbe9e13b9876ec67794bb92d86b70c298a8?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12db0978ba46274fcb8db8bde2c8dcbe9e13b9876ec67794bb92d86b70c298a8?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/12db0978ba46274fcb8db8bde2c8dcbe9e13b9876ec67794bb92d86b70c298a8?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/12db0978ba46274fcb8db8bde2c8dcbe9e13b9876ec67794bb92d86b70c298a8?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12db0978ba46274fcb8db8bde2c8dcbe9e13b9876ec67794bb92d86b70c298a8?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/12db0978ba46274fcb8db8bde2c8dcbe9e13b9876ec67794bb92d86b70c298a8?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/12db0978ba46274fcb8db8bde2c8dcbe9e13b9876ec67794bb92d86b70c298a8?apiKey=67296d98361248faadca04e106a4f278&"
          className="self-stretch mt-6 w-full aspect-[1.3]"
        />{" "}
        <div className="flex flex-col justify-center self-stretch px-5 py-12 mt-20 w-full text-center text-black bg-blue-700">
          <div className="flex flex-col items-center py-12 mt-8 mb-8 bg-white rounded-3xl">
            <div className="text-2xl font-bold tracking-wider">
              Corporate Partners
            </div>{" "}
            <div className="mt-5 h-0.5 bg-blue-700 w-[200px]" />{" "}
            <div className="flex flex-col self-stretch pr-5 pl-2.5 mt-10 mb-9 text-base tracking-wider leading-6">
              <div>
                Our corporate partners are integral to our journey, fostering
                trust and innovation. Through collaboration, we navigate
                challenges, seize opportunities, and achieve mutual growth.
                Together, we excel in delivering top-notch solutions and
                creating a thriving network.
              </div>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98c6cbc17cc0eec504dc285fe8e0470bc4d146fb20d6a6499d548c9dd0ab104?apiKey=67296d98361248faadca04e106a4f278&"
                className="mt-20 ml-16 aspect-[1.49] w-[75px]"
              />
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col items-center self-stretch px-5 pt-12 w-full text-base tracking-wider leading-8 bg-blue-700 bg-opacity-10 text-zinc-500">
          <div className="mt-12 text-2xl font-bold tracking-wider text-center text-black whitespace-nowrap">
            Want to learn more?
          </div>{" "}
          <div className="mt-11 text-xl text-center text-black">
            Get in touch with us for any questions or assistance. We're here to
            help!
          </div>
          <div className="mt-14 text-2xl font-bold tracking-wider text-center text-black">
            Contact Us
          </div>
          <div className="mt-3 h-0.5 bg-blue-700 w-[120px]" />
          <div className="flex flex-col justify-center mt-10 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              First name
            </div>
          </div>
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Last name
            </div>
          </div>
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Email
            </div>
          </div>
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Phone
            </div>
          </div>
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="items-start pt-3.5 pr-16 pb-20 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Send us a message
            </div>
          </div>
          <div className="justify-center px-8 py-1.5 mt-10 font-medium text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px]">
            Submit
          </div>
          <div className="self-stretch mt-20 w-full bg-blue-700 min-h-[2px]" />
        </div>
        <div className="mt-24 text-sm font-medium leading-6 text-center text-blue-700 tracking-[2px]">
          COMPANY
        </div>
        <div className="mt-8 text-sm tracking-wider text-center text-black whitespace-nowrap">
          About us
        </div>
        <div className="mt-6 text-sm tracking-wider text-center text-black whitespace-nowrap">
          Partner with us
        </div>
        <div className="mt-6 text-sm tracking-wider text-center text-black whitespace-nowrap">
          Contact us
        </div>
        <div className="mt-6 text-sm tracking-wider text-center text-black">
          Blog
        </div>
        <div className="mt-20 text-sm font-medium leading-5 text-center text-blue-700 tracking-[2px]">
          SOLUTIONS
        </div>
        <div className="mt-9 text-sm text-center text-black whitespace-nowrap tracking-[2px]">
          Dispute management
        </div>
        <div className="mt-6 text-sm text-black whitespace-nowrap tracking-[2px]">
          Fraud and risk management
        </div>
        <div className="mt-6 text-sm text-center text-black whitespace-nowrap tracking-[2px]">
          Rewards program
        </div>
        <div className="mt-20 text-sm font-medium leading-6 text-blue-700 tracking-[2px]">
          SOCIAL
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d20e42dc106b10fd0b2192ce69cc8630ed7d89178fbff45146e89f9abc888f?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-9 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d7472b43bcea8fcc7cf4b653786f71698eb678302159cb8c3e0aa403e749310?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-7 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb375e91d7f92b531398d50389c7ba9fa725cbd95aa201df7c35dcd82e5df4e9?apiKey=67296d98361248faadca04e106a4f278&"
          className="mt-7 w-6 aspect-square"
        />
      </div>
    </>
  );
}

export default Home;
