import React from "react";
import LoginNavbar from "./LoginNavbar";
import HomeHero from "./hero/HomeHero";
import Footer from "./Footer";
import LogoSlider from "./LogoSlider";
import ExpertConsultation from "./ExpertConsultation";

function Home() {
  return (
    <div className="animation_container">
      <div className="flex flex-col py-12 bg-white">
        <HomeHero />
        <div className="flex flex-col items-center px-10 py-12 w-full bg-[#f2f5fc] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center mt-20 max-w-full text-xl text-black w-[858px] max-md:mt-10">
            <div className="self-center font-bold whitespace-nowrap leading-[60px] tracking-[4px] anm_mod left delay">
              OUR SOLUTIONS
            </div>
            <div className="mt-3 h-1 border-2 border-sky-600 border-solid w-[179px]" />
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
            <div className="mt-10 max-w-full mx-auto bg-blue-700 h-[3px] w-[160px]" />
            <div className="mt-16 tracking-wider leading-8 text-center max-md:mt-10 max-md:max-w-full">
              Our solution seamlessly integrates all aspects of chargeback
              operations, ensuring a cohesive process from start to finish. The
              result is a holistic and efficient system designed to enhance
              every stage of the chargeback process, providing a seamless
              experience for both issuers and merchants.
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
            <div className="anm_mod left delay self-center font-bold whitespace-nowrap leading-[60px] tracking-[4px]">
              WHY DISPUTEZ
            </div>
            <div className="mt-3 max-w-full mx-auto bg-blue-700 h-[3px] w-[160px]" />
            <div className="self-stretch mt-20 text-4xl text-center font-medium leading-8 text-black max-md:mt-10 max-md:max-w-full">
              Experience efficiency at every step
            </div>{" "}
            <div className="mt-24  w-[588px]  leading-8 text-center text-black max-md:mt-10 max-md:max-w-full">
              <span className="tracking-wider ">
                Our tailored solutions for issuers streamline the process,
                providing efficient and strategic tools to navigate and resolve
                disputes effortlessly. Stay in control, enhance customer
                satisfaction, and maintain the integrity of your financial
                transactions with
              </span>{" "}
              <span className="font-bold">dispute</span>{" "}
              <span className=" font-semibold text-orange-500">Z</span>
            </div>{" "}
            <div className="mt-16 text-4xl text-center leading-[62px] max-md:mt-10 max-md:max-w-full">
              Streamlined Dispute Management Solutions for Issuers
            </div>
            <div className="image-wrapper shine">
              <img
                loading="lazy"
                srcSet="../images/home/section-3.svg"
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

            <div className="mt-10 max-w-full mx-auto bg-blue-700 h-[3px] w-[160px]" />
            <div className="self-stretch mt-16 text-xl tracking-wider leading-8 text-black max-md:mt-10 max-md:max-w-full">
              Our solution facilitates instant communication of fraud and
              chargeback information, empowering both parties to combat fraud
              and swiftly resolve disputes. This not only enhances collaboration
              but also ensures the preservation of the issuer's chargeback
              rights throughout the process.
            </div>
          </div>{" "}
          <div className="mt-20 mb-20 w-full max-w-[990px] max-md:my-10 max-md:max-w-full">
            <div className="flex gap-[50px] max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="../images/home/5.svg"
                  className="grow w-full shadow-sm aspect-[0.91] max-md:mt-10 max-md:max-w-full"
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
            <div className="anm_mod left delay self-center font-bold whitespace-nowrap leading-[60px] tracking-[4px]">
              WHY ALERTZ
            </div>
            <div className="mt-3 max-w-full mx-auto bg-blue-700 h-[3px] w-[150px]" />
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
              <img loading="lazy" src="../images/home/section-5.svg" class="" />
            </div>
          </div>
        </div>{" "}
        <ExpertConsultation />
        <div className="flex flex-col justify-center py-12 px-10 mt-32 w-full text-center text-black bg-[#0033CC] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col py-12 pl-20 mt-20 mb-12 bg-white rounded-2xl max-md:pl-5 max-md:my-10 max-md:max-w-full">
            <div className="self-center  text-5xl font-bold leading-[80.16px] tracking-[2.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Corporate Partners
            </div>{" "}
            <div className="mt-5 max-w-full mx-auto bg-blue-700 h-[3px] w-[400px]" />
            <div className="self-end mt-12 text-xl mx-auto tracking-wider leading-8 w-[775px] max-md:mt-10 max-md:max-w-full">
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
        <div className="flex gap-5  max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="mt-40 text-5xl font-bold leading-[60.16px] text-stone-750 tracking-[3px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Want to learn more?
              </div>
              <div className="flex-auto text-xl text-black mt-5">
                Get in touch with us for any questions or assistance. We're here
                to help!
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 mt-32   w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex px-5 flex-col grow text-base tracking-wider leading-8 whitespace-nowrap text-zinc-500 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-end    mr-40 max-w-full text-5xl font-bold text-center text-black leading-[80.16px] tracking-[2.4px] w-[383px] max-md:mt-10 max-md:mr-2.5 max-md:text-4xl mb-[50px]">
                <div className="max-md:text-4xl">Contact Us</div>{" "}
                <div className="mt-3 max-w-full mx-auto bg-blue-700 h-[3px] w-[200px]" />
              </div>{" "}
              <div className="flex flex-col justify-center mr-5  py-0.5 mt-10 bg-white rounded max-md:mt-10 max-md:max-w-full">
                <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                  <input
                    type="text"
                    placeholder="First name"
                    className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                  />
                </div>

                <div className="justify-center items-start mt-5 py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                  />
                </div>

                <div className="justify-center items-start mt-5 py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                  <input
                    type="text"
                    placeholder="Email"
                    className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                  />
                </div>

                <div className="justify-center items-start mt-5 py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                  />
                </div>
                <div className="justify-center items-start mt-5 pb-16 pt-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)] max-md:pr-5 max-md:max-w-full">
                  <input
                    type="text"
                    placeholder="Send us a message"
                    className="placeholder-gray-400 text-black text-xl font-medium leading-5 tracking-[2px] outline-none bg-transparent w-full"
                  />
                </div>
              </div>
              <div className="justify-center self-center px-12 py-1.5 mt-6 text-xl font-medium leading-8 text-center text-white bg-orange-500 rounded-[100px] tracking-[2px] max-md:px-5">
                Submit
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32  max-w-full mx-auto bg-blue-700 h-[3px] w-full" />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
