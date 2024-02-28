import React from "react";
import AlertzHero from "../components/hero/AlertzHero";
import CardsSection from "../components/CardsSection";

import ContactSection from "../components/ContactSection";
import AlertzMobile from "../components/AlertzMobile";

function Alertz() {
  return (
    <>
      <div className="flex flex-col md:flex hidden sm:block">
        <div className="flex flex-col items-center py-[40px] bg-white">
          <AlertzHero />
          <div className="flex justify-center items-center self-stretch mt-[40px]   py-[40px] w-full bg-[#f2f5fc]  max-md:max-w-full">
            <div
              className="justify-center mt-16 mb-12 max-w-full  max-md:my-10"
              id="hero-section"
            >
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center self-stretch pt-3 pr-7 my-auto text-xl leading-8 text-black max-md:mt-10 max-md:max-w-full">
                    <div className="self-end text-4xl font-bold  leading-[60px] max-md:max-w-full">
                      Stay informed & secure with{" "}
                      <span className="text-blue-700">real-time alerts</span>
                    </div>
                    <div className="self-end mt-12 w-[498px] max-md:mt-10 max-md:max-w-full">
                      Our platform provides users with instant notifications,
                      keeping them updated on critical information such as
                      transactions, account activity, and security alerts.{" "}
                    </div>
                    <div className="flex gap-5 justify-between mt-9 mr-3.5 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                      <img
                        alt="vrezolve"
                        loading="lazy"
                        src="../images/cube.svg"
                        className="my-auto aspect-square w-[45px]"
                      />
                      <div className="flex-auto max-md:max-w-full">
                        This proactive approach empowers users to stay ahead of
                        any potential issues, enabling swift actions and
                        ensuring a secure and seamless experience.
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between mt-6 mr-3.5 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                      <img
                        alt="vrezolve"
                        loading="lazy"
                        src="../images/cube.svg"
                        className="my-auto aspect-square w-[45px]"
                      />
                      <div className="flex-auto max-md:max-w-full">
                        With real-time alerts, you're always in the loop,
                        enhancing your peace of mind and confidence in your
                        financial interactions.
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                  <img
                    alt="vrezolve"
                    loading="lazy"
                    srcSet="../images/alertz/section-1.svg"
                    id="section-image"
                    // className="w-[500px] m-auto"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="mt-[40px] text-4xl font-bold text-center text-black leading-[60px] w-[593px] max-md:mt-10 max-md:max-w-full">
            <span className="text-blue-700">Streamlined</span> Protection,
            Effortless <span className="text-blue-700">Monitoring</span>
          </div>{" "}
          <div className="mt-6 text-xl leading-8 text-center text-black w-[779px] max-md:max-w-full">
            Our unique dashboard features an intuitive design, providing you
            with a simple yet powerful tool to safeguard your transactions.
            Elevate your defenses effortlessly with our advanced system,
            meticulously designed to thwart chargeback alerts and deter fraud
            concerns.
          </div>{" "}
          <div className="mt-6 text-4xl font-bold text-center text-black leading-[60px] max-md:mt-10">
            Key features spotlight
          </div>{" "}
          <div className="justify-center flex mt-[40px] max-w-full w-[1040px] max-md:mt-10">
            <div className="flex  gap-[200px]  max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-12 py-12 w-full bg-white rounded-3xl shadow-md max-md:px-5 max-md:mt-10">
                  <img
                    alt="vrezolve"
                    loading="lazy"
                    src="../images/alertz/feature-1.svg"
                    className="w-full aspect-square "
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col flex-wrap justify-center content-center self-stretch my-auto text-3xl leading-6 text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-5 max-md:flex-wrap max-md:max-w-full">
                    <img
                      alt="vrezolve"
                      loading="lazy"
                      src="../images/cube.svg"
                      className="aspect-square w-[40px]"
                    />{" "}
                    <div className="grow my-auto">Real-Time Alerts</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between pr-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <img
                      alt="vrezolve"
                      loading="lazy"
                      src="../images/cube.svg"
                      className="aspect-square w-[40px]"
                    />{" "}
                    <div className="grow my-auto">Visual analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="justify-center mt-6 max-w-full flex  w-[1040px]">
            <div className="flex  gap-[200px]  max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-5 py-5 w-full bg-white rounded-3xl shadow-md max-md:px-5 max-md:mt-10">
                  <img
                    alt="vrezolve"
                    loading="lazy"
                    srcSet="../images/alertz/feature-2.svg"
                    className="w-full aspect-square"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col flex-wrap justify-center content-center self-stretch my-auto text-3xl leading-6 text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-5 max-md:flex-wrap max-md:max-w-full">
                    <img
                      alt="vrezolve"
                      loading="lazy"
                      src="../images/cube.svg"
                      className="aspect-square w-[38px]"
                    />{" "}
                    <div className="grow my-auto">Risk level indicators</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between pr-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <img
                      alt="vrezolve"
                      loading="lazy"
                      src="../images/cube.svg"
                      className="aspect-square w-[40px]"
                    />{" "}
                    <div className="grow my-auto">Custom widgets</div>
                  </div>
                  <div className="flex gap-5 justify-between pr-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <img
                      alt="vrezolve"
                      loading="lazy"
                      src="../images/cube.svg"
                      className="aspect-square w-[45px]"
                    />{" "}
                    <div className="grow my-auto">Real - time reporting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="justify-center mt-6 mb-[40px] max-w-full flex  w-[1030px]">
            <div className="flex  gap-[200px]  max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-5 py-5 w-full bg-white rounded-3xl shadow-md max-md:px-5 max-md:mt-10">
                  <img
                    alt="vrezolve"
                    loading="lazy"
                    srcSet="../images/alertz/feature-3.svg"
                    className="w-full aspect-square"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col flex-wrap justify-center content-center self-stretch my-auto text-3xl leading-6 text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-5 max-md:flex-wrap max-md:max-w-full">
                    <img
                      alt="vrezolve"
                      loading="lazy"
                      src="../images/cube.svg"
                      className="aspect-square w-[38px]"
                    />{" "}
                    <div className="grow my-auto">Quick action buttons</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between pr-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <img
                      alt="vrezolve"
                      loading="lazy"
                      src="../images/cube.svg"
                      className="aspect-square w-[45px]"
                    />{" "}
                    <div className="grow my-auto">Historical data access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <CardsSection />
          <div className="justify-center mt-[40px] max-w-full w-[1200px] max-md:mt-10">
            <div
              className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
              id="hero-section"
            >
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-5 pt-3 text-xl leading-8 text-black max-md:mt-10 max-md:max-w-full">
                  <div className="font-bold text-blue-700 leading-[150%] tracking-[4px] max-md:max-w-full">
                    PROACTIVE ALERTS
                  </div>{" "}
                  <div className="mt-6 text-4xl font-bold leading-[60px] max-md:mt-10 max-md:max-w-full">
                    Fraud Detection and Prevention
                  </div>{" "}
                  <div className="mt-6 max-md:mt-10 max-md:max-w-full">
                    <span className="font-bold">alert</span>
                    <span className=" font-black text-orange-500">Z</span>{" "}
                    proactively notifies merchants and issuers of any suspicious
                    transactions, empowering them to take immediate action. Our
                    mission is to stay ahead of the fraudsters, and we're proud
                    to offer best-in-class solutions that protect our clients
                    from the ever-present threat of fraud.
                  </div>
                  <div className="mt-4 max-md:max-w-full">
                    <ul>
                      <li>
                        <span className="text-blue-700">
                          Proactive Notifications
                        </span>
                        : Immediate alerts for merchants and issuers on
                        suspicious transactions.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 max-md:max-w-full">
                    <ul>
                      <li>
                        <span className="text-blue-700">
                          Empowerment to Act
                        </span>
                        : Enabling swift action in response to potential
                        threats.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 max-md:max-w-full">
                    <ul>
                      <li>
                        <span className="text-blue-700">
                          Stay Ahead of Fraud
                        </span>
                        : A commitment to staying one step ahead of fraudsters.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 max-md:max-w-full">
                    <ul>
                      <li>
                        <span className="text-blue-700">
                          Best-in-Class Solutions
                        </span>
                        : Providing top-notch tools for client protection
                        against the ever-present threat of fraud
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  alt="vrezolve"
                  loading="lazy"
                  srcSet="../images/alertz/1.svg"
                  id="section-image"
                  // className="w-[500px] m-auto"
                />
              </div>
            </div>
          </div>
          <div className="justify-center mt-[40px] max-w-full w-[1179px] max-md:mt-10">
            <div
              className="flex  max-md:flex-col max-md:gap-0 max-md:"
              id="hero-section"
            >
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  alt="vrezolve"
                  loading="lazy"
                  srcSet="../images/alertz/2.svg"
                  id="section-image"
                  // className="w-[500px] m-auto"
                />
              </div>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-5 text-xl leading-8 text-black max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col justify-center p-3  leading-[150%] max-md:pr-5 max-md:max-w-full">
                    <div className="text-blue-700 font-bold  tracking-[4px] max-md:max-w-full">
                      SWIFT RESOLUTION
                    </div>
                    <div className="mt-6 font-bold  text-4xl max-md:mt-10 max-md:max-w-full">
                      Dispute Resolution
                    </div>
                    <div className="mt-6 leading-8 max-md:mt-10 max-md:max-w-full">
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
                  <div className="mt-3 max-md:max-w-full">
                    <ul>
                      <li>
                        <span className="text-blue-700">
                          Bridging Communication
                        </span>
                        : Our platform facilitates direct and prompt
                        communication between parties.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 max-md:max-w-full">
                    <ul>
                      <li>
                        <span className="text-blue-700">Issue Resolution</span>:
                        Merchants can address concerns directly with cardholders
                        for swift resolution.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 max-md:max-w-full">
                    <ul>
                      <li>
                        <span className="text-blue-700">
                          Expedited Dispute Resolution
                        </span>
                        : Experience faster resolution processes.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 max-md:max-w-full">
                    <ul>
                      <li>
                        <span className="text-blue-700">
                          Chargeback Avoidance
                        </span>
                        : Minimize the necessity of filing chargebacks through
                        direct issue resolution.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center mt-[40px] max-w-full w-[1129px] max-md:mt-10">
            <div
              className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
              id="hero-section"
            >
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-5 text-xl text-black max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col justify-center p-3 max-md:pr-5 max-md:max-w-full">
                    <div className="text-blue-700 font-bold  leading-[150%] tracking-[4px] max-md:max-w-full">
                      UPHOLDING USER SECURITY
                    </div>
                    <div className="mt-6  font-bold text-4xl leading-[60px] max-md:mt-10 max-md:max-w-full">
                      Preservation of Chargeback Rights
                    </div>
                    <div className="mt-6 leading-8 max-md:mt-10 max-md:max-w-full">
                      Preserving chargeback rights is integral to our commitment
                      to customer satisfaction and dispute resolution. We
                      understand the importance of providing users with a
                      reliable recourse in case of unresolved issues. We empower
                      users with a secure and effective means to address
                      disputes, reinforcing their confidence in our commitment
                      to a fair and transparent resolution process.
                    </div>
                  </div>
                  <div className="mt-3 max-md:max-w-full">
                    <ul>
                      <li>
                        Commitment to resolving issues directly with merchants
                        on behalf of users.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 max-md:max-w-full">
                    <ul>
                      <li>
                        Emphasis on initiating the traditional chargeback
                        process if a resolution cannot be reached.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 max-md:max-w-full">
                    <ul>
                      <li>Understanding the importance of protecting users.</li>
                    </ul>
                  </div>
                  <div className="mt-3 max-md:max-w-full">
                    <ul>
                      <li>
                        Striving to provide users with the best possible
                        experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  alt="vrezolve"
                  loading="lazy"
                  srcSet="../images/alertz/3.svg"
                  id="section-image"
                  // className="w-[500px] m-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
      <div className="sm:flex md:hidden">
        <AlertzMobile />
      </div>
    </>
  );
}

export default Alertz;
