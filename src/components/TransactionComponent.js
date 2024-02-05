import * as React from "react";
import Section3 from "./home/Section3";

function TransactionComponent() {
  return (
    <section className="mb-5 flex flex-col items-center px-14 py-12 bg-blue-700 bg-opacity-10 max-md:px-5">
      <header className="mt-20 text-5xl font-bold text-center text-black leading-[70px] tracking-[2.4px] w-[951px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[64px]">
        <span className="text-blue-700">Issuer and Merchant Solutions</span> :
        Empowering Seamless Transactions
      </header>

      <p className="mt-16 text-xl tracking-wider leading-8 text-center text-black w-[775px] max-md:mt-10 max-md:max-w-full">
        Experience unmatched efficiency with our tailored solutions designed for
        both issuers and merchants. Our comprehensive suite of tools empowers
        seamless transactions, ensuring a smooth and secure interaction between
        issuers and merchants.
      </p>

      <form className="mt-20 w-full max-w-[1285px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-1 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[54%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b807fd5e517b2d676eae2b88af5edfed229b228e5df5af05efe42cf30d2a7222?apiKey=67296d98361248faadca04e106a4f278&"
              className="object-contain object-left w-[90%] m-auto shadow-sm max-md:mt-10 max-md:max-w-full"
            />
          </div>

          <div className="flex flex-col items-stretch ml-1 w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start mt-3 max-md:mt-10 max-md:max-w-full">
              <div className=" ml-4 flex flex-col items-stretch self-stretch max-md:max-w-full">
                <h1 className="text-4xl  font-semibold leading-5 text-orange-500 tracking-[5px] max-md:max-w-full">
                  <span className="font-bold text-black">dispute</span>{" "}
                  <span className=" font-black text-orange-500">Z</span>
                </h1>

                <p className="mt-12 text-xl tracking-wider leading-8 text-black max-md:mt-10 max-md:max-w-full">
                  Our solution seamlessly integrates all aspects of chargeback
                  operations, ensuring a cohesive process from start to finish.
                  The result is a holistic and efficient system designed to
                  enhance every stage of the chargeback process, providing a
                  seamless experience for both issuers and merchants.
                </p>
              </div>

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

              <button className="justify-center items-stretch px-11 py-1.5 mt-12 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-orange-500 rounded-[100px] tracking-[2px] max-md:px-5 max-md:mt-10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </form>
      <Section3 />
    </section>
  );
}
export default TransactionComponent;
