import React from "react";
import AlertzHero from "../components/hero/AlertzHero";
import CardsSection from "../components/CardsSection";
import TransactionComponent from "../components/TransactionComponent";
import Section from "../components/Section";
import EnhancedSecurityComponent from "../components/EnhancedSecurityComponent";
import ContactSection from "../components/ContactSection";

function Alertz() {
  return (
    <div>
      <AlertzHero />
      <div className="flex flex-col py-12 ">
        <div className="flex flex-col px-3 self-center mt-32 w-full max-w-[1250px] max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xl tracking-wider leading-8 text-black max-md:mt-7 max-md:max-w-full">
                  <div className="text-5xl font-bold text-center  leading-[80px] tracking-[2.4px] max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
                    Stay informed & secure with{" "}
                    <span className="text-blue-700">real-time alerts</span>
                  </div>
                  <div className="self-start mt-16 ml-6 max-md:mt-10 max-md:max-w-full">
                    Our platform provides users with instant notifications,
                    keeping them updated on critical information such as
                    transactions, account activity, and security alerts.{" "}
                  </div>
                  <div className="flex gap-4 justify-between mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col mt-3 shrink-0 w-3 h-3 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto max-md:max-w-full">
                      This proactive approach empowers users to stay ahead of
                      any potential issues, enabling swift actions and ensuring
                      a secure and seamless experience.
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between mt-9 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col mt-3 shrink-0 w-3 h-3 rounded-full bg-[#0033CC]" />
                    <div className="flex-auto max-md:max-w-full">
                      With real-time alerts, you're always in the loop,
                      enhancing your peace of mind and confidence in your
                      financial interactions.
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="../images/alertz/1.svg"
                  className="z-10  mt-0 w-full  aspect-[0.82] max-md:max-w-full"
                />{" "}
              </div>
            </div>
          </div>{" "}
          <div className="self-center mt-64 mr-12 text-5xl font-bold text-center leading-[80px] tracking-[2.4px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
            Trust in a <span className="text-blue-700">secure</span> tomorrow,
            today.
          </div>{" "}
          <div className="self-center mt-16 mr-16 text-xl tracking-wider leading-8 text-center text-black w-[775px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            Initiate your journey to enhanced security by getting started with
            alerts in just a few simple steps. Start now to experience a
            seamless and protected interaction with our platform.
          </div>{" "}
          <div className="justify-center self-center px-12 py-1.5 mt-9  text-xl font-medium tracking-wider leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5">
            Get Started
          </div>
        </div>{" "}
        {/* <div className="flex flex-col px-12 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&"
                  className="mt-16 w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full"
                />
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow font-bold max-md:mt-2 max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-start pr-5 max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center items-center self-end mt-6 text-4xl tracking-widest text-center text-white whitespace-nowrap bg-orange-500 rounded-full h-[45px] leading-[79.92px] w-[45px]">
                      1
                    </div>{" "}
                    <div className="grow self-start text-4xl text-blue-700 leading-[60px] tracking-[5px] max-md:max-w-full">
                      Create an account
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between pr-5 mt-8 text-xl tracking-wider leading-8 text-black max-md:flex-wrap max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f83f28b5831485691b9eb6912c673b2c2bcfaf74fb185e8ffd8202e433643390?apiKey=67296d98361248faadca04e106a4f278&"
                      className="self-end mt-11 w-0.5 aspect-[0.02] stroke-[2px] stroke-blue-700 max-md:mt-10"
                    />{" "}
                    <div className="flex-auto max-md:max-w-full">
                      Joining is Easy:
                      <br />
                      Click 'Sign Up'
                      <br />
                      Fill in your details
                      <br />
                      Verify and Create Your Account
                      <br />
                      <br />
                      Welcome to a Seamless Experience!
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between pr-5 mt-9 max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center items-center self-start mt-4 text-4xl tracking-widest text-center text-white whitespace-nowrap bg-orange-500 rounded-full h-[45px] leading-[79.92px] w-[45px]">
                      2
                    </div>{" "}
                    <div className="grow text-4xl text-blue-700 leading-[60px] tracking-[5px] max-md:max-w-full">
                      Register for alerts
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between pr-5 mt-10 text-xl tracking-wider leading-8 text-black max-md:flex-wrap max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f83f28b5831485691b9eb6912c673b2c2bcfaf74fb185e8ffd8202e433643390?apiKey=67296d98361248faadca04e106a4f278&"
                      className="my-auto w-0.5 aspect-[0.02] stroke-[2px] stroke-blue-700"
                    />{" "}
                    <div className="flex-auto max-md:max-w-full">
                      Register for Alerts in 3 Easy Steps:
                      <br />
                      Log in to Your Account
                      <br />
                      Subscribe for Alerts
                      <br />
                      Customize and Save Your Preferences
                      <br />
                      <br />
                      Stay Informed, Stay in Control!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex gap-5 justify-between self-end pr-5 mt-5 font-bold max-md:flex-wrap max-md:max-w-full">
            <div className="justify-center items-center my-auto text-4xl tracking-widest text-center text-white whitespace-nowrap bg-orange-500 rounded-full h-[45px] leading-[79.92px] w-[45px]">
              3
            </div>{" "}
            <div className="grow text-4xl text-blue-700 leading-[60px] tracking-[5px] max-md:max-w-full">
              Get real-time alerts
            </div>
          </div>
        </div>{" "} */}
        <div className="flex flex-col px-12 mt-24 bg-white w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6462c3aaf1f1f99663e7b01f2a866bb1e6453ff76d186a486c44e6763a2afb78?apiKey=67296d98361248faadca04e106a4f278&"
                  className="mt-16 w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow  max-md:mt-2 max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-start pr-5 max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center items-center self-end mt-3 text-4xl tracking-widest text-center text-white whitespace-nowrap bg-orange-500 rounded-full h-[45px] leading-[45.92px] w-[45px]">
                      1
                    </div>
                    <div className="grow font-bold self-start text-4xl text-blue-700 leading-[60px] tracking-[5px] max-md:max-w-full">
                      Create an account
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between pr-5 mt-8 text-xl tracking-wider leading-8 text-black max-md:flex-wrap max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="../images/vertical-line.svg"
                      //   className="self-end mt-11 w-0.5 aspect-[0.02] stroke-[2px] stroke-blue-700 max-md:mt-10"
                    />
                    <div className="p-3 pl-5 flex-auto max-md:max-w-full">
                      Joining is Easy:
                      <br />
                      <p className="pl-3 pt-4">
                        1. Click 'Sign Up'
                        <br />
                        2. Fill in your details
                        <br />
                        3. Verify and Create Your Account
                        <br />
                        <br />
                      </p>
                      Welcome to a Seamless Experience!
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between pr-5 mt-9 max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center items-center self-start mt-4 text-4xl tracking-widest text-center text-white whitespace-nowrap bg-orange-500 rounded-full h-[45px] leading-[45.92px] w-[45px]">
                      2
                    </div>
                    <div className="font-bold grow text-4xl text-blue-700 leading-[60px] tracking-[5px] max-md:max-w-full">
                      Register for alerts
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between pr-5 mt-10 text-xl tracking-wider leading-8 text-black max-md:flex-wrap max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="../images/vertical-line.svg"
                      //   className="my-auto w-0.5 aspect-[0.02] stroke-[2px] stroke-blue-700"
                    />
                    <div className="p-3 pl-5 flex-auto max-md:max-w-full">
                      Register for Alerts in 3 Easy Steps:
                      <br />
                      <p className="pl-3 pt-4">
                        1. Log in to Your Account
                        <br />
                        2. Subscribe for Alerts
                        <br />
                        3. Customize and Save Your Preferences
                        <br />
                        <br />
                        Stay Informed, Stay in Control!
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between pr-5 mt-9 max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center items-center self-start mt-3 text-4xl tracking-widest text-center text-white whitespace-nowrap bg-orange-500 rounded-full h-[45px] leading-[45.92px] w-[45px]">
                      3
                    </div>
                    <div className="font-bold grow text-4xl text-blue-700 leading-[60px] tracking-[5px] max-md:max-w-full">
                      Get real-time alerts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardsSection />
        <div className="mt-32 mr-10 ml-11 bg-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl leading-8 text-black max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-4 justify-between  leading-[60px] max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-blue-700 font-bold tracking-[4px] max-md:max-w-full">
                      PROACTIVE ALERTS
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/20283bdb75cc16fa0e40b70b8fe024cb9bb42445b2558fbb9eaa2c44260f6777?apiKey=67296d98361248faadca04e106a4f278&"
                      className="mt-3 max-w-full aspect-[100] stroke-[3px] stroke-blue-700 w-[237px]"
                    />{" "}
                    <div className="mt-9 leading-[50px] font-bold text-4xl tracking-[5px] max-md:max-w-full">
                      Fraud Detection and Prevention
                    </div>{" "}
                    <div className="mt-9 tracking-wider leading-8 max-md:max-w-full">
                      <span className="font-bold">alert</span>
                      <span className="italic font-black text-orange-500">
                        Z
                      </span>{" "}
                      proactively notifies merchants and issuers of any
                      suspicious transactions, empowering them to take immediate
                      action. Our mission is to stay ahead of the fraudsters,
                      and we're proud to offer best-in-class solutions that
                      protect our clients from the ever-present threat of fraud.
                    </div>
                    <div className="mt-11 tracking-wide leading-8 max-md:mt-10 max-md:max-w-full w-[600px]">
                      <ul className="space-y-9">
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            <span className=" text-blue-700">
                              Proactive Notifications
                            </span>
                            : Immediate alerts for merchants and issuers on
                            suspicious transactions.
                          </p>
                        </li>
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            <span className="text-blue-700 ">
                              Empowerment to Act
                            </span>
                            : Enabling swift action in response to potential
                            threats.
                          </p>
                        </li>
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            <span className="text-blue-700">
                              Stay Ahead of Fraud
                            </span>
                            : A commitment to staying one step ahead of
                            fraudsters.
                          </p>
                        </li>
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            <span className="text-blue-700">
                              Best-in-Class Solutions
                            </span>
                            : Providing top-notch tools for client protection
                            against the ever-present threat of fraud
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    srcSet="../images/alertz/3.svg"
                    className="self-start mt-1 aspect-[0.12] w-[53px] max-md:mt-10"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="../images/alertz/2.png"
                className="mt-24 w-full rounded-3xl aspect-[0.94] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-32 mr-10 ml-11 bg-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="../images/alertz/3.png"
                className="grow mt-44 w-full rounded-3xl aspect-[0.93] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-xl text-black max-md:mt-8 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="../images/alertz/2.svg"
                    className="self-end mt-14 aspect-[0.14] w-[63px] max-md:mt-10"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="flex flex-col px-5  max-md:max-w-full">
                      <div className="text-blue-700 font-bold leading-[60px] tracking-[4px] max-md:max-w-full">
                        SWIFT RESOLUTION
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20283bdb75cc16fa0e40b70b8fe024cb9bb42445b2558fbb9eaa2c44260f6777?apiKey=67296d98361248faadca04e106a4f278&"
                        className="mt-3 max-w-full aspect-[100] stroke-[3px] stroke-blue-700 w-[237px]"
                      />
                      <div className="mt-9 text-4xl font-bold leading-[60px] tracking-[5px] max-md:max-w-full">
                        Dispute Resolution
                      </div>
                      <div className="mt-9 tracking-wider leading-8 max-md:max-w-full">
                        <span className="font-bold">alert</span>{" "}
                        <span className="italic font-black text-orange-500">
                          Z
                        </span>{" "}
                        <span className="">
                          has a platform that serves as a communication bridge,
                          ensuring merchants and cardholders can address issues
                          promptly. Experience faster dispute resolution and
                          eliminate the need for chargebacks with direct issue
                          resolution.
                        </span>
                      </div>
                    </div>
                    <div className="mt-11 tracking-wide leading-8 max-md:mt-10 max-md:max-w-full">
                      <ul>
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            <span className="text-blue-700">
                              Bridging Communication
                            </span>
                            : Our platform facilitates direct and prompt
                            communication between parties.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-9 tracking-wide leading-8 max-md:max-w-full">
                      <ul>
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            <span className="text-blue-700">
                              Issue Resolution
                            </span>
                            : Merchants can address concerns directly with
                            cardholders for swift resolution.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pl-20 mt-10 tracking-wide leading-8 max-md:pl-5 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <ul>
                      <li className="flex flex-row">
                        <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                        <p>
                          <span className="text-blue-700">
                            Expedited Dispute Resolution
                          </span>
                          : Experience faster resolution processes.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-9 max-md:max-w-full">
                    <ul>
                      <li className="flex flex-row">
                        <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                        <p>
                          <span className="text-blue-700">
                            Chargeback Avoidance
                          </span>
                          : Minimize the necessity of filing chargebacks through
                          direct issue resolution.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 mr-10 ml-11 bg-white mb-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl leading-8 text-black max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-4 justify-between  leading-[60px] max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <div className="text-blue-700 font-bold tracking-[4px] max-md:max-w-full">
                      UPHOLDING USER SECURITY
                    </div>{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/20283bdb75cc16fa0e40b70b8fe024cb9bb42445b2558fbb9eaa2c44260f6777?apiKey=67296d98361248faadca04e106a4f278&"
                      className="mt-3 max-w-full aspect-[100] stroke-[3px] stroke-blue-700 w-[237px]"
                    />{" "}
                    <div className="mt-9 leading-[50px] font-bold text-4xl tracking-[5px] max-md:max-w-full">
                      Preservation of Chargeback Rights
                    </div>{" "}
                    <div className="mt-9 tracking-wider leading-8 max-md:max-w-full">
                      Preserving chargeback rights is integral to our commitment
                      to customer satisfaction and dispute resolution. We
                      understand the importance of providing users with a
                      reliable recourse in case of unresolved issues. We empower
                      users with a secure and effective means to address
                      disputes, reinforcing their confidence in our commitment
                      to a fair and transparent resolution process.
                    </div>
                    <div className="mt-11 tracking-wide leading-8 max-md:mt-10 max-md:max-w-full w-[600px]">
                      <ul className="space-y-9">
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            Commitment to resolving issues directly with
                            merchants on behalf of users.
                          </p>
                        </li>
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            Emphasis on initiating the traditional chargeback
                            process if a resolution cannot be reached.
                          </p>
                        </li>
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            Understanding the importance of protecting users.
                          </p>
                        </li>
                        <li className="flex flex-row">
                          <div className="flex flex-col mt-2 mr-3 shrink-0 w-2 h-2 rounded-full bg-[#0033CC]" />
                          <p>
                            Striving to provide users with the best possible
                            experience.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    srcSet="../images/alertz/3.svg"
                    className="self-start mt-1 aspect-[0.12] w-[53px] max-md:mt-10"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="../images/alertz/4.png"
                className="mt-24 w-full rounded-3xl aspect-[0.94] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}

export default Alertz;
