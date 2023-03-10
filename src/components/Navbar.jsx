import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div class="flex relative z-3 justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 class=" text-lg  md:text-2xl font-bold text-[#FF3131] select-none hover:text-white cursor-default ease-in-out duration-500">
        <Link className="select-none   text-sm sm:text-base lg:text-xl " to="/">
          gabrielaxy.eth
        </Link>
      </h1>

      <ul class="hidden lg:flex select-none ">
        <li class="p-5 hover:text-[#A9A9A9]">
          <Link classname="select-none" to="/about">
            About
          </Link>
        </li>
        <li class="p-5 hover:text-[#A9A9A9]">
          <Link classname="select-none" to="/hacks">
            Hacks
          </Link>
        </li>
        <li class="p-5 hover:text-[#A9A9A9]">
          <Link classname="select-none" to="/projects">
            Projects
          </Link>
        </li>
        <li class="p-5 hover:text-[#A9A9A9]">
          <Link classname="select-none" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div class="block lg:hidden">
        {nav ? (
          <AiOutlineClose size={20} onClick={handleNav} />
        ) : (
          <AiOutlineMenu size={20} onClick={handleNav} />
        )}
      </div>
      <div
        class={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500"
        }
      >
        <h1 class="w-full text-2xl font-bold text-[#D22B2B] m-4 hover:text-white cursor-default ease-in-out duration-500">
          <Link className="select-none text-sm sm:text-base lg:text-xl " to="/">
            gabrielaxy.eth
          </Link>
        </h1>

        <ul class="p-5 uppercase text-xs sm:text-base">
          <li class="p-5 border-b border-gray-600">
            <Link
              classname="select-none hover:text-[#A9A9A9]"
              to="/about"
              onClick={() => {
                setNav(!nav);
              }}
            >
              About
            </Link>
          </li>
          <li class="p-5 border-b border-gray-600">
            <Link
              classname="select-none"
              to="/hacks"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Hacks
            </Link>
          </li>
          <li class="p-5 border-b border-gray-600">
            <Link
              classname="select-none hover:text-[#A9A9A9]"
              to="/projects"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Projects
            </Link>
          </li>

          <li class="p-5">
            <Link
              classname="select-none hover:text-[#A9A9A9]"
              to="/contact"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
