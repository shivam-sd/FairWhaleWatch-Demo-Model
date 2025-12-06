import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const HeaderMain = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);

  return (
    <header
      className="
        relative w-full sticky top-0 z-50 cursor-pointer 
        overflow-hidden
        before:content-[''] before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full 
        before:bg-white before:-z-10 before:transition-all before:duration-500
        hover:before:top-0
        py-1
        bg-cover
        bg-no-repeat
      "
      style={{backgroundImage: 'url(herobg.avif)'}}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      
      <div className="flex items-center justify-between px-4 sm:px-8">

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Logo */}
        <div className="flex justify-center w-full md:w-auto">
          {state ? (
            <img
              src="logo.png"
              alt="logo"
              className="w-32 sm:w-40 duration-300 bg-black"
            />
          ) : (
            <img
              src="logo.png"
              alt="logo"
              className="w-32 sm:w-40 duration-300"
            />
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl">
          <FaSearch className="cursor-pointer" />
          <IoCartOutline className="cursor-pointer" />
          <CiUser className="cursor-pointer" />
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center justify-center gap-12 py-3 text-[15px] font-semibold tracking-wide">
        <a href="#" className="hover:text-gray-500 duration-200 text-black font-bold font-DancingScript ">HOME</a>
        <a href="#" className="hover:text-gray-500 duration-200 text-black font-bold font-DancingScript ">BEST SELLER</a>
        <a href="#" className="hover:text-gray-500 duration-200 text-black font-bold font-DancingScript ">WOMEN'S WATCHES</a>
        <a href="#" className="hover:text-gray-500 duration-200 text-black font-bold font-DancingScript ">MEN'S WATCHES</a>
        <a href="#" className="hover:text-gray-500 duration-200 text-black font-bold font-DancingScript ">ABOUT US</a>
        <a href="#" className="hover:text-gray-500 duration-200 text-black font-bold font-DancingScript ">NEED HELP</a>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white duration-300 overflow-hidden ${
          open ? "h-auto pb-4" : "h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 text-center text-lg font-medium py-2">
          <a href="#" className="hover:text-gray-600 duration-150">HOME</a>
          <a href="#" className="hover:text-gray-600 duration-150">BEST SELLER</a>
          <a href="#" className="hover:text-gray-600 duration-150">WOMEN'S WATCHES</a>
          <a href="#" className="hover:text-gray-600 duration-150">MEN'S WATCHES</a>
          <a href="#" className="hover:text-gray-600 duration-150">ABOUT US</a>
          <a href="#" className="hover:text-gray-600 duration-150">NEED HELP</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMain;
