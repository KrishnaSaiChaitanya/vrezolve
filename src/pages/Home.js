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
      <div className=" flex md:flex hidden sm:block">
        <div className="flex flex-col  bg-white">
          <HomeHero />
          <div className=" max-w-full mx-auto bg-[#0033cc] h-[3px] w-full" />
          {/* Section1 */}
          <div className="flex flex-col items-center bg-[#f2f5fc] px-10 py-[120px] w-full  max-md:px-5 max-md:max-w-full">
            <div className="flex  flex-col items-center max-w-full text-xl text-black w-[858px] max-md:mt-10">
              <div className="self-center text-[#0033cc] font-bold whitespace-nowrap leading-[60px] tracking-[4px] anm_mod left delay">
                OUR SOLUTIONS
              </div>
              <div className="mt-3 h-[3px] max-w-full mx-auto bg-[#0033cc] w-[179px]" />
              <header className="mt-20 text-5xl font-bold text-center text-black leading-[70px] tracking-[2.4px] w-[951px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[64px]">
                <span className="">Issuer and Merchant Solutions</span>{" "}
              </header>

              <p className="mt-16 text-xl tracking-wider leading-8 text-center text-black w-[775px] max-md:mt-10 max-md:max-w-full">
                Experience unmatched efficiency with our tailored solutions
                designed for both issuers and merchants. Our comprehensive suite
                of tools empowers seamless transactions, ensuring a smooth and
                secure interaction between issuers and merchants.
              </p>
              {/* <div className="mt-40 text-4xl  font-semibold leading-5 whitespace-nowrap tracking-[5px] max-md:mt-10 anm_mod left delay">
                <span className="font-bold">dispute</span>
                <span className=" font-black text-[#ff6600]">Z</span>
              </div>
              <div className="mt-10 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[160px]" />
              <div className="mt-16 tracking-wider leading-8 text-center max-md:mt-10 max-md:max-w-full">
                Our solution seamlessly integrates all aspects of chargeback
                operations, ensuring a cohesive process from start to finish.
                The result is a holistic and efficient system designed to
                enhance every stage of the chargeback process, providing a
                seamless experience for both issuers and merchants.
              </div> */}
            </div>
          </div>
          <div className="flex flex-col items-center py-[120px] pr-20 pl-10 w-full   max-md:px-5 max-md:max-w-full">
            <div className=" w-full  max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:mt-6 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="../images/home/5.svg"
                      className=" grow mt-24 w-full aspect-[1.08] max-md:mt-10 max-md:max-w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                    <div className="flex flex-col px-11 pt-3 max-md:px-5 max-md:max-w-full">
                      <div className="self-center text-4xl  font-semibold leading-5 text-center  whitespace-nowrap tracking-[5px]">
                        <span className="font-bold">alert</span>
                        <span className=" font-black text-orange-500">Z</span>
                      </div>
                      <div className="mt-9 text-xl leading-8 text-black max-md:max-w-full">
                        Our solution facilitates instant communication of fraud
                        and chargeback information, empowering both parties to
                        combat fraud and swiftly resolve disputes. This not only
                        enhances collaboration but also ensures the preservation
                        of the issuer's chargeback rights throughout the
                        process.
                      </div>
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

                      <button class="justify-center items-stretch px-11 py-1.5 mt-12 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] tracking-[2px] max-md:px-5 max-md:mt-10 transition-colors duration-300 hover:bg-orange-600">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  items-center px-16 py-[120px] w-full text-xl text-[#0033cc] bg-[#f2f5fc] tracking-[2px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center  mb-12 max-w-full w-[780px] max-md:my-10">
              <div className="anm_mod  text-[#0033cc] left delay self-center font-bold whitespace-nowrap leading-[60px] tracking-[4px]">
                WHY ALERTZ
              </div>
              <div className="mt-3 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[150px]" />
              <div className="self-stretch mt-12 text-4xl text-center font-medium leading-8 text-black max-md:mt-5 max-md:max-w-full">
                Defend against fraud and chargebacks
              </div>{" "}
              <div className="mt-16  w-[558px]  leading-8 text-center text-black max-md:mt-10 max-md:max-w-full">
                <span className="tracking-wider ">
                  {" "}
                  Its crucial for merchants to stay informed and ahead of the
                  curve. We have you covered with real time alerts, so you stay
                  informed and ahead of the curve. Resolve disputes quickly and
                  efficiently
                </span>{" "}
                <span className="font-bold">alert</span>{" "}
                <span className=" font-semibold text-[#ff6600]">Z</span>
              </div>{" "}
              <div className="mt-16  w-[588px] text-4xl text-center leading-[62px] max-md:mt-10 max-md:max-w-full">
                Real-time Fraud Alerts for Smart Merchants
              </div>
              <img
                loading="lazy"
                src="../images/home/1.png"
                className="mt-14 w-full  aspect-[1.11] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center py-[120px] pr-20 pl-10 w-full   max-md:px-5 max-md:max-w-full">
            <div className=" w-full  max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:mt-6 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="../images/home/6.svg"
                      className=" grow mt-24 w-full aspect-[1.08] max-md:mt-10 max-md:max-w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                    <div className="flex flex-col px-11 pt-3 max-md:px-5 max-md:max-w-full">
                      <div className="self-center text-4xl  font-semibold leading-5 text-center  whitespace-nowrap tracking-[5px]">
                        <span className="font-bold">dispute</span>
                        <span className=" font-black text-orange-500">Z</span>
                      </div>
                      <div className="mt-9 text-xl leading-8 text-black max-md:max-w-full">
                        Our solution seamlessly integrates all aspects of
                        chargeback operations, ensuring a cohesive process from
                        start to finish. The result is a holistic and efficient
                        system designed to enhance every stage of the chargeback
                        process, providing a seamless experience for both
                        issuers and merchants.
                      </div>
                    </div>{" "}
                    <div className="flex flex-col grow items-start mx-5 pl-5 mt-3 max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 justify-between items-center self-stretch mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
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

                      <button class="justify-center items-stretch px-11 py-1.5 mt-12 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] tracking-[2px] max-md:px-5 max-md:mt-10 transition-colors duration-300 hover:bg-orange-600">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-[#f2f5fc]  items-center px-16 py-12 w-full text-xl text-[#0033cc]  tracking-[2px] max-md:px-5 max-md:max-w-full">
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
                <span className=" font-semibold text-[#ff6600]">Z</span>
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
          <ExpertConsultation />
          <div className="flex flex-col justify-center py-12 mt-32 w-full text-center text-black bg-[#0033CC] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
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
      <div className="sm:flex flex-col md:hidden items-center py-6 mx-auto w-full bg-white max-w-[400px]">
        <div className="mt-12 p-3 text-2xl font-bold tracking-wider text-center  whitespace-nowrap">
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
        <div className="self-stretch mt-20 w-full bg-[#0033cc] min-h-[2px]" />
        <div className="flex flex-col pb-12 self-stretch px-5 pt-12 pb-12 w-full text-base bg-[#0033cc] bg-opacity-10">
          <div className="self-center mt-7 font-bold text-center text-[#0033cc] whitespace-nowrap leading-[60px] tracking-[3.2px]">
            OUR SOLUTIONS
          </div>
          <div className="self-center h-0.5 bg-[#0033cc] w-[148px]" />
          <div className="flex flex-col px-5 mt-8 w-full tracking-wider text-black leading-[187.5%]">
            <div className="text-2xl font-bold tracking-wider text-center">
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
        <div className="self-stretch  w-full bg-[#0033cc] min-h-[2px]" />
        {/* <div className="z-10 self-stretch mt-14 w-full bg-[#0033cc] min-h-[2px]" /> */}
        <div className="flex flex-col self-stretch px-5 py-12 w-full ">
          <div className="self-center mt-10 text-2xl  font-semibold leading-5 text-center  whitespace-nowrap tracking-[5px]">
            <span className="font-bold">alert</span>
            <span className=" font-black text-[#ff6600]">Z</span>
          </div>
          <div className="flex flex-col px-6 mt-11 mb-8 w-full text-base tracking-wider leading-8 text-black">
            <div className="leading-6">
              Our solution facilitates instant communication of fraud and
              chargeback information, empowering both parties to combat fraud
              and swiftly resolve disputes. This not only enhances collaboration
              but also ensures the preservation of the issuer's chargeback
              rights throughout the process.
            </div>{" "}
            <ul className="">
              <li className="flex  self-start mt-10">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="flex-auto">Fraud Detection</div>
              </li>{" "}
              <li className="flex justify-between mt-8 whitespace-nowrap">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="grow">Fraud Prevention</div>
              </li>{" "}
              <li className="flex  justify-between mt-8 whitespace-nowrap">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="grow">Dispute Resolution</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="grow">Preservation of Chargeback Rights</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="grow">Real - Time Fraud Alerts</div>
              </li>{" "}
            </ul>
            <div className="justify-center self-center px-3.5 py-1.5 mt-11 font-medium leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] tracking-[2px]">
              Learn More
            </div>{" "}
            <img
              loading="lazy"
              srcSet="../images/home/5.svg"
              className="self-center mt-10 w-full max-w-xs rounded-3xl shadow-sm aspect-[1.01]"
            />
          </div>
        </div>{" "}
        <div className="self-stretch w-full bg-[#0033cc] min-h-[2px]" />{" "}
        <div className="bg-[#f2f5fc] py-20">
          <div className=" text-base font-bold text-center  text-[#0033cc] whitespace-nowrap leading-[60px] tracking-[3.2px]">
            WHY ALERTZ
          </div>{" "}
          <div className="mt-9 text-2xl font-medium leading-8 text-center text-black tracking-[2px]">
            Defend against fraud & chargebacks
          </div>{" "}
          <div className="mt-16 text-base mx-3  tracking-wider leading-6 text-center ">
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
            src="../images/home/1.png"
            className="mt-9 w-full mx-auto rounded-3xl shadow-sm aspect-[0.98] max-w-[328px]"
          />{" "}
        </div>
        <div className="flex flex-col self-stretch px-5 py-12 w-full ">
          <div className="self-center mt-10 text-2xl  font-semibold leading-5 text-center  whitespace-nowrap tracking-[5px]">
            <span className="font-bold">dispute</span>
            <span className=" font-black text-[#ff6600]">Z</span>
          </div>
          <div className="flex flex-col px-6 mt-11 mb-8 w-full text-base tracking-wider leading-8 text-black">
            <div className="leading-6">
              Our solution seamlessly integrates all aspects of chargeback
              operations, ensuring a cohesive process from start to finish. The
              result is a holistic and efficient system designed to enhance
              every stage of the chargeback process, providing a seamless
              experience for both issuers and merchants.
            </div>{" "}
            <ul className="">
              <li className="flex  self-start mt-10">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="flex-auto">
                  Integrated Chargeback Operations
                </div>
              </li>{" "}
              <li className="flex justify-between mt-8 whitespace-nowrap">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="grow">Customer Communication</div>
              </li>{" "}
              <li className="flex  justify-between mt-8 whitespace-nowrap">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="grow">Chargeback Reasoning</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="grow">Chargeback Accounting</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="grow">Case Management</div>
              </li>{" "}
              <li className="flex  justify-between mt-7 whitespace-nowrap">
                {/* <div className="self-center bg-[#0033cc] rounded-full h-[9px] w-[9px]" />{" "} */}
                <div className="grow">Case Closure</div>
              </li>{" "}
            </ul>
            <div className="justify-center self-center px-3.5 py-1.5 mt-11 font-medium leading-8 text-center text-white whitespace-nowrap bg-[#ff6600] rounded-[100px] tracking-[2px]">
              Learn More
            </div>{" "}
            <img
              loading="lazy"
              srcSet="../images/home/6.svg"
              className="self-center mt-10 w-full max-w-xs rounded-3xl shadow-sm aspect-[1.01]"
            />
          </div>
        </div>{" "}
        <div className="bg-[#f2f5fc] py-20">
          <div className="text-base font-bold text-center text-[#0033cc] whitespace-nowrap leading-[60px] tracking-[3.2px]">
            WHY DISPUTEZ
          </div>
          <div className="h-0.5 mx-auto bg-[#0033cc] w-[148px]" />
          <div className="mt-9 text-2xl font-medium leading-8 text-center text-black tracking-[2px]">
            Experience efficiency at every step
          </div>
          <div className="mt-11 mx-3 text-base  leading-6 text-center  tracking-[2px]">
            <span className="tracking-wider">
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
            srcSet="../images/home/2.png"
            className="mt-9 w-full mx-auto rounded-3xl  aspect-square max-w-[334px]"
          />
        </div>
        <div className="self-stretch  w-full bg-[#0033cc] min-h-[2px]" />{" "}
        <div className="mt-20 text-2xl font-bold tracking-wider text-center text-black">
          Expert Consultation
        </div>{" "}
        <div className="mt-3 mx-auto bg-[#0033cc] h-[px] w-[200px]" />{" "}
        <div className="mt-11 text-base px-3 tracking-wider leading-6 text-center text-black">
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
          className="self-stretch  w-full aspect-[1.1]"
        />{" "}
        <div className="flex flex-col justify-center self-stretch px-5 py-12 w-full text-center text-black bg-[#0033cc]">
          <div className="flex flex-col items-center py-12 mt-8 mb-8 bg-white rounded-3xl">
            <div className="text-2xl font-bold tracking-wider">
              Corporate Partners
            </div>{" "}
            <div className="mt-5 h-0.5 bg-[#0033cc] w-[200px]" />{" "}
            <div className="flex flex-col self-stretch pr-5 pl-2.5 mt-10 mb-9 text-base tracking-wider leading-6">
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
