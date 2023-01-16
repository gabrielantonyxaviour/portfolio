import React, { useState, useEffect } from "react";
import octokit from "../components/githubConfig";
import Typed from "react-typed";
import Power from "../assets/power2.gif";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoader] = useState(true);

  function getProjects() {
    octokit
      .request(`GET /user/repos`, {
        per_page: "100",
        affiliation: "owner",
      })
      .then((res) => {
        setLoader(false);
        let result = res.data.filter(
          (project) => !project.topics.includes("ignore")
        );
        setProjects(result);
      });
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="px-4 max-w-[1240px] mx-auto ">
      <h1 className="text-sm md:text-lg lg:text-2xl text-center lg:text-start text-white mt-[70px] select-custom-about-title my-5">
        Projects
      </h1>
      <div className="flex lg:flex-row flex-col justify-between ">
        <div className="text-[10px] md:text-xs lg:text-base max-w-[800px] mx-auto text-center lg:text-left lg:mx-0">
          <Typed
            className=" text-gray-500 select-custom "
            strings={[
              "By building applications one after the other, I gained a lot of experience and knowledge which I never believed I could have. It all started with a desire to make a change and bring out my ideas and innovation to this world which is going to be my never ending pursuit.",
            ]}
            typeSpeed={35}
            showCursor={false}
            onStop={() => {}}
          />
          <Typed
            className=" px-2 text-gray-500 select-custom-last about-hero-last"
            strings={[" :)"]}
            typeSpeed={70}
            showCursor={false}
            startDelay={18000}
          />
        </div>
        <img
          src={Power}
          className="select-none w-[200px] md:w-[300px] mx-auto lg:mx-0 mb-12 lg:mb-0"
          alt="Fireee"
        />
      </div>
      <h1></h1>

      {isLoading ? (
        <div className=" grid grid-cols-3 gap-5">
          <div class="  rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex flex-col space-y-4">
              <div class="rounded-full bg-slate-700 h-20 w-20  mx-auto"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>

                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
          <div class="  rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex flex-col space-y-4">
              <div class="rounded-full bg-slate-700 h-20 w-20  mx-auto"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>

                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
          <div class="  rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex flex-col space-y-4">
              <div class="rounded-full bg-slate-700 h-20 w-20  mx-auto"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>

                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 select-none">
          {projects.map((project) => (
            <a className="h-full w-full" href={project.html_url}>
              <div className="  bg-[#D22B2B] text-white hover:bg-white hover:text-[#000000] rounded-lg p-2 w-full h-full shadow-lg shadow-red-500/50  hover:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105">
                <h2 className="mt-2 mb-4 break-words text-sm md:text-lg font-semibold text-zinc-300 ">
                  {project.name}
                </h2>
                <p className="text-[10px] md:text-sm">{project.description}</p>
                <p className=" z-10 mt-4 flex text-[8px] md:text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <span className="">
                    {project.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="my-1 mr-1 inline-flex items-center rounded-full bg-zinc-200 px-2.5 py-0.5 font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                      >
                        <svg
                          className="-ml-0.5 mr-1.5 h-2 w-2 text-zinc-600"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                        {topic}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
