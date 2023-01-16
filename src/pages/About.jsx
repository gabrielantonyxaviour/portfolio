import React, { useState } from "react";
import AboutHero from "../assets/abouthero.gif";
import Born from "../assets/born.gif";
import School from "../assets/school.gif";
import College from "../assets/college.gif";
import Strong from "../assets/big.gif";
import Second from "../assets/second.gif";
import Third from "../assets/third.gif";
import Typed from "react-typed";
import TechStack from "../assets/icons/TechStack";
// TODO: Add your tech stack by using logo of the language or framework
// TODO: Fix the containers in timeline

const About = () => {
  const TimeLineElement = ({
    image,
    year,
    headings,
    contents,
    leftRight,
    last,
  }) => {
    function centerDashedLine(len) {
      if (last) return [];
      var arr = [];

      for (let i = 0; i < len; i++) {
        arr.push(
          <div className=" -z-50   w-[5px] h-[220px] bg-transparent border-dashed border-r-2 border-[#A9A9A9]"></div>
        );
      }
      return arr;
    }

    return (
      <div>
        <div className="flex flex-col my-14 w-[100%] lg:hidden">
          <div className="flex flex-col mx-auto justify-center">
            <div className="flex flex-col justify-center">
              <div className="mx-auto h-[130px]  w-[130px] bg-[#D22B2B] rounded-full text-white text-center  text-2xl flex flex-col justify-center shadow-lg shadow-red-500/50  ">
                {year}
              </div>
            </div>
            <img
              className="my-5  flex select-none"
              src={image}
              width={250}
              height={250}
            ></img>
          </div>
          <div className="flex flex-col w-[100%]">
            {contents.map((content, index) => {
              return (
                <div
                  className={
                    " h-[200px] mx-auto my-3 w-[420px] bg-[#D22B2B] rounded-xl shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-[#000000] duration-300"
                  }
                >
                  <div className="m-4 ">
                    <h1 className="text-xl mb-4 text-[#D3D3D3] ">
                      {headings[parseInt(index, 10)]}
                    </h1>
                    <p className="break-words">{content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden  relative w-[100%] lg:flex justify-between select-none ">
          {!leftRight ? (
            <div className="w-[40%] text-center ">
              <img
                className=" hidden lg:flex mx-auto select-none"
                src={image}
                width={250}
                height={250}
              ></img>
            </div>
          ) : (
            <div className="flex flex-col w-[40%] ">
              {contents.map((content, index) => {
                return (
                  <div
                    className={
                      " h-[200px] mx-auto my-3 w-[420px] bg-[#D22B2B] rounded-xl shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-[#000000] duration-300"
                    }
                  >
                    <div className="m-4 ">
                      <h1 className="text-xl mb-4 text-[#D3D3D3] ">
                        {headings[parseInt(index, 10)]}
                      </h1>
                      <p className="break-words">{content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className=" w-[20%] pt-[40px]">
            <div className=" m-auto h-[130px] w-[130px] bg-[#D22B2B] rounded-full text-white text-center  text-2xl flex flex-col justify-center shadow-lg shadow-red-500/50  ">
              {year}
            </div>
          </div>

          {!leftRight ? (
            <div className="flex flex-col w-[40%]">
              {contents.map((content, index) => {
                return (
                  <div
                    className={
                      " h-[200px] mx-auto my-3 w-[420px] bg-[#D22B2B] rounded-xl shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-[#000000] duration-300"
                    }
                  >
                    <div className="m-4 ">
                      <h1 className="text-xl mb-4 text-[#D3D3D3] ">
                        {headings[parseInt(index, 10)]}
                      </h1>
                      <p className="break-words">{content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-[40%]">
              <img
                className="hidden lg:flex select-none mx-auto"
                src={image}
                width={250}
                height={250}
              ></img>
            </div>
          )}

          <div className="hidden lg:flex absolute left-[50%] top-[150px] flex-col">
            {centerDashedLine(contents.length)}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="px-4 text-white">
      <div className="max-w-[1200px] mt-[70px]  mx-auto w-full  flex flex-col justify-start">
        <h1 className="text-2xl select-custom-about-title my-5 lg:text-start text-center">
          About
        </h1>

        <div className="flex flex-col lg:flex-row  justify-between">
          <div className="max-w-[800px] mx-auto mb-12 lg:mb-0 lg:mx-0 text-center lg:text-start">
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
          <img
            src={AboutHero}
            className="mx-auto select-none"
            alt="Cat with a guitar"
            width={220}
            height={330}
          />
        </div>
        <div className="h-[200px] mt-[100px] ">
          <h2 className="text-2xl text-center select-custom-about-title mb-12">
            My Tech Stack
          </h2>
          <div className="flex justify-between ">
            {
              <TechStack
                className="fill-[#A9A9A9] hover:fill-red-600"
                width={50}
              />
            }
          </div>
        </div>
        <div className="my-8">
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
            leftRight={false}
          />
          <TimeLineElement
            image={College}
            year={2006}
            headings={["June 20,2006"]}
            contents={[
              "I joined my Kindergarten classes at Airforce Kindergarten, Tambaram",
            ]}
            leftRight={true}
          />
          <TimeLineElement
            image={School}
            year={2008}
            headings={["June 4,2008", "April 21,2018", "July 6,2020"]}
            contents={[
              "I started my first grade at Holy Family Convent Mat. Hr. Sec. School, Chennai",
              "Compeleted 10th grade with 93.8 percentage",
              "Completed 12th grade with 91 percentage",
            ]}
            leftRight={false}
          />
          <TimeLineElement
            image={Second}
            year={2020}
            headings={["June 4,2008", "April 21,2018", "July 6,2020"]}
            contents={[
              "Pursuing B.E. ECE at Loyola ICAM College of Engineering and Technology, Chennai ",
            ]}
            leftRight={true}
          />
          <TimeLineElement
            image={Third}
            year={2021}
            headings={[
              "June 15,2021",
              "August 2,2021",
              "November 30,2021",
              "December 30,2021",
            ]}
            contents={[
              "Released Jaaman Shooter, a 2D shooter game with 315K+ Downloads and 4.5⭐ rating in Google Play Games",
              "My First Internship at Rax Tech International, Chennai. I worked on IoT with Embedded C",
              "Joined LICET Pattarai, a student led Tech Community in LICET",
              "Orgnaized my first workshop in Pattarai on developing cross-platform applications with Flutter",
            ]}
            leftRight={false}
          />
          <TimeLineElement
            image={Strong}
            year={2022}
            headings={["August 4,2022", "August 21,2022"]}
            contents={[
              "Worked as a Blockchain Developer Intern and Consultant at NFTconomy",
              "Became the President of Pattarai for a brief period of 3 months",
            ]}
            leftRight={true}
            last={true}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
