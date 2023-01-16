import React, { useState } from "react";
import Typed from "react-typed";
import Gabe from "../assets/gabe.gif";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1240px]  mt-[-96px] mx-auto w-full h-screen text-center flex justify-start">
        <div className="flex flex-col justify-evenly w-[20%] mt-10">
          <div className="mx-auto bg-[#D22B2B] w-16 md:w-24 h-16 md:h-24 text-[10px] md:text-base rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
            <p className="cursor-default select-none">DeFi</p>
          </div>
          <div className="mx-auto bg-[#D22B2B] w-16 md:w-24 h-16 md:h-24 text-[10px] md:text-base rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
            <p className="cursor-default select-none">NFTs</p>
          </div>
          <div className="mx-auto bg-[#D22B2B] w-16 md:w-24 h-16 md:h-24 text-[10px] md:text-base rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
            <p className="cursor-default select-none">DAOs</p>
          </div>

          <div className="mx-auto bg-[#D22B2B] w-16 md:w-24 h-16 md:h-24 text-[10px] md:text-base rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
            <p className="cursor-default select-none">dApps</p>
          </div>
        </div>
        <div className="flex flex-col text-xs md:text-base lg:text-lg w-[60%] justify-center">
          <div className="w-full flex justify-center">
            <img
              className="select-none w-[90px] md:w-[150px] h-[120px] md:h-[150px]"
              src={Gabe}
            ></img>
          </div>
          <Typed
            className="select-custom p-2 hero-style    text-[#A9A9A9] font-bold pl-2"
            strings={["Hello stranger"]}
            typeSpeed={100}
            showCursor={false}
            onStop={() => {}}
          />
          <Typed
            className="select-custom p-2 hero-style    text-[#A9A9A9] font-bold pl-2"
            strings={["Nice to meet you"]}
            typeSpeed={100}
            startDelay={3000}
            showCursor={false}
          />
          <Typed
            className="select-custom p-2 hero-style    text-[#A9A9A9] font-bold pl-2"
            strings={["I'm Gabriel"]}
            typeSpeed={100}
            startDelay={6000}
            showCursor={false}
          />
          <Typed
            className="select-custom p-2 hero-style    text-[#A9A9A9] font-bold pl-2"
            strings={["I game, workout and code"]}
            typeSpeed={100}
            showCursor={false}
            startDelay={9000}
          />
          <Typed
            className="select-custom-last p-2 hero-style    text-[#FF3131] font-bold pl-2"
            strings={["a lot"]}
            typeSpeed={50}
            showCursor={false}
            startDelay={14000}
          />
        </div>
        <div className="flex flex-col justify-evenly w-[20%] mt-10">
          <div className="mx-auto bg-[#D22B2B] w-16 md:w-24 h-16 md:h-24 text-[10px] md:text-base rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
            <p className="cursor-default select-none">IPFS</p>
          </div>
          <div className="mx-auto bg-[#D22B2B] w-16 md:w-24 h-16 md:h-24 text-[10px] md:text-base rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
            <p className="cursor-default select-none">Unity</p>
          </div>
          <div className="mx-auto bg-[#D22B2B] w-16 md:w-24 h-16 md:h-24 text-[10px] md:text-base rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
            <p className="cursor-default select-none">EVM</p>
          </div>
          <div className="mx-auto bg-[#D22B2B] w-16 md:w-24 h-16 md:h-24 text-[10px] md:text-base rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
            <p className="cursor-default select-none">Web3</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
