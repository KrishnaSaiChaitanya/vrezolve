import * as React from "react";

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-stretch px-14 py-12 bg-white max-md:px-5">
      <header className="header mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="input-group flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
            <div className="form-group input-group grow items-stretch mt-3 text-blue-700 max-md:max-w-full">
              <h1 className="text-5xl font-bold leading-[80px] tracking-[2.4px] max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
                Unleashing
                <span className="text-blue-700"> IT</span> Excellence
              </h1>
              <div className="mt-12 text-xl tracking-wide leading-8 text-black max-md:mt-10 max-md:max-w-full">
                Discover the pinnacle of IT mastery with our comprehensive
                solutions. From robust fraud defense to seamless dispute
                management and beyond, we empower your digital landscape for
                unparalleled success.
              </div>
              <div className="mt-12 text-3xl font-medium tracking-widest leading-[62px] max-md:mt-10 max-md:max-w-full">
                Fraud Defense, Dispute Management & More
              </div>
            </div>
            <div className="button-group">
              <button className="button">Click Me</button>
            </div>
          </div>
          <div className="image-container flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf39bb07ac78fcd46a46840c01eb2717848c0e4b08b8fbb636d30a93b4b44849?apiKey=67296d98361248faadca04e106a4f278&"
              className="object-contain object-center w-full aspect-[1.41] max-md:max-w-full"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
export default LandingPage;
