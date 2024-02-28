import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function LoginNavbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState();
  const [isDesktopDropdownOpen, setisDesktopDropdownOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);
  const dropdownRef = useRef(null);
  const desktopdropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        document.body.style.overflowY = "auto"; // Enable scrolling when sidebar is closed
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setDropdownOpen(false);
        document.body.style.overflowY = "auto"; // Enable scrolling when sidebar is closed
      }
      if (
        desktopdropdownRef.current &&
        !desktopdropdownRef.current.contains(event.target)
      ) {
        setisDesktopDropdownOpen(false);
        document.body.style.overflowY = "auto"; // Enable scrolling when sidebar is closed
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflowY = "hidden"; // Disable scrolling when sidebar is opened
    } else {
      document.body.style.overflowY = "auto"; // Enable scrolling when sidebar is closed
    }
  };
  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setDropdownOpen(!isDropdownOpen);
    if (!isMenuOpen) {
      document.body.style.overflowY = "hidden"; // Disable scrolling when sidebar is opened
    } else {
      document.body.style.overflowY = "auto"; // Enable scrolling when sidebar is closed
    }
  };
  const location = useLocation();
  return (
    <div>
      <div
        className={` ${
          isNavbarFixed
            ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
            : "mt-4"
        }`}
      >
        {/* <div className="flex mt-3 gap-[32px] justify-between items-stretch px-5 max-md:flex-wrap py-2">
          <img src="../images/logo.svg" alt="Logo" />
          <div className="md:flex gap-[32px] justify-between items-stretch p-6 text-xl text-center text-black whitespace-nowrap max-md:flex-wrap max-md:px-5 max-md:max-w-full hidden">
            <Link
              to="/"
              className={`leading-[150%] ${
                location.pathname === "/" ? "text-[#0033cc] cursor-pointer" : ""
              }`}
            >
              Home
            </Link>
            <div
              className={`leading-[150%] ${
                location.pathname.includes("/solutions")
                  ? "text-[#0033cc] cursor-pointer"
                  : ""
              }`}
              onClick={() => {
                setisDesktopDropdownOpen(!isDesktopDropdownOpen);
              }}
            >
              Solutions
            </div>
            <Link
              to="/partners"
              className={`leading-[150%] ${
                location.pathname === "/partners"
                  ? "text-[#0033cc] cursor-pointer"
                  : ""
              }`}
            >
              Partners
            </Link>
            <Link
              to="/blog"
              className={`leading-[150%] ${
                location.pathname === "/blog"
                  ? "text-[#0033cc] cursor-pointer"
                  : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`grow leading-[150%] ${
                location.pathname === "/contact"
                  ? "text-[#0033cc] cursor-pointer"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:flex justify-center items-stretch px-6 py-2 my-auto text-xl font-medium tracking-wider leading-8 text-center text-white bg-[#ff6600] rounded-[100px] max-md:px-5 hidden transition-transform duration-300 transform hover:scale-105"
            // onClick={toggleMenu}
          >
            GET IN TOUCH
          </button>
          <button
            className="md:hidden justify-center items-stretch my-auto text-xl font-medium tracking-wider leading-8 text-center text-white max-md:px-5 flex transition-transform duration-300 transform hover:scale-105"
            onClick={toggleMenu}
          >
            <img alt="vrezolve" src="../images/menu.svg" />
          </button>
        </div> */}
        <div className="flex gap-5 mx-auto justify-between self-end mr-28 max-w-full text-base leading-8 text-center w-[787px] max-md:flex-wrap max-md:mr-2.5">
          <div className="flex gap-[32px] justify-between px-3 py-6 text-black max-md:flex-wrap max-md:max-w-full">
            <Link
              to="/"
              className={`leading-[150%] ${
                location.pathname === "/" ? "text-[#0033cc] cursor-pointer" : ""
              }`}
            >
              Home
            </Link>
            <div
              className={`leading-[150%] ${
                location.pathname.includes("/solutions")
                  ? "text-[#0033cc] cursor-pointer"
                  : ""
              }`}
              onClick={() => {
                setisDesktopDropdownOpen(!isDesktopDropdownOpen);
              }}
            >
              Solutions
            </div>
            <Link
              to="/partners"
              className={`leading-[150%] ${
                location.pathname === "/partners"
                  ? "text-[#0033cc] cursor-pointer"
                  : ""
              }`}
            >
              Partners
            </Link>
            <Link
              to="/blog"
              className={`leading-[150%] ${
                location.pathname === "/blog"
                  ? "text-[#0033cc] cursor-pointer"
                  : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`grow leading-[150%] ${
                location.pathname === "/contact"
                  ? "text-[#0033cc] cursor-pointer"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
          <div className="justify-center px-6 py-1.5 my-auto text-base text-white whitespace-nowrap bg-orange-500 rounded-[100px] max-md:px-5">
            GET IN TOUCH
          </div>
        </div>
        {!isNavbarFixed && <div className="mt-3 h-[3px] bg-[#0033cc] w-full" />}
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 z-40 w-full h-full bg-black opacity-50"></div>
      )}
      {isMenuOpen && !isDropdownOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-[110px] right-5   bg-white w-64 shadow-md z-50 overflow-y-auto h-[280px] p-3"
        >
          <div className="p-4 my-auto h-[200px]">
            <div className="leading-[150%] p-2 mt-3 transition-opacity duration-300 ease-in-out hover:bg-gray-200">
              Home
            </div>
            <div
              className="leading-[150%] p-2 flex flex-row transition-opacity duration-300 ease-in-out hover:bg-gray-200"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <span className="mr-5  ">Solutions</span>
              <img alt="vrezolve" src="../images/arrow.svg" />
            </div>
            <div className="leading-[150%] p-2 transition-opacity duration-300 ease-in-out hover:bg-gray-200">
              Partners
            </div>
            <div className="leading-[150%]  p-2  transition-opacity duration-300 ease-in-out hover:bg-gray-200">
              Blog
            </div>
            <div className="leading-[150%] transition-opacity duration-300 ease-in-out hover:bg-gray-200 p-2">
              Contact Us
            </div>
          </div>
        </div>
      )}
      {isMenuOpen && isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="fixed top-[110px] right-5  p-3 bg-white w-64 shadow-md z-50 overflow-y-auto h-[280px]"
        >
          <div className="flex flex-col py-2 bg-white p-2 rounded shadow max-w-[280px]">
            <Link to={"disputz"} onClick={closeMenu}>
              <div className="flex gap-3 justify-between px-3 transition-opacity duration-300 ease-in-out hover:bg-gray-200">
                <img
                  alt="vrezolve"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7dd6963be2ba1d01d37e57d19abda85a90f20cf97c7cceba18c074d77702fd1?apiKey=67296d98361248faadca04e106a4f278&"
                  className="my-auto w-6 aspect-square"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-base mb-2 flex flex-row  font-bold tracking-wide leading-6  whitespace-nowrap">
                    <span>
                      dispute
                      <span className=" font-black text-[#ff6600]">Z</span>
                    </span>
                    <img
                      alt="vrezolve"
                      src="../images/badge.svg"
                      className="w-[90px] mt-1 ml-2"
                    />
                  </div>
                  <div className="text-sm tracking-wide leading-5 text-zinc-700">
                    Dispute Management
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-3 w-full bg-stone-300 min-h-[1px]" />
            <Link to={"alertz"} onClick={closeMenu}>
              <div className="flex gap-3 justify-between px-3 mt-5 transition-opacity duration-300 ease-in-out hover:bg-gray-200">
                <img
                  alt="vrezolve"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d09416d61dc61ef9f19660b50f777243cd8b08c07f96bbd932c28838e060dd8e?apiKey=67296d98361248faadca04e106a4f278&"
                  className="my-auto w-6 aspect-square"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-base  font-bold tracking-wide mb-2 leading-6  whitespace-nowrap">
                    alert
                    <span className=" font-black text-[#ff6600]">Z</span>
                  </div>
                  <div className="text-sm tracking-wide leading-5 text-zinc-700">
                    Real-time fraud and chargeback alerts
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-5 w-full bg-stone-300 min-h-[1px]" />
            <Link to={"rewardz"} onClick={closeMenu}>
              <div className="flex gap-3 justify-between px-3 mt-5 transition-opacity duration-300 ease-in-out hover:bg-gray-200">
                <img
                  alt="vrezolve"
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa8c066ef3188d3a76fc4e05fb3105e34b7d1ce1a8e0a8e5257144fc0fdcae02?apiKey=67296d98361248faadca04e106a4f278&"
                  className="my-auto w-6 aspect-square"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-base mb-2   flex flex-row font-bold tracking-wide leading-6  whitespace-nowrap pl-2">
                    reward
                    <span className=" font-black text-[#ff6600]">Z</span>
                    <img
                      alt="vrezolve"
                      src="../images/badge.svg"
                      className="w-[90px] mt-1 ml-2"
                    />
                  </div>
                  {/* <div className="text-sm tracking-wide leading-5 text-zinc-700">
                  Unlock Exclusive Rewards on every Journey
                </div> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
      {isDesktopDropdownOpen && (
        <div
          ref={desktopdropdownRef}
          className="fixed top-[100px] right-[41%] bg-white w-[488px] shadow-md z-50 overflow-y-auto h-[348px]"
        >
          <div className="flex flex-col pt-3  bg-white rounded shadow max-w-[688px]">
            <div className="flex flex-col px-6 pb-2 w-full text-xl font-medium tracking-wider leading-10 text-zinc-900 max-md:px-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                Comprehensive Dispute Management and Alerts for Unparalleled
                Protection
              </div>
              <div className="shrink-0 mt-5 h-px bg-stone-300 max-md:max-w-full" />
            </div>
            <Link
              to={"alertz"}
              onClick={() => setisDesktopDropdownOpen(!isDesktopDropdownOpen)}
            >
              <div className="flex gap-5 justify-between items-center px-2 mt-2 m-1 whitespace-nowrap max-md:flex-wrap max-md:max-w-full transition-opacity duration-300 ease-in-out hover:bg-gray-200">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7dd6963be2ba1d01d37e57d19abda85a90f20cf97c7cceba18c074d77702fd1?apiKey=67296d98361248faadca04e106a4f278&"
                  className="self-stretch my-auto w-6 aspect-square"
                />
                <div className="flex flex-col flex-1 self-stretch">
                  <div className="text-xl  font-bold leading-8 ">
                    alert
                    <span className=" font-black text-orange-500 pl-1">Z</span>
                  </div>
                  <div className="mt-3 text-sm leading-5 text-zinc-700">
                    Real -time fraud and chargeback alerts
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2ea36626090668d1a1707e4bfe94bb61af896c979b52292daf5ab7f29141bbe?apiKey=67296d98361248faadca04e106a4f278&"
                  className="self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </Link>
            <div className="w-full bg-stone-300 min-h-[1px] max-md:max-w-full" />
            <Link
              to={"disputz"}
              onClick={() => setisDesktopDropdownOpen(!isDesktopDropdownOpen)}
            >
              <div className="flex gap-5 justify-between items-center px-2 mt-2 whitespace-nowrap max-md:flex-wrap max-md:max-w-full transition-opacity duration-300 ease-in-out hover:bg-gray-200 m-1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d09416d61dc61ef9f19660b50f777243cd8b08c07f96bbd932c28838e060dd8e?apiKey=67296d98361248faadca04e106a4f278&"
                  className="self-stretch my-auto w-6 aspect-square"
                />
                <div className="flex flex-col flex-1 self-stretch">
                  <div className="flex auto  text-xl font-bold leading-8">
                    Dispute
                    <span className=" font-black text-orange-500 pl-1">Z</span>
                  </div>
                  <div className="mt-3 text-sm leading-5 text-zinc-700">
                    Dispute management solutions
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2ea36626090668d1a1707e4bfe94bb61af896c979b52292daf5ab7f29141bbe?apiKey=67296d98361248faadca04e106a4f278&"
                  className="self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </Link>
            <div className="w-full bg-stone-300 min-h-[1px] max-md:max-w-full" />
            <Link
              to={"rewardz"}
              onClick={() => setisDesktopDropdownOpen(!isDesktopDropdownOpen)}
            >
              <div className="flex gap-5 justify-between items-start px-2 pb-4 mt-2 text-xl font-medium leading-8  max-md:flex-wrap max-md:max-w-full transition-opacity duration-300 ease-in-out hover:bg-gray-200 m-1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa8c066ef3188d3a76fc4e05fb3105e34b7d1ce1a8e0a8e5257144fc0fdcae02?apiKey=67296d98361248faadca04e106a4f278&"
                  className="mt-4 w-6 aspect-square"
                />
                <div className="flex-auto ">
                  <span className="font-bold">reward</span>{" "}
                  <span className=" font-black text-orange-500">Z </span>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2ea36626090668d1a1707e4bfe94bb61af896c979b52292daf5ab7f29141bbe?apiKey=67296d98361248faadca04e106a4f278&"
                  className="mt-4 w-6 aspect-square"
                />
              </div>
            </Link>
            <div className="w-full bg-stone-300 min-h-[1px] max-md:max-w-full" />
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginNavbar;
