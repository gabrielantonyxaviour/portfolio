import React, { useState } from "react";
import Typed from "react-typed";
import Gabe from "./gabe.gif";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] mx-auto w-full h-screen text-center flex flex-col justify-center">
        <div className="w-full flex justify-center">
          <img
            className="select-none"
            src={Gabe}
            width="150"
            height="150"
          ></img>
        </div>
        <Typed
          className="select-custom p-2 hero-style md:text-1xl sm:text-1xl text-[#A9A9A9] font-bold pl-2"
          strings={["Hello stranger"]}
          typeSpeed={100}
          showCursor={false}
          onStop={() => {}}
        />
        <Typed
          className="select-custom p-2 hero-style md:text-1xl sm:text-1xl text-[#A9A9A9] font-bold pl-2"
          strings={["Nice to meet you"]}
          typeSpeed={100}
          startDelay={3000}
          showCursor={false}
        />
        <Typed
          className="select-custom p-2 hero-style md:text-1xl sm:text-1xl text-[#A9A9A9] font-bold pl-2"
          strings={["I'm Gabriel"]}
          typeSpeed={100}
          startDelay={6000}
          showCursor={false}
        />
        <div className="flex justify-center">
          <Typed
            className="select-custom p-2 hero-style md:text-1xl sm:text-1xl text-[#A9A9A9] font-bold pl-2"
            strings={["I game, workout and code"]}
            typeSpeed={100}
            showCursor={false}
            startDelay={9000}
          />
          <Typed
            className="select-custom-last p-2 hero-style md:text-1xl sm:text-1xl text-[#FF3131] font-bold pl-2"
            strings={["a lot"]}
            typeSpeed={50}
            showCursor={false}
            startDelay={14000}
          />
        </div>
      </div>
      <div className="fixed left-[10%] top-[20%] bg-[#D22B2B] w-24 h-24 rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
        <p className="cursor-default select-none">DeFi</p>
      </div>
      <div className="fixed left-[17%] top-[35%] bg-[#D22B2B] w-24 h-24 rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
        <p className="cursor-default select-none">NFTs</p>
      </div>
      <div className="fixed left-[10%] top-[50%] bg-[#D22B2B] w-24 h-24 rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
        <p className="cursor-default select-none">DAOs</p>
      </div>

      <div className="fixed left-[17%] top-[65%] bg-[#D22B2B] w-24 h-24 rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
        <p className="cursor-default select-none">dApps</p>
      </div>
      <div className="fixed right-[10%] top-[20%] bg-[#D22B2B] w-24 h-24 rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
        <p className="cursor-default select-none">IPFS</p>
      </div>
      <div className="fixed right-[17%] top-[35%] bg-[#D22B2B] w-24 h-24 rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
        <p className="cursor-default select-none">Unity</p>
      </div>
      <div className="fixed right-[10%] top-[50%] bg-[#D22B2B] w-24 h-24 rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
        <p className="cursor-default select-none">EVM</p>
      </div>
      <div className="fixed right-[17%] top-[65%] bg-[#D22B2B] w-24 h-24 rounded-full text-center flex flex-col justify-center shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300">
        <p className="cursor-default select-none">Web3</p>
      </div>
    </div>
  );
};
export default Hero;
