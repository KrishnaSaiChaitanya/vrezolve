import React from "react";
import AlertzHero from "../components/hero/AlertzHero";
import CardsSection from "../components/CardsSection";
import TransactionComponent from "../components/TransactionComponent";
import Section from "../components/Section";
import EnhancedSecurityComponent from "../components/EnhancedSecurityComponent";
import ContactSection from "../components/ContactSection";

function Alertz() {
  return (
    <>
      <div className="flex flex-col md:flex hidden sm:block">
        <AlertzHero />
        <div className="flex flex-col py-10 bg-[#f2f5fc]">
          <div className="flex flex-col px-3 self-center mt-20 mb-10 w-full max-w-[1250px] max-md:mt-10 max-md:max-w-full">
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
                        any potential issues, enabling swift actions and
                        ensuring a secure and seamless experience.
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
          </div>{" "}
        </div>
        <div className="flex flex-col items-center self-center  w-full max-w-[1040px] max-md:max-w-full">
          <div className="mt-20 ml-16 text-5xl font-bold text-center text-black leading-[80px] tracking-[2.4px] w-[593px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
            <span className="text-blue-700">Streamlined</span> Protection,
            Effortless <span className="text-blue-700">Monitoring</span>
          </div>{" "}
          <div className="self-end mt-16 mr-16 text-xl tracking-wider leading-8 text-center text-black w-[779px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            Our unique dashboard features an intuitive design, providing you
            with a simple yet powerful tool to safeguard your transactions.
            Elevate your defenses effortlessly with our advanced system,
            meticulously designed to thwart chargeback alerts and deter fraud
            concerns.
          </div>{" "}
          <div className="mt-16  text-4xl font-bold text-black leading-[60px] tracking-[5px] max-md:mt-10 max-md:max-w-full">
            Key features spotlight
          </div>{" "}
          <div className="flex flex-col text-xl tracking-wider mt-12 mx-auto leading-8 text-black max-w-[305px]">
            <div className="flex gap-5 justify-between px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6756209920164ee4429a85023df4228e0ee3ab5006a3fdab1aa320d0fee36a?apiKey=67296d98361248faadca04e106a4f278&"
                className="w-6 aspect-square"
              />
              <div className="flex-auto my-auto">Real-Time Alerts</div>
            </div>
            <div className="flex gap-5 justify-between px-5 mt-12">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6756209920164ee4429a85023df4228e0ee3ab5006a3fdab1aa320d0fee36a?apiKey=67296d98361248faadca04e106a4f278&"
                className="w-6 aspect-square"
              />
              <div className="flex-auto">Visual Analytics</div>
            </div>
            <div className="flex gap-5 justify-between px-5 mt-12">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6756209920164ee4429a85023df4228e0ee3ab5006a3fdab1aa320d0fee36a?apiKey=67296d98361248faadca04e106a4f278&"
                className="w-6 aspect-square"
              />
              <div className="flex-auto">Customizable Widgets</div>
            </div>
            <div className="flex gap-5 justify-between px-5 mt-12">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6756209920164ee4429a85023df4228e0ee3ab5006a3fdab1aa320d0fee36a?apiKey=67296d98361248faadca04e106a4f278&"
                className="w-6 aspect-square"
              />
              <div className="flex-auto my-auto">Risk Level Indicators</div>
            </div>
            <div className="flex gap-5 justify-between px-5 mt-12">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6756209920164ee4429a85023df4228e0ee3ab5006a3fdab1aa320d0fee36a?apiKey=67296d98361248faadca04e106a4f278&"
                className="w-6 aspect-square"
              />
              <div className="flex-auto">Real-Time Reporting</div>
            </div>
            <div className="flex gap-5 justify-between px-5 mt-12">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6756209920164ee4429a85023df4228e0ee3ab5006a3fdab1aa320d0fee36a?apiKey=67296d98361248faadca04e106a4f278&"
                className="w-6 aspect-square"
              />
              <div className="flex-auto">Quick Action Buttons</div>
            </div>
            <div className="flex gap-5 justify-between px-5 mt-12">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6756209920164ee4429a85023df4228e0ee3ab5006a3fdab1aa320d0fee36a?apiKey=67296d98361248faadca04e106a4f278&"
                className="w-6 aspect-square"
              />
              <div className="flex-auto my-auto">Historical Data Access</div>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dff4859ef4555e63ed3f66f900f882ca75477ccad6629734feb2c6b6c454f453?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dff4859ef4555e63ed3f66f900f882ca75477ccad6629734feb2c6b6c454f453?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dff4859ef4555e63ed3f66f900f882ca75477ccad6629734feb2c6b6c454f453?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dff4859ef4555e63ed3f66f900f882ca75477ccad6629734feb2c6b6c454f453?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dff4859ef4555e63ed3f66f900f882ca75477ccad6629734feb2c6b6c454f453?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dff4859ef4555e63ed3f66f900f882ca75477ccad6629734feb2c6b6c454f453?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dff4859ef4555e63ed3f66f900f882ca75477ccad6629734feb2c6b6c454f453?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dff4859ef4555e63ed3f66f900f882ca75477ccad6629734feb2c6b6c454f453?apiKey=67296d98361248faadca04e106a4f278&"
            className="mt-20 w-full aspect-[1.02] fill-zinc-300 fill-opacity-50 max-w-[889px] max-md:mt-10 max-md:max-w-full"
          />
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
                      <span className=" font-black text-orange-500">
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
                      <div className="mt-5 max-w-full mx-auto bg-[#0033cc] h-[3px] w-[140px]" />

                      <div className="mt-9 text-4xl font-bold leading-[60px] tracking-[5px] max-md:max-w-full">
                        Dispute Resolution
                      </div>
                      <div className="mt-9 tracking-wider leading-8 max-md:max-w-full">
                        <span className="font-bold">alert</span>{" "}
                        <span className=" font-black text-orange-500">Z</span>{" "}
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
                      src="../images/alertz/4.png"
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
      <div className="sm:flex md:hidden flex-col  items-center pt-5 pb-11 mx-auto w-full bg-white max-w-[380px]">
        <img
          loading="lazy"
          src="../images/alertz/1.png"
          className="self-stretch mt-6 w-full aspect-[1.03]"
        />
        <div className="mt-14 text-2xl  font-semibold leading-5 text-center text-orange-500 whitespace-nowrap tracking-[5px]">
          <span className="font-bold text-blue-700">alert</span>
          <span className=" font-black text-orange-500">Z</span>
        </div>
        <div className="h-0.5 mt-5 mx-auto bg-blue-700 w-[128px]" />
        <div className="mt-8 px-3 text-2xl font-bold tracking-wider text-center text-black">
          <span className="text-blue-700">E-commerce defense :</span> Fraud &
          Chargebacks
        </div>
        <div className="mt-10 px-3 text-base tracking-normal leading-6 text-center text-black">
          <span className="font-bold">alert </span>
          <span className=" font-black text-orange-500">Z</span> empowers you
          with a robust shield against the threats of fraud and chargeback
          disputes. Explore our cutting-edge solutions and stay ahead in
          safeguarding your transactions.
        </div>
        <div className="justify-center mx-auto w-[180px] px-3 py-1.5 mt-8 text-base font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px]">
          Get Started
        </div>
        <div className="flex flex-col self-stretch px-6 mt-16 w-full">
          <div className="text-2xl font-bold tracking-wider text-center text-blue-700">
            <span className="text-black">Stay informed & secure with</span>{" "}
            real-time alerts
          </div>
          <img
            loading="lazy"
            srcSet="../images/alertz/1.svg"
            className="self-center mt-12 w-full aspect-[1.12] mx-auto max-w-[310px]"
          />

          <div className="mt-16 text-base tracking-wider leading-6 text-center text-black">
            Our platform provides users with instant notifications, keeping them
            updated on critical information such as transactions, account
            activity, and security alerts.{" "}
          </div>
          <div className="flex gap-3 justify-between mt-14 mr-2.5 ml-3">
            <div className="flex flex-col self-start mt-2.5 basis-0">
              <div className="shrink-0 bg-blue-700 rounded-full h-[9px]" />
              <div className="shrink-0 mt-36 bg-blue-700 rounded-full h-[9px]" />
            </div>
            <div className="flex flex-col flex-1 text-base tracking-wider leading-6 text-black">
              <div>
                This proactive approach empowers users to stay ahead of any
                potential issues, enabling swift actions and ensuring a secure
                and seamless experience.
              </div>
              <div className="mt-5">
                With real-time alerts, you're always in the loop, enhancing your
                peace of mind and confidence in your financial interactions.
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col self-stretch px-6 py-12 w-full bg-blue-700 bg-opacity-10 mt-[1151px]">
          <div className="mt-10 text-2xl font-bold tracking-wider text-center text-black">
            Unveiling the best of our platform
          </div>{" "}
          <div className="flex gap-5 justify-between mt-14">
            <div className="flex flex-col my-auto basis-0">
              <div className="flex justify-center items-center px-3 bg-white rounded-3xl shadow-sm h-[101px] w-[101px]">
                <img
                  loading="lazy"
                  srcSet="../images/alertz/4.svg"
                  className="w-full aspect-square"
                />
              </div>{" "}
              <div className="flex justify-center items-center px-3 mt-16 bg-white rounded-3xl shadow-sm h-[101px] w-[101px]">
                <img
                  loading="lazy"
                  srcSet="../images/alertz/5.svg"
                  className="w-full aspect-square"
                />
              </div>
            </div>{" "}
            <div className="flex flex-col flex-1 text-base font-medium leading-8 text-blue-700 tracking-[2px]">
              <div>Fraud Prevention</div>{" "}
              <div className="mt-6 tracking-wider leading-6 text-black">
                Employing advanced technologies and vigilance for robust fraud
                prevention.
              </div>{" "}
              <div className="mt-10">Cost Savings</div>{" "}
              <div className="mt-6 tracking-wider leading-6 text-black">
                Our approach to minimize disputes and associated fees.
              </div>
            </div>
          </div>{" "}
          <div className="flex gap-5 justify-between mt-10 mb-10">
            <div className="flex justify-center items-center self-start px-3 mt-4 bg-white rounded-3xl shadow-sm h-[101px] w-[101px]">
              <img
                loading="lazy"
                srcSet="../images/alertz/6.svg"
                className="w-full aspect-square"
              />
            </div>{" "}
            <div className="flex flex-col flex-1 text-base">
              <div className="font-medium leading-8 text-blue-700 tracking-[2px]">
                Faster Resolution{" "}
              </div>{" "}
              <div className="mt-6 tracking-wider leading-6 text-black">
                Facilitating swift and direct interactions between merchants and
                card issuer banks for expedited resolutions.
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col mb-16 self-stretch px-6 mt-20 w-full text-base tracking-wider leading-6 text-black">
          <div className="self-center font-bold text-center text-blue-700 whitespace-nowrap leading-[60px] tracking-[3.2px]">
            PROACTIVE ALERTS
          </div>
          <div className="h-0.5 mx-auto bg-blue-700 w-[158px]" />
          <img
            loading="lazy"
            src="../images/alertz/2.png"
            className="self-center mt-10 w-full rounded-3xl aspect-[0.86] max-w-[300px]"
          />{" "}
          <div className="mt-12 text-2xl font-medium leading-8 text-center tracking-[2px]">
            Fraud Detection & Prevention
          </div>
          <div className="mt-12 text-center">
            <span className="font-bold">alert</span>
            <span className=" font-black text-orange-500">Z</span> proactively
            notifies merchants and issuers of any suspicious transactions,
            empowering them to take immediate action. Our mission is to stay
            ahead of the fraudsters, and we're proud to offer best-in-class
            solutions that protect our clients from the ever-present threat of
            fraud.
          </div>
          <div className="self-center mt-14">
            <ul>
              <li>
                <span className="tracking-normal text-blue-700">
                  Proactive Notifications
                </span>
                <span className="tracking-normal">
                  : Immediate alerts for merchants and issuers on suspicious
                  transactions.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-11">
            <ul>
              <li>
                <span className="tracking-normal text-blue-700">
                  Empowerment to Act
                </span>
                <span className="tracking-normal">
                  : Enabling swift action in response to potential threats.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <ul>
              <li>
                <span className="tracking-normal text-blue-700">
                  Stay Ahead of Fraud
                </span>
                <span className="tracking-normal">
                  : A commitment to staying one step ahead of fraudsters.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-11">
            <ul>
              <li>
                <span className="tracking-normal text-blue-700">
                  Best-in-Class Solutions
                </span>
                <span className="tracking-normal">
                  : Providing top-notch tools for client protection against the
                  ever-present threat of fraud
                </span>
              </li>
            </ul>
          </div>
          <div className="self-center mt-20 font-bold text-blue-700 whitespace-nowrap leading-[60px] tracking-[3.2px]">
            SWIFT RESOLUTION
          </div>
          <div className="h-0.5 mx-auto bg-blue-700 w-[148px]" />
          <img
            loading="lazy"
            src="../images/alertz/3.png"
            className="self-center mt-9 w-full rounded-3xl aspect-[0.93] max-w-[310px]"
          />
          <div className="mt-12 text-2xl font-medium leading-8 text-center whitespace-nowrap tracking-[2px]">
            Dispute Resolution
          </div>
          <div className="mt-11 text-center">
            <span className="font-bold">alert</span>{" "}
            <span className=" font-black text-orange-500">Z</span> has a
            platform that serves as a communication bridge, ensuring merchants
            and cardholders can address issues promptly. Experience faster
            dispute resolution and eliminate the need for chargebacks with
            direct issue resolution.
          </div>
          <div className="mt-12">
            <ul>
              <li>
                <span className="tracking-normal text-blue-700">
                  Bridging Communication
                </span>
                <span className="tracking-normal">
                  : Our platform facilitates direct and prompt communication
                  between parties.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-7">
            <ul>
              <li>
                <span className="tracking-normal text-blue-700">
                  Issue Resolution
                </span>
                <span className="tracking-normal">
                  : Merchants can address concerns directly with cardholders for
                  swift resolution.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <ul>
              <li>
                <span className="tracking-normal text-blue-700">
                  Expedited Dispute Resolution
                </span>
                <span className="tracking-normal">
                  : Experience faster resolution processes.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <ul>
              <li>
                <span className="tracking-normal text-blue-700">
                  Chargeback Avoidance
                </span>
                <span className="tracking-normal">
                  : Minimize the necessity of filing chargebacks through direct
                  issue resolution.
                </span>
              </li>
            </ul>
          </div>
          <div className="self-center mt-24 font-bold text-blue-700 whitespace-nowrap leading-[60px] tracking-[3.2px]">
            UPHOLDING USER SECURITY
          </div>
          <div className="h-0.5 mx-auto bg-blue-700 w-[178px]" />
          <img
            loading="lazy"
            src="../images/alertz/4.png"
            className="self-center mt-10 w-full rounded-3xl aspect-[0.88] max-w-[300px]"
          />
          <div className="mt-12 text-2xl font-medium leading-8 text-center tracking-[2px]">
            Preservation of chargeback rights
          </div>
          <div className="mt-11 text-center">
            Preserving chargeback rights is integral to our commitment to
            customer satisfaction and dispute resolution. We understand the
            importance of providing users with a reliable recourse in case of
            unresolved issues. We empower users with a secure and effective
            means to address disputes, reinforcing their confidence in our
            commitment to a fair and transparent resolution process.
          </div>
          <div className="mt-12">
            Commitment to resolving issues directly with merchants on behalf of
            users.
          </div>
          <div className="mt-8">
            Emphasis on initiating the traditional chargeback process if a
            resolution cannot be reached.
          </div>
          <div className="mt-8">
            Understanding the importance of protecting users.
          </div>
          <div className="mt-11">
            Striving to provide users with the best possible experience.
          </div>
        </div>
        <ContactSection />
        {/* <div className="flex flex-col self-stretch px-6 py-12 mt-24 w-full text-base tracking-wider leading-8 bg-blue-700 bg-opacity-10 text-zinc-500">
          <div className="mt-12 text-2xl font-bold tracking-wider text-center text-black whitespace-nowrap">
            Want to learn more?
          </div>
          <div className="mt-14 text-xl text-center text-black">
            Get in touch with us for any questions or assistance. We're here to
            help!
          </div>{" "}
          <div className="self-center mt-14 text-2xl font-bold tracking-wider text-center text-black">
            Contact Us
          </div>{" "}
          <div className="self-center mt-10 h-0.5 bg-blue-700 w-[120px]" />{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              First name
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Last name
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Email
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="justify-center items-start py-3.5 pr-16 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Phone
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center mt-3 whitespace-nowrap bg-white rounded">
            <div className="items-start pt-3.5 pr-16 pb-20 pl-4 rounded border border-solid border-[color:var(--M3-sys-light-outline,#79747E)]">
              Send us a message
            </div>
          </div>{" "}
          <div className="justify-center self-center px-8 py-1.5 mt-10 mb-8 font-medium text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px]">
            Submit
          </div>
        </div>{" "} */}
      </div>
    </>
  );
}

export default Alertz;
