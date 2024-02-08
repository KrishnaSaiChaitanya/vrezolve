import React from "react";

function LoginNavbar() {
  return (
    <div>
      <div className="flex mt-12 gap-5 justify-between items-stretch px-5 max-md:flex-wrap py-2">
        <img src="../images/logo.svg" />
        <div className="md:flex gap-6 justify-between items-stretch p-6 text-xl text-center text-black whitespace-nowrap tracking-[2px] max-md:flex-wrap max-md:px-5 max-md:max-w-full hidden">
          <div className="leading-[150%]">Home</div>
          <div className="leading-[150%]">Solutions</div>
          <div className="leading-[150%]">Partners</div>
          <div className="leading-[150%]">Blog</div>
          <div className="grow leading-[150%]">Contact Us</div>
        </div>
        <button class="md:flex justify-center items-stretch px-12 py-1.5 my-auto text-xl font-medium tracking-wider leading-8 text-center text-white bg-orange-500 rounded-[100px] max-md:px-5 hidden transition-transform duration-300 transform hover:scale-105">
          Get In Touch
        </button>
      </div>
      <div className="mt-3 h-[2px] border-2 border-sky-600 border-solid w-full" />
    </div>
  );
}

export default LoginNavbar;
