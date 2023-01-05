import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div class="flex items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 class="w-full text-2xl font-bold text-[#FF3131] select-none hover:text-white cursor-default ease-in-out duration-500">
        gabrielaxy.eth
      </h1>
      <ul class="hidden md:flex select-none ">
        <li class="p-5 hover:text-[#A9A9A9]">
          <Link classname="select-none" to="/about">
            About
          </Link>
        </li>
        <li class="p-5 hover:text-[#A9A9A9]">
          <Link classname="select-none" to="/projects">
            Projects
          </Link>
        </li>
        <li class="p-5 hover:text-[#A9A9A9]">
          <Link classname="select-none" to="/hacks">
            Hacks
          </Link>
        </li>
        <li class="p-5 hover:text-[#A9A9A9]">
          <Link classname="select-none" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div class="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div class="fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-700">
        <h1 class="w-full text-2xl font-bold text-[#D22B2B] m-4">
          gabrielaxy.eth
        </h1>
        <ul class="p-5 uppercase">
          <li class="p-5 border-b border-gray-600">
            <Link classname="select-none hover:text-[#A9A9A9]" to="/about">
              About
            </Link>
          </li>
          <li class="p-5 border-b border-gray-600">
            <Link classname="select-none hover:text-[#A9A9A9]" to="/projects">
              Projects
            </Link>
          </li>
          <li class="p-5 border-b border-gray-600">
            <Link classname="select-none" to="/hacks">
              Hacks
            </Link>
          </li>
          <li class="p-5">
            <Link classname="select-none hover:text-[#A9A9A9]" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
