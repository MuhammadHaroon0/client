import React from "react";
import logo from "../resources/logo.svg";

const Navbar = (props) => {
  return (
    <nav className="container relative px-6 mx-auto">
      <div className="flex items-center justify-between md:space-x-6 ">
        <div className="">
          <img src={logo} className="w-2/5 h-2/5" alt="logo" />
        </div>
        <div className="hidden space-x-6 md:flex">
          <a
            href="https://www.fiverr.com/tech_rise/teach-mit-scratch-coding-and-gaming-to-kids-aged-6-to-14?context_referrer=user_page&ref_ctx_id=af9affffdc311ae60ba85ddd33df6f48&pckg_id=1&pos=1&seller_online=true&imp_id=b3871e0b-dd56-430a-a9ae-8a4c188a6284"
            target="_blank"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Contact Me
          </a>
          
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
             hifzasadiq966@gmail.com
          </a>
        </div>
        <div className="hidden md:block">
          <a className="rounded-full bg-[#5A5A5A] text-[#FFFFFF] lg:p-1 lg:px-2 md:px-2 md:text-sm hover:bg-red-500"
          href="https://www.fiverr.com/tech_rise"
          target="_blank">
            Get Started
          </a>
        </div>

        <button
          id="menu-btn"
          className="hamburger block md:hidden focus:outline-none"
          onClick={props.hamburger}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          className="absolute items-center self-end flex-col py-8 mt-10 hidden space-y-6 font-bold bg-white sm:self-center sm:w-auto left-6 right-6 drop-shadow-md"
          id="menu"
        >
          <a
            href="https://www.fiverr.com/tech_rise/teach-mit-scratch-coding-and-gaming-to-kids-aged-6-to-14?context_referrer=user_page&ref_ctx_id=af9affffdc311ae60ba85ddd33df6f48&pckg_id=1&pos=1&seller_online=true&imp_id=b3871e0b-dd56-430a-a9ae-8a4c188a6284"
            target="_blank"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            Contact Me
          </a>
          
          <a
            href="#"
            className="text-red-500 font-semibold hover:text-[#5A5A5A]"
          >
            hifzasadiq966@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
