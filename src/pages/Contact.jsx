import React from "react";
import Meme from "../assets/meme.png";
import Typed from "react-typed";

// TODO: Insert meme and text content
// TODO: Mail me option
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
    <div className="px-4 text-white h-screen">
      <div className="max-w-[1200px] mt-[100px]  mx-auto w-full flex flex-col justify-start">
        <div className="mx-auto h-[400px]  select-none text-[#A9A9A9]">
          <img
            src={Meme}
            alt="spiderman-meme"
            className=" "
            width={450}
            height={450}
          />
          <p className="relative top-[-50%] left-[-22%] text-sm w-[160px] mx-4 mt-5">
            You looking for a good developer
          </p>
          <p className="relative top-[-67%] left-[85%]  text-sm w-[150px] mx-4 mt-5">
            Me looking for a good job
          </p>
        </div>
        <div className="flex flex-col justify-center text-center">
          <Typed
            className="text-lg text-white select-custom "
            strings={["Let's get in touch"]}
            typeSpeed={35}
            showCursor={false}
            onStop={() => {}}
          />
          <div className="flex justify-center">
            <Typed
              className="text-lg text-white select-custom "
              strings={["Feel free to slide into my dms"]}
              typeSpeed={35}
              showCursor={false}
              startDelay={2000}
              onStop={() => {}}
            />
            <Typed
              className="text-lg px-2  select-custom-last about-hero-last"
              strings={[";)"]}
              typeSpeed={70}
              showCursor={false}
              startDelay={6000}
            />
          </div>
        </div>
        <div
          onClick={() => {
            window.location = "mailto:gabrielantony56@gmail.com";
          }}
          className="mt-[90px] h-[75px] w-[600px] bg-[#D22B2B] mx-auto rounded-2xl cursor-pointer shadow-md fill-white hover:fill-black shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-103 hover:bg-white hover:text-[#000000] duration-300"
        >
          <div className="w-[100%] h-[100%] flex align-middle justify-center select-none">
            <MailIcon className="fill-inherit  w-[30px] hover:fill-inherit  hover:cursor-pointer mx-3 my-auto" />
            <p className="inline text-center text-sm mx-3 h-auto my-auto">
              gabrielantony56@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
