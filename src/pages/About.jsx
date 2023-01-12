import React, { useState } from "react";
import AboutHero from "./abouthero.gif";
import Born from "./born.gif";
import School from "./school.gif";
import College from "./college.gif";
import Typed from "react-typed";

// TODO: Add your tech stack by using logo of the language or framework
// TODO: Fix the containers in timeline

const About = () => {
  var space;
  const TimeLineElement = ({
    image,
    year,
    headings,
    contents,
    leftRight,
    last,
    links,
    linkTexts,
  }) => {
    return (
      <div className="relative select-none">
        {/* Image */}
        <img
          className={
            !leftRight
              ? " absolute left-[10%] select-none"
              : "absolute left-[70%] select-none"
          }
          src={image}
          width={250}
          height={250}
        ></img>
        {/* Year */}
        <div
          className={
            "absolute left-[44%] h-[130px] w-[130px] bg-[#D22B2B] rounded-full text-white text-center  text-2xl flex flex-col justify-center shadow-lg shadow-red-500/50  "
          }
        >
          {year}
        </div>
        {/* Content Box */}
        <div className="flex flex-col justify-between h-[1000px]">
          <div className="h-[100px] w-[100px] bg-white"></div>
          <div className="h-[100px] w-[100px] bg-white"></div>
          <div className="h-[100px] w-[100px] bg-white"></div>

          {/* {contents.map((content, index) => {
            return (
              <div
                className={
                  !leftRight
                    ? "absolute left-[60%] h-[200px] w-[450px] bg-[#D22B2B] rounded-xl shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-[#000000] duration-300"
                    : "absolute  h-[200px] w-[450px] bg-[#D22B2B] rounded-xl shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-[#000000] duration-300"
                }
              >
                <div className="m-4 ">
                  <h1 className="text-xl mb-4 text-[#D3D3D3] ">
                    {headings[parseInt(index, 10)]}
                  </h1>
                  <p className="break-words">{content}</p>
                  <a
                    href={links[parseInt(index, 10)]}
                    className="text-gray-300 hover:text-[#71797E] "
                  >
                    {linkTexts[parseInt(index, 10)]}
                  </a>
                </div>
              </div>
            );
          })} */}
        </div>

        {/* Center extending line */}
        {!last && (
          <div className="-z-50 relative left-[49%] w-[5px] h-[350px] bg-transparent border-dashed border-r-2 border-[#A9A9A9]"></div>
        )}
      </div>
    );
  };
  var x =
    "shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#000000] duration-300";
  return (
    <div className="px-4 text-white">
      <div className="max-w-[1200px] mt-[70px]  mx-auto w-full  flex flex-col justify-start">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl select-custom-about-title my-5">About</h1>
            <div className="max-w-[800px]">
              <Typed
                className="text-lg text-gray-500 select-custom "
                strings={[
                  "A saturday evening with theWeekend on my headphones and it's slightly drizzling with a cold breeze caressing my face and I type console.log(\"Hello World\"). That's the kind of pleasure I seek. I am a web3 developer with over 2 years of experience in building scalable and production ready smart contracts and decentralized applications. I listen to music, play music, hit the gym everyday and...",
                ]}
                typeSpeed={35}
                showCursor={false}
                onStop={() => {}}
              />
              <Typed
                className="text-lg px-2 text-gray-500 select-custom-last about-hero-last"
                strings={[" I code"]}
                typeSpeed={70}
                showCursor={false}
                startDelay={22500}
              />
            </div>
          </div>
          <img
            src={AboutHero}
            className="select-none"
            alt="Cat with a guitar"
            width={220}
            height={330}
          />
        </div>
        <div className="my-[170px]">
          <div className=" text-center">
            <h1 className="text-2xl select-custom-about-title mb-[50px]">
              Timeline
            </h1>
          </div>

          <TimeLineElement
            image={Born}
            year={2003}
            headings={["July 16,2003"]}
            contents={["I made it... "]}
            links={[""]}
            linkTexts={[""]}
            leftRight={false}
          />
          <TimeLineElement
            image={School}
            year={2006}
            headings={["June 20,2006"]}
            contents={["I joined my Kindergarten classes at "]}
            links={["http://afs.eduniv.in/"]}
            linkTexts={["Airforce Kindergarten, Tambaram, Chennai"]}
            leftRight={true}
          />
          <TimeLineElement
            image={College}
            year={2008}
            headings={["June 4,2008", "April 21,2018", "July 6,2020"]}
            contents={[
              "I started my first grade at ",
              "Compeleted 10th grade with 93.8 percentage",
              "Completed 12th grade with 91 percentage",
            ]}
            links={[
              "https://www.facebook.com/profile.php?id=100065105254278",
              "",
              "",
            ]}
            linkTexts={["Holy Family Convent Mat. Hr. Sec. School", "", ""]}
            leftRight={false}
          />
          {/* <TimeLineElement
            image={College}
            year={2020}
            content={"Halojvsigvbuabhvaiobvoiaesbnvoiaehiovhea"}
            leftRight={true}
          />
          <TimeLineElement
            image={College}
            year={2021}
            content={"Halojvsigvbuabhvaiobvoiaesbnvoiaehiovhea"}
            leftRight={false}
          />
          <TimeLineElement
            image={College}
            year={2022}
            content={"Halojvsigvbuabhvaiobvoiaesbnvoiaehiovhea"}
            leftRight={true}
            last={true}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
