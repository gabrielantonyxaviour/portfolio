import React from "react";
import Meme from "../assets/meme.png";
import Typed from "react-typed";

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}
const Contact = () => {
  return (
    <div className="px-4 text-white min-h-screen">
      <div className="max-w-[1200px] mt-[200px]  mx-auto w-full flex flex-col justify-start">
        <div className="mx-auto h-[400px] flex flex-col select-none text-[#A9A9A9]">
          <div className="flex justify-around text-center">
            <p className=" text-[8px] sm:text-xs md:text-sm w-[160px] mx-4 mt-5">
              You looking for a good developer
            </p>
            <p className=" text-[8px] sm:text-xs md:text-sm w-[150px] mx-4 mt-5">
              Me looking for a good job
            </p>
          </div>
          <img
            src={Meme}
            alt="spiderman-meme"
            className="m-auto w-[350px] h-[300px] sm:w-[450px] sm:h-[450px] "
          />
        </div>
        <div className="text-xs space-y-2 md:text-base lg:text-lg flex flex-col justify-center text-center">
          <Typed
            className="text-white select-custom "
            strings={["Let's get in touch"]}
            typeSpeed={35}
            showCursor={false}
            onStop={() => {}}
          />
          <Typed
            className="text-white select-custom "
            strings={["Feel free to slide into my dms"]}
            typeSpeed={35}
            showCursor={false}
            startDelay={2000}
            onStop={() => {}}
          />
          <Typed
            className="= px-2  select-custom-last about-hero-last"
            strings={[";)"]}
            typeSpeed={70}
            showCursor={false}
            startDelay={5000}
          />
        </div>
        <div
          onClick={() => {
            window.location = "mailto:contact@gabrielaxy.com";
          }}
          className="mt-[90px] h-[65px] sm:h-[75px] sm:w-[80%] lg:w-[50%]   bg-[#D22B2B] mx-auto rounded-2xl cursor-pointer shadow-md fill-white hover:fill-black shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-103 hover:bg-white hover:text-[#000000] duration-300"
        >
          <div className="w-[100%] h-[100%]  flex align-middle justify-center select-none">
            <MailIcon className="fill-inherit w-[25px] sm:w-[30px] hover:fill-inherit  hover:cursor-pointer mx-3 my-auto" />
            <p className="inline text-center text-[10px] sm:text-sm mx-3 h-auto my-auto">
              contact@gabrielaxy.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
