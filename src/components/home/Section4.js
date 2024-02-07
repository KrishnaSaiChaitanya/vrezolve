import * as React from "react";

function Section4() {
  return (
    <section className="mb-5 flex flex-col items-center px-14 py-12  max-md:px-5">
      <div className="ml-4 flex flex-col items-stretch self-stretch max-md:max-w-full">
        <h1 className="text-4xl  font-semibold leading-5 text-orange-500 tracking-[5px] max-md:max-w-full">
          <span className="font-bold text-black">alert</span>{" "}
          <span className=" font-black text-orange-500">Z</span>
        </h1>

        <p className="mt-12 text-xl tracking-wider leading-8 text-black max-md:mt-10 max-md:max-w-full">
          Our solution facilitates instant communication of fraud and chargeback
          information, empowering both parties to combat fraud and swiftly
          resolve disputes. This not only enhances collaboration but also
          ensures the preservation of the issuer's chargeback rights throughout
          the process.
        </p>
      </div>
      <form className="mt-20 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-1 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[54%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&"
              className="object-contain object-left w-[80%] m-auto shadow-sm max-md:mt-10 max-md:max-w-full"
            />
          </div>

          <div className="flex flex-col items-stretch ml-1 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start mt-3 max-md:mt-10 max-md:max-w-full">
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
      </form>
    </section>
  );
}
export default Section4;
