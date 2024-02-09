import React, { useState, useEffect } from "react";

function LoginNavbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        // Change 100 to the desired scroll height threshold
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        isNavbarFixed
          ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
          : "mt-10"
      }`}
    >
      <div className="flex mt-3 gap-5 justify-between items-stretch px-5 max-md:flex-wrap py-2">
        <img src="../images/logo.svg" />
        <div className="md:flex gap-6 justify-between items-stretch p-6 text-xl text-center text-black whitespace-nowrap tracking-[2px] max-md:flex-wrap max-md:px-5 max-md:max-w-full hidden">
          <div className="leading-[150%]">Home</div>
          <div className="leading-[150%]">Solutions</div>
          <div className="leading-[150%]">Partners</div>
          <div className="leading-[150%]">Blog</div>
          <div className="grow leading-[150%]">Contact Us</div>
        </div>
        <button className="md:flex justify-center items-stretch px-12 py-1.5 my-auto text-xl font-medium tracking-wider leading-8 text-center text-white bg-orange-500 rounded-[100px] max-md:px-5 hidden transition-transform duration-300 transform hover:scale-105">
          Get In Touch
        </button>
      </div>
      {!isNavbarFixed && <div className="mt-3 h-[3px] bg-[#0033cc] w-full" />}
    </div>
  );
}

export default LoginNavbar;
