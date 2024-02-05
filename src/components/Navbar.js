import React from "react";

function Navbar() {
  return (
    <div className="flex gap-5 justify-between items-start mt-5 w-full whitespace-nowrap max-w-[1180px] max-md:flex-wrap max-md:max-w-full">
      <header className="flex flex-col items-stretch px-5">
        <h1
          className="self-center text-4xl italic font-extrabold leading-6 text-orange-500 tracking-[4px]"
          aria-label="Vrezolve"
        >
          vre<span className="italic text-orange-500">z</span>olve
        </h1>
        <p className="mt-6 text-xl leading-6 text-black tracking-[2px]">
          Smart Payment Solutions
        </p>
      </header>
      <nav className="flex gap-5 justify-between items-stretch p-6 text-xl text-center text-black tracking-[2px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <a href="#" className="leading-[150%]" aria-label="Home" role="button">
          Home
        </a>
        <a
          href="#"
          className="leading-[150%]"
          aria-label="Solutions"
          role="button"
        >
          Solutions
        </a>
        <a
          href="#"
          className="leading-[150%]"
          aria-label="Partners"
          role="button"
        >
          Partners
        </a>
        <a href="#" className="leading-[150%]" aria-label="Blog" role="button">
          Blog
        </a>
        <a
          href="#"
          className="grow leading-[150%]"
          aria-label="Contact Us"
          role="button"
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
}
export default Navbar;
