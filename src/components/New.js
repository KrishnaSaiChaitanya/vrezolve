import * as React from "react";
import LogoSlider from "./LogoSlider";

function MyComponent(props) {
  return (
    <div className="flex flex-col justify-center bg-slate-50">
      <div className="flex flex-col justify-center w-full bg-slate-50 max-md:max-w-full">
        <div className="flex z-10 gap-5 justify-between items-center px-14 w-full whitespace-nowrap bg-white shadow-sm leading-[150%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="../images/logo.svg"
            className="self-stretch my-auto max-w-full aspect-[3.03] w-[152px]"
          />
          <div className="flex gap-5 self-stretch px-2.5 text-base text-zinc-700 max-md:flex-wrap max-md:max-w-full">
            {/* <div className="grow justify-center px-2.5 py-9 border-b-4 border-solid border-b-white">
              Why vrezolve
            </div> */}
            <div className="grow justify-center px-2.5 py-10 border-b-4 border-solid border-b-white">
              Home
            </div>
            <div className="grow justify-center px-2.5 py-10 border-b-4 border-solid border-b-white">
              Solutions
            </div>
            <div className="grow justify-center px-2.5 py-10 border-b-4 border-solid border-b-white">
              Partners
            </div>
            <div className="grow justify-center px-2.5 py-10 border-b-4 border-solid border-b-white">
              Blog
            </div>
            <div className="grow justify-center px-2.5 py-10 border-b-4 border-solid border-b-white">
              Contact Us
            </div>
          </div>
          <div className="justify-center self-stretch px-10 py-3.5 my-auto text-base text-white bg-sky-600 rounded-3xl">
            Login
          </div>
        </div>
        <div className="justify-end pl-16 w-full bg-blue-700 bg-opacity-7 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch py-1 my-auto text-6xl text-white leading-[66px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                <div className="self-start mt-1.5 font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                  Unleashing IT
                </div>

                <div className="mt-3 self-start font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                  Excellence
                </div>
                {/* <div className="mt-3 font-light tracking-tighter max-md:max-w-full max-md:text-4xl">
                  compliance
                </div> */}
                <div className="mt-9 text-lg leading-7 max-md:mr-1 max-md:max-w-full">
                  Discover the pinnacle of IT mastery with our comprehensive
                  solutions.
                </div>
                <div className="text-lg leading-7 max-md:mr-1 max-md:max-w-full">
                  From robust fraud defense to seamless dispute management and
                  beyond, we empower your digital landscape for unparalleled
                  success.
                </div>
                {/* <div className="text-lg leading-7 max-md:mr-1 max-md:max-w-full">
                  uncertainties with vrezolve. We’ll help your business grow safely
                  and{" "}
                </div> */}
                <div className="text-lg leading-7 max-md:mr-1 max-md:max-w-full">
                  confidently — no matter your industry or the challenges you
                  face.
                </div>
                <div className="justify-center self-start px-11 py-4 mt-14 text-base font-semibold leading-6 whitespace-nowrap bg-yellow-400 rounded-[50px] text-sky-950 max-md:px-5 max-md:mt-10">
                  LEARN MORE
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="../hero-1.svg"
                className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-5 py-12 w-full bg-white leading-[161%] text-zinc-700 max-md:max-w-full">
          <div className="mt-20 text-base font-bold leading-7 text-orange-500 uppercase whitespace-nowrap tracking-[2px] max-md:mt-10">
            WHAT Vrezolve OFFERS
          </div>
          <div className="text-blue-700 mt-9 text-5xl font-bold leading-[54.12px] max-md:max-w-full">
            Issuer and Merchant Solutions :
          </div>
          <div className="mt-2.5 text-5xl font-bold leading-[54.12px] text-stone-950 max-md:max-w-full">
            Empowering Seamless Transactions
          </div>
          <div className="mt-10 text-lg max-md:max-w-full">
            Experience unmatched efficiency with our tailored solutions designed
            for both issuers and merchants.
          </div>
          <div className="mt-3 text-lg max-md:max-w-full">
            Our tools ensure smooth and secure transactions.
          </div>
          <div className="mt-11 bg-sky-600 h-[3px] w-[200px] max-md:mt-10" />
          <div className="flex flex-col self-stretch px-16 mt-52 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-stone-950 max-md:max-w-full">
              Disput <span className="text-orange-500">Z</span>
            </div>
            <div className="self-start mt-6 text-lg  w-[550px] max-md:max-w-full">
              Our solution seamlessly integrates all aspects of chargeback
              operations, ensuring a cohesive process from start to finish.
            </div>
            <div className="self-start text-lg  w-[550px] max-md:max-w-full">
              The result is a holistic and efficient system designed to enhance
              every stage of the chargeback process, providing a seamless
              experience for both issuers and merchants.
            </div>

            <div className="flex gap-0.5 self-start mt-9 text-sky-600 whitespace-nowrap leading-[150%]">
              <div className="grow text-base text-blue-700  font-bold">
                Learn more
              </div>
            </div>

            <div className="self-end  w-[550px] mt-6 text-lg max-md:mr-1.5 max-md:max-w-full">
              <div className="self-center mt-40 ml-34 text-4xl font-bold leading-10 text-stone-950 max-md:mt-10">
                Alert <span className="text-orange-500">Z</span>
              </div>
              <p className="mt-5">
                Our solution facilitates instant communication of fraud and
                chargeback information, empowering both parties to combat fraud
                and swiftly resolve disputes. This not only enhances
                collaboration but also ensures the preservation of the issuer's
                chargeback rights throughout the process.
              </p>
              <div className="flex gap-1 self-end mt-9 mr-72 text-blue-700  whitespace-nowrap  max-md:mr-2.5">
                <div className="grow text-base font-bold">Learn more</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch px-16 mt-40 mb-64 w-full max-md:px-5 max-md:my-10 max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-stone-950 max-md:max-w-full">
              Reward <span className="text-orange-500">Z</span>
            </div>
            <div className="self-start mt-6 text-lg  w-[550px] max-md:max-w-full">
              Our solution seamlessly integrates all aspects of chargeback
              operations, ensuring a cohesive process from start to finish.
            </div>
            <div className="self-start text-lg  w-[550px] max-md:max-w-full">
              The result is a holistic and efficient system designed to enhance
              every stage of the chargeback process, providing a seamless
              experience for both issuers and merchants.
            </div>

            <div className="flex gap-0.5 self-start mt-9 text-sky-600 whitespace-nowrap leading-[150%]">
              <div className="grow text-base text-blue-700  font-bold">
                Learn more
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start px-16 py-12 w-full text-lg font-bold leading-7 text-white bg-blue-700 opacity-7  max-md:px-5 max-md:max-w-full">
          <div className="mt-11 text-base leading-7 text-orange-500 uppercase tracking-[2px] max-md:mt-10 max-md:max-w-full">
            PERSONALIZED SOLUTION
          </div>
          <div className="mt-7 text-5xl leading-[54.12px] max-md:max-w-full">
            Customize your{" "}
          </div>
          <div className="text-5xl leading-[54.12px] max-md:max-w-full">
            strategy
          </div>
          <div className="mt-6 max-md:max-w-full">
            Want to use the technology in a unique way? Have specific use{" "}
          </div>
          <div className="max-md:max-w-full">
            cases we haven’t outlined? Let us know. We can customize our{" "}
          </div>
          <div className="max-md:max-w-full">
            solutions to fit your business’s individual needs.
          </div>
          <div className="justify-center px-5 py-3.5 mt-14 mb-14 text-base font-semibold leading-6 whitespace-nowrap bg-teal-400 rounded-[50px] text-sky-950 max-md:my-10">
            Request a demo
          </div>
        </div>
        {/* <div className="flex z-10 flex-col justify-center items-end px-16 py-12 mt-0 w-full font-bold bg-white max-md:px-5 max-md:mt-0 max-md:max-w-full">
          <div className="flex flex-col mt-20 mr-14 mb-12 max-w-full w-[948px] max-md:my-10 max-md:mr-2.5">
            <div className="self-center text-base leading-7 text-sky-600 uppercase whitespace-nowrap tracking-[2px]">
              WHY CHOOSE vrezolve
            </div>
            <div className="mt-9 text-5xl leading-[54.12px] text-stone-950 max-md:max-w-full">
              Unique qualities you won’t find{" "}
            </div>
            <div className="flex flex-col mt-2.5 text-lg max-md:max-w-full">
              <div className="self-start ml-36 text-5xl font-bold whitespace-nowrap leading-[54.12px] text-stone-950 max-md:ml-2.5">
                {" "}
                anywhere else.
              </div>
              <div className="self-start mt-8 ml-3 leading-[161%] text-zinc-700 max-md:max-w-full">
                We don’t think vrezolve is better than other companies. We believe
                we are{" "}
              </div>
              <div className="mt-3 leading-7 text-zinc-700 max-md:max-w-full">
                different
                <span className="text-zinc-700">
                  . And that’s an important distinction. Because putting vrezolve
                  in the
                </span>
              </div>
              <div className="self-start mt-3 ml-3.5 leading-[161%] text-zinc-700 max-md:max-w-full">
                same category as any other service provider is like comparing
                apples to{" "}
              </div>
              <div className="self-start mt-3 ml-40 leading-[161%] text-zinc-700 max-md:ml-2.5">
                oranges. Here’s what sets us apart.
              </div>
              <div className="flex gap-2.5 self-center mt-24 text-xl font-bold whitespace-nowrap max-md:mt-10">
                <div className="text-sky-600 leading-[150%]">1.</div>
                <div className="grow leading-[120%] text-stone-950">
                  Complete Strategy
                </div>
              </div>
              <div className="self-end mt-4 mr-5 leading-[161%] text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
                You need protection against any threat that could come your way.{" "}
              </div>
              <div className="self-end mr-5 leading-[161%] text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
                And we have everything you could possibly need.
              </div>
              <div className="flex gap-2.5 self-center mt-14 text-xl font-bold whitespace-nowrap max-md:mt-10">
                <div className="text-sky-600 leading-[150%]">2.</div>
                <div className="grow leading-[120%] text-stone-950">
                  Unmatched Expertise
                </div>
              </div>
              <div className="self-end mt-4 mr-12 leading-[161%] text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
                We’ve spent decades learning the industry, testing strategies,{" "}
              </div>
              <div className="self-end mr-12 leading-[161%] text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
                gathering data, and analyzing trends. We know what it takes to{" "}
              </div>
              <div className="self-end mr-12 leading-[161%] text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
                succeed.
              </div>
              <div className="flex gap-2.5 self-center mt-14 text-xl font-bold whitespace-nowrap max-md:mt-10">
                <div className="text-sky-600 leading-[150%]">3.</div>
                <div className="grow leading-[120%] text-stone-950">
                  Flexible Technology
                </div>
              </div>
              <div className="self-end mt-4 leading-[161%] text-zinc-700 max-md:max-w-full">
                You decide how much or how little is automated. Then the{" "}
              </div>
              <div className="self-end leading-[161%] text-zinc-700 max-md:max-w-full">
                technology goes to work, replacing repetitive, error-prone
                processes{" "}
              </div>
              <div className="self-end leading-[161%] text-zinc-700 max-md:max-w-full">
                with accurate efficiency.
              </div>
              <div className="justify-center self-center px-5 py-4 mt-20 text-base font-semibold leading-6 text-white bg-sky-600 rounded-[50px] max-md:pr-5 max-md:mt-10">
                Discover what makes vrezolve different
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-center px-14 py-12 w-full bg-slate-50 text-stone-950 max-md:px-5 max-md:max-w-full">
          <div className="mt-20 text-base font-bold leading-7 text-orange-500 uppercase whitespace-nowrap tracking-[2px] max-md:mt-10">
            WHAT vrezolve OFFERS
          </div>
          <div className="mt-9 text-5xl font-bold leading-[54.12px] max-md:max-w-full">
            Any industry. Same great protection.
          </div>
          {/* <div className="mt-8 text-lg leading-7 text-zinc-700 max-md:max-w-full">
            Thousands of brands in countless industries around the world trust
            vrezolve to ensure safe,{" "}
          </div> */}
          {/* <div className="mt-3.5 text-lg leading-7 whitespace-nowrap text-zinc-700">
            secure interactions.
          </div> */}
          <div className="mt-10 max-w-full border-solid border-t-[3px] border-t-sky-600 h-[3px] w-[273px]" />
          <div className="flex justify-between gap-[25px] self-stretch px-3 mt-24 mb-12 text-base leading-5 whitespace-nowrap max-md:flex-wrap max-md:my-10 max-md:max-w-full">
            <div
              className="flex justify-center items-center flex-1 px-6 py-8 bg-white rounded-lg border-2 border-solid shadow-sm border-zinc-100 max-md:px-5 max-md:pt-10 transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-lg"
              style={{ height: "240px" }}
            >
              Alert Z
            </div>
            <div
              className="flex justify-center items-center flex-1 px-6 py-8 bg-white rounded-lg border-2 border-solid shadow-sm border-zinc-100 max-md:px-5 max-md:pt-10 transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-lg"
              style={{ height: "240px" }}
            >
              Disput Z
            </div>
            <div
              className="flex justify-center items-center flex-1 px-6 py-8 bg-white rounded-lg border-2 border-solid shadow-sm border-zinc-100 max-md:px-5 max-md:pt-10 transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-lg"
              style={{ height: "240px" }}
            >
              Reward Z
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-14 py-12 w-full text-5xl font-bold bg-sky-950 leading-[54.12px] text-stone-950 max-md:px-5 max-md:max-w-full">
          <div className="justify-center items-center text-center px-16 pt-24 mt-20 mb-12 bg-white rounded-2xl pb-[174px] max-md:px-5 max-md:pb-10 max-md:my-10 max-md:max-w-full">
            <p className="mb-20">Trusted by thousands of brands</p>
            <LogoSlider />
          </div>
        </div>
        {/* <div className="flex justify-center items-center px-16 py-12 w-full font-bold bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center my-20 max-md:my-10 max-md:max-w-full">
            <div className="text-base leading-7 text-sky-600 uppercase whitespace-nowrap tracking-[2px]">
              USE CASES
            </div>
            <div className="self-stretch mt-9 text-5xl leading-[54.12px] text-stone-950 max-md:max-w-full">
              Growth at every stage of the journey
            </div>
            <div className="mt-8 text-lg leading-7 text-zinc-700 max-md:max-w-full">
              How will you use vrezolve's trust and safety technology?
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col justify-center px-14 py-11 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-0 items-start pr-20 pb-6 mb-12 max-md:flex-wrap max-md:pr-5 max-md:mb-10 max-md:max-w-full">
            <div className="flex z-10 gap-0 text-3xl font-semibold leading-10 text-sky-600 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
              <div className="justify-center items-center px-6 bg-white border-2 border-solid aspect-square border-zinc-100 h-[65px] rounded-[65px] max-md:px-5">
                1
              </div>{" "}
              <div className="my-auto h-0.5 border-t-2 border-solid border-t-zinc-100 w-[199px]" />{" "}
              <div className="justify-center items-center px-6 bg-white border-2 border-solid aspect-square border-zinc-100 h-[65px] rounded-[65px] max-md:px-5">
                2
              </div>{" "}
              <div className="my-auto h-0.5 border-t-2 border-solid border-t-zinc-100 w-[199px]" />{" "}
              <div className="justify-center items-center px-6 bg-white border-2 border-solid aspect-square border-zinc-100 h-[65px] rounded-[65px] max-md:px-5">
                3
              </div>{" "}
              <div className="my-auto h-0.5 border-t-2 border-solid border-t-zinc-100 w-[199px]" />{" "}
              <div className="justify-center items-center px-6 bg-white border-2 border-solid aspect-square border-zinc-100 h-[65px] rounded-[65px] max-md:px-5">
                4
              </div>{" "}
              <div className="my-auto h-0.5 border-t-2 border-solid border-t-zinc-100 w-[199px]" />
            </div>{" "}
            <div className="mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-px text-lg leading-7 text-zinc-700">
                    <div className="self-stretch font-bold">
                      CONSUMER INSIGHTS
                    </div>{" "}
                    <div className="mt-8 whitespace-nowrap">
                      Learn about your target{" "}
                    </div>{" "}
                    <div className="whitespace-nowrap">
                      audience with consumer{" "}
                    </div>{" "}
                    <div>insights.</div>
                  </div>
                </div>{" "}
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-px text-lg leading-7 text-zinc-700">
                    <div className="self-stretch font-bold">
                      IDENTITY VERIFICATION
                    </div>{" "}
                    <div className="mt-8 whitespace-nowrap">
                      Separate good customers{" "}
                    </div>{" "}
                    <div className="whitespace-nowrap">
                      from bad with identity{" "}
                    </div>{" "}
                    <div>verification.</div>
                  </div>
                </div>{" "}
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow py-px text-lg leading-7 text-zinc-700">
                    <div className="font-bold">FRAUD DETECTION</div>{" "}
                    <div className="mt-8">Identify and prevent </div>{" "}
                    <div>suspicious activity with </div>{" "}
                    <div>fraud detection.</div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col self-stretch my-auto text-lg font-bold leading-7 basis-0 text-zinc-700">
              <div>CHARGEBACK </div> <div className="mt-4">PROTECTION</div>
            </div>{" "}
            <div className="mt-36 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-6 pr-12 pb-px text-lg leading-7 text-zinc-700">
                    <div>Intercept and resolve </div>{" "}
                    <div className="whitespace-nowrap">
                      disputes with chargeback{" "}
                    </div>{" "}
                    <div>protection.</div>
                  </div>
                </div>{" "}
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-6 pr-16 pb-px text-lg leading-7 text-zinc-700">
                    <div className="whitespace-nowrap">
                      Adhere to industry rules{" "}
                    </div>{" "}
                    <div>and policies with </div>{" "}
                    <div className="whitespace-nowrap">
                      regulatory compliance.
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col text-lg font-bold leading-7 basis-0 text-zinc-700">
              <div className="justify-center px-6 py-6 text-3xl font-semibold leading-10 text-sky-600 whitespace-nowrap bg-white border-2 border-solid border-zinc-100 rounded-[65px] max-md:px-5">
                5
              </div>{" "}
              <div className="mt-8">REGULATORY </div>{" "}
              <div className="mt-4">COMPLIANCE</div>
            </div>
          </div>
        </div>{" "} */}
        {/* <div className="flex justify-center items-center px-16 py-12 w-full bg-sky-950 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center mt-20 mb-10 max-w-full w-[744px] max-md:mt-10">
            <div className="text-base font-bold leading-7 text-teal-400 uppercase whitespace-nowrap tracking-[2px]">
              WHAT OUR CLIENTS SAY
            </div>{" "}
            <div className="self-stretch mt-9 text-5xl font-bold text-white leading-[54.12px] max-md:max-w-full">
              Client confidence. Proven success.
            </div>{" "}
            <div className="flex flex-col items-start px-9 py-12 mt-28 max-w-full bg-white border-t-4 border-solid border-t-sky-600 w-[636px] max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c8f6f4fb23880b05f1064c76e77bd2392f752ad08d3c9fc0709bd76691f693dd?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8f6f4fb23880b05f1064c76e77bd2392f752ad08d3c9fc0709bd76691f693dd?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8f6f4fb23880b05f1064c76e77bd2392f752ad08d3c9fc0709bd76691f693dd?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8f6f4fb23880b05f1064c76e77bd2392f752ad08d3c9fc0709bd76691f693dd?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8f6f4fb23880b05f1064c76e77bd2392f752ad08d3c9fc0709bd76691f693dd?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8f6f4fb23880b05f1064c76e77bd2392f752ad08d3c9fc0709bd76691f693dd?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8f6f4fb23880b05f1064c76e77bd2392f752ad08d3c9fc0709bd76691f693dd?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8f6f4fb23880b05f1064c76e77bd2392f752ad08d3c9fc0709bd76691f693dd?apiKey=67296d98361248faadca04e106a4f278&"
                className="self-center max-w-full aspect-[4.55] w-[300px]"
              />{" "}
              <div className="mt-10 text-lg leading-7 text-black max-md:max-w-full">
                &quot;The ability to write complex policies to decline, review,
                or{" "}
              </div>{" "}
              <div className="text-lg leading-7 text-black max-md:max-w-full">
                approve orders has been key for us. When I need a new rule{" "}
              </div>{" "}
              <div className="text-lg leading-7 text-black max-md:max-w-full">
                created to stop an emerging threat, our team can easily set{" "}
              </div>{" "}
              <div className="text-lg leading-7 text-black max-md:max-w-full">
                that up. And that’s been amazing.&quot;
              </div>{" "}
              <div className="flex gap-4 justify-between self-stretch pr-12 pl-4 mt-14 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <div className="justify-center items-center pr-7 pl-2 text-5xl leading-10 text-white bg-sky-600 aspect-square h-[60px] rounded-[40px] max-md:pr-5 max-md:text-4xl">
                  format_quote
                </div>{" "}
                <div className="flex flex-col flex-1 items-start py-0.5 pr-20 pl-3 max-md:pr-5 max-md:max-w-full">
                  <div className="text-xl font-bold leading-9 text-black">
                    Angela Kourtoglou
                  </div>{" "}
                  <div className="text-sm leading-5 text-zinc-700">
                    Senior Director of Operations
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-center px-16 pb-4 mt-2.5 max-w-full w-[445px] max-md:px-5">
              <div className="flex gap-2 w-[94px]">
                <div className="flex-1 shrink-0 bg-white h-[29px] rounded-[100px]" />{" "}
                <div className="flex-1 shrink-0 bg-teal-400 h-[29px] rounded-[100px]" />{" "}
                <div className="flex-1 shrink-0 bg-white h-[29px] rounded-[100px]" />{" "}
                <div className="flex-1 shrink-0 bg-white h-[29px] rounded-[100px]" />{" "}
                <div className="flex-1 shrink-0 bg-white h-[29px] rounded-[100px]" />{" "}
                <div className="flex-1 shrink-0 bg-white h-[29px] rounded-[100px]" />
              </div>
            </div>
          </div>
        </div>{" "} */}
        <div className="flex flex-col justify-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="mt-9 mr-6 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-12 text-lg font-bold leading-7 text-zinc-700 max-md:mt-10 max-md:max-w-full">
                  <div className="text-base leading-7 text-sky-600 uppercase tracking-[2px] max-md:max-w-full">
                    EXPLORE vREZOLVE
                  </div>{" "}
                  <div className="mt-9 text-5xl leading-[54.12px] text-stone-950 max-md:max-w-full">
                    Want to learn more?
                  </div>{" "}
                  <div className="self-start mt-9 max-md:max-w-full">
                    Schedule a conversation with our team to find out how to{" "}
                  </div>{" "}
                  <div className="self-start max-md:max-w-full">
                    grow your business with more confidence.
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="justify-center items-center px-16 pt-20 pb-12 w-full text-4xl font-bold whitespace-nowrap bg-white rounded border-t-4 border-solid shadow-lg border-t-sky-600 leading-[53.9px] text-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  Schedule a demo
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="mt-12 max-w-full h-1 border-2 border-sky-600 border-solid w-[263px] max-md:mt-10" />{" "}
          <div className="mt-10 mr-6 text-lg leading-7 text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
            Certified and secure technology
          </div>{" "}
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd8bc03025b062a0099fcfd4f398070cdc228ed2e19a9ab8cf4c424cc05725b7?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd8bc03025b062a0099fcfd4f398070cdc228ed2e19a9ab8cf4c424cc05725b7?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd8bc03025b062a0099fcfd4f398070cdc228ed2e19a9ab8cf4c424cc05725b7?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd8bc03025b062a0099fcfd4f398070cdc228ed2e19a9ab8cf4c424cc05725b7?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd8bc03025b062a0099fcfd4f398070cdc228ed2e19a9ab8cf4c424cc05725b7?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd8bc03025b062a0099fcfd4f398070cdc228ed2e19a9ab8cf4c424cc05725b7?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd8bc03025b062a0099fcfd4f398070cdc228ed2e19a9ab8cf4c424cc05725b7?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd8bc03025b062a0099fcfd4f398070cdc228ed2e19a9ab8cf4c424cc05725b7?apiKey=67296d98361248faadca04e106a4f278&"
            className="mt-7 mb-12 max-w-full aspect-[7.14] w-[526px] max-md:mb-10"
          />
        </div>{" "}
        {/* <div className="flex flex-col justify-center items-center py-12 w-full bg-slate-50 max-md:max-w-full">
          <div className="mt-20 max-w-full w-[1320px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-32 max-md:mt-10">
                  <div className="text-sm font-light leading-7 text-zinc-700">
                    vrezolve is trust and safety technology.
                  </div>{" "}
                  <div className="mt-4 text-sm font-light leading-7 whitespace-nowrap text-zinc-700">
                    We deliver confidence in every interaction.
                  </div>{" "}
                  <div className="flex gap-5 justify-between pr-20 mt-32 max-md:pr-5 max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d6113163d0147bb4dbfdd1a79379f40600a9c0ea29aeee8691a87361a786a20?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-6 aspect-[1.2]"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7846fc2cc9f44c6ea4b2593ed772814be801297f2b72657764794df5beacdbc?apiKey=67296d98361248faadca04e106a4f278&"
                      className="aspect-[0.45] w-[9px]"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4de0ad199d221a85b0dfbbf64a30b75de38eb613200514e59b919342b7944164?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-5 aspect-square"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2be46d49e2f3585f9b7f82cb9706c0e47487f85b3cb08a0354e77ba4522f2a98?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-5 aspect-square"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eab7a1ef273a30389e3a395337e33ddb3e40f1ebf081b60d5f44abf43fe85c53?apiKey=67296d98361248faadca04e106a4f278&"
                      className="w-5 aspect-square"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                <div className="grow px-3 pt-1.5 pb-3 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-base leading-10 text-zinc-700 max-md:mt-10">
                        <div className="text-base font-semibold leading-6 text-sky-600 tracking-[2px]">
                          SUPPORT
                        </div>{" "}
                        <div className="mt-7">Log in</div>{" "}
                        <div className="mt-7">Developers</div>{" "}
                        <div className="mt-7">Pricing</div>{" "}
                        <div className="mt-7">Support</div>{" "}
                        <div className="mt-7">FAQs</div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-base leading-10 text-zinc-700 max-md:mt-10">
                        <div className="text-base font-semibold leading-6 text-sky-600 tracking-[2px]">
                          COMPANY
                        </div>{" "}
                        <div className="mt-7">About Us</div>{" "}
                        <div className="mt-8">Careers</div>{" "}
                        <div className="mt-8">Events</div>{" "}
                        <div className="mt-8">News & Press</div>{" "}
                        <div className="mt-8 whitespace-nowrap">
                          Partner With Us
                        </div>{" "}
                        <div className="mt-8 whitespace-nowrap">
                          Branding Guidelines
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-10 text-zinc-700 max-md:mt-10">
                        <div className="text-base font-semibold leading-6 text-sky-600 tracking-[2px]">
                          TRENDING
                        </div>{" "}
                        <div className="mt-7">Fraud Detection Software</div>{" "}
                        <div className="mt-8">Ecommerce Fraud Prevention</div>{" "}
                        <div className="mt-8">Chargeback Management</div>{" "}
                        <div className="mt-7 whitespace-nowrap">
                          Machine Learning Fraud Detection
                        </div>{" "}
                        <div className="mt-7">Account Takeover Prevention</div>{" "}
                        <div className="mt-8">Trust and Safety</div>{" "}
                        <div className="mt-7">Consumer Insights</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center self-stretch py-6 mt-28 w-full text-sm leading-5 text-white bg-sky-950 max-md:mt-10 max-md:max-w-full">
            <div className="flex justify-center items-center px-16 py-0.5 w-full max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between max-w-full w-[467px] max-md:flex-wrap">
                <div>Terms of Use</div> <div>Compliance</div> <div>Privacy</div>{" "}
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>{" "}
          <div className="flex gap-5 justify-between px-5 mt-8 mb-52 text-xs leading-4 text-gray-600 max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/171b840cd310e81a999537bbeba512b68fa6f3f5d5c5e9e830502e93eabee93d?apiKey=67296d98361248faadca04e106a4f278&"
              className="my-auto aspect-[3.23] w-[84px]"
            />{" "}
            <div className="w-0.5 border border-solid border-zinc-500 h-[38px]" />{" "}
            <div className="flex flex-col flex-1 self-start pr-2 max-md:max-w-full">
              <div className="max-md:max-w-full">
                ©2024, Equifax Inc., All rights reserved. Equifax and the
                Equifax marks used herin are trademarks of Equifax Inc. vrezolve is
                a{" "}
              </div>{" "}
              <div className="max-md:max-w-full">
                trademark of Equifax Inc. Other product and company names
                mentioned herin are the property of their respective owners.
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default MyComponent;
