import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import Power from "../assets/power1.gif";

import BuildQuestLogo from "../assets/hacks/ethglobal/buildquest/buildquestLogo.png";
import BuildQuestDash from "../assets/hacks/ethglobal/buildquest/buildquest.png";
import BuildQuestProj from "../assets/hacks/ethglobal/buildquest/suprarms.png";

import HackMoneyLogo from "../assets/hacks/ethglobal/hackmoney/hackmoneyLogo.jpg";
import HackMoneyDash from "../assets/hacks/ethglobal/hackmoney/hackmoney.png";
import HackMoneyProj from "../assets/hacks/ethglobal/hackmoney/daolanders.png";

import HackFSLogo from "../assets/hacks/ethglobal/hackfs/hackfsLogo.jpg";
import HackFSDash from "../assets/hacks/ethglobal/hackfs/hackfs.png";
import HackFSProj from "../assets/hacks/ethglobal/hackfs/neuralnfts.png";

import MetabolismLogo from "../assets/hacks/ethglobal/metabolism/metabolismLogo.png";
import MetabolismDash from "../assets/hacks/ethglobal/metabolism/metabolism.png";
import MetabolismProj from "../assets/hacks/ethglobal/metabolism/dawn.png";

import ETHIndiaLogo from "../assets/hacks/ethglobal/ethindia/ethindiaLogo.png";
import ETHIndiaDash from "../assets/hacks/ethglobal/ethindia/ethindia.png";
import ETHIndiaProj from "../assets/hacks/ethglobal/ethindia/polyedu.png";

import SpaceWarpLogo from "../assets/hacks/ethglobal/spacewarp/spacewarpLogo.png";
import SpaceWarpDash from "../assets/hacks/ethglobal/spacewarp/spacewarp.png";
import SpaceWarpProj from "../assets/hacks/ethglobal/spacewarp/depto.png";

import EthForAllLogo from "../assets/hacks/devfolio/ethforall/ethforallLogo.png";
import EthForAllDash from "../assets/hacks/devfolio/ethforall/ethforall.png";
import EthForAllProj from "../assets/hacks/devfolio/ethforall/superoffers.png";

import FaberLogo from "../assets/hacks/devpost/faberweb3/faberweb3logo.jpg";
import FaberDash from "../assets/hacks/devpost/faberweb3/faberweb3.png";
import FaberProj from "../assets/hacks/devpost/faberweb3/brandapp.jpg";

import SpringLogo from "../assets/hacks/devpost/spring/springlogo.png";
import SpringDash from "../assets/hacks/devpost/spring/spring.png";
import SpringProj from "../assets/hacks/devpost/spring/airnft.jpg";

import XRPLLogo from "../assets/hacks/devpost/xrpl/xrplLogo.png";
import XRPLDash from "../assets/hacks/devpost/xrpl/xrpl.png";
import XRPLProj from "../assets/hacks/devpost/xrpl/xrpals.png";

import OxUNOLogo from "../assets/hacks/ethglobal/scaling2023/scalingLogo.png";
import OxUNODash from "../assets/hacks/ethglobal/scaling2023/scaling.png";
import OxUNOProj from "../assets/hacks/ethglobal/scaling2023/oxuno.png";

import TokyoLogo from "../assets/hacks/ethglobal/tokyo/tokyoLogo.jpg";
import TokyoDash from "../assets/hacks/ethglobal/tokyo/tokyo.png";
import TokyoProj from "../assets/hacks/ethglobal/tokyo/zaisan.png";

import SparrowLogo from "../assets/hacks/licet/sparrow/sparrowLogo.png";
import SparrowDash from "../assets/hacks/licet/sparrow/sparrowDash.jpg";
import SparrowProj from "../assets/hacks/licet/sparrow/sparrow.png";

import LisonLogo from "../assets/hacks/ethglobal/lisbon/lisbonLogo.png";
import LisbonDash from "../assets/hacks/ethglobal/lisbon/lisbon.png";
import LisbonProj from "../assets/hacks/ethglobal/lisbon/qsound.png";

function ProjectCard({
  hackLogo,
  projectDashboard,
  projectImage,
  hackName,
  projectName,
  slide,
  description,
  team,
  prizes,
  dashLink,
}) {
  return (
    <div className=" my-10 h-[550px] w-[350px] md:h-[650px] xl:h-[350px] md:w-[600px] xl:w-full mx-auto xl:mx-0 rounded-lg  flex xl:flex-row flex-col justify-start xl:justify-between select-none text-white bg-[#FF3131] hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-[#000000] duration-300 ">
      {slide == 0 ? (
        <img
          onClick={() => {
            window.open(dashLink);
          }}
          src={hackLogo}
          alt="hackLogo"
          className="object-fill rounded-t-lg xl:rounded-l-lg cursor-pointer w-[350px] h-[250px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[350px]"
        />
      ) : slide == 1 ? (
        <img
          onClick={() => {
            window.open(dashLink);
          }}
          src={projectDashboard}
          className="object-fill rounded-l-lg cursor-pointer w-[350px] h-[250px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[350px]  "
          alt="dashboard"
        />
      ) : (
        <img
          onClick={() => {
            window.open(dashLink);
          }}
          src={projectImage}
          className="object-fill rounded-l-lg cursor-pointer w-[350px] h-[250px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[350px]  "
          alt="project"
        />
      )}
      <div className="xl:ml-8 xl:mr-4 text-center h-full flex flex-col justify-center select-none w-auto">
        <h1 className="text-sm md:text-lg p-1">{hackName}</h1>
        <h2 className="text-xs md:text-base">{projectName}</h2>
        <p className="text-[9px] md:text-[10px] p-2">{description}</p>
        <h3 className="text-xs md:text-base py-1">Team</h3>
        <p className=" flex justify-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <span className="">
            {team.map((mate, index) => (
              <span
                onClick={() => {
                  window.open(mate.link);
                }}
                key={index}
                className="my-1 cursor-pointer mr-1 inline-flex items-center rounded-full bg-zinc-200 px-2.5 py-0.5 text-[8px] md:text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              >
                <svg
                  className="-ml-0.5 mr-1.5 h-2 w-2 text-zinc-600"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx={4} cy={4} r={3} />
                </svg>
                {mate.name}
              </span>
            ))}
          </span>
        </p>
        <h3 className="py-1 text-xs md:text-base">Prizes</h3>
        <p className=" flex justify-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <span className="">
            {prizes.map((prize, index) => (
              <span
                key={index}
                className="my-1  mr-1 inline-flex items-center rounded-full bg-zinc-200 px-2.5 py-0.5 text-[8px] md:text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              >
                <svg
                  className="-ml-0.5 mr-1.5 h-2 w-2 text-zinc-600"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx={4} cy={4} r={3} />
                </svg>
                {prize}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
}

const Hacks = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSlide((slide) => (slide + 1) % 3);
    }, 4000);
  }, [slide]);

  return (
    <div className="px-4 max-w-[1240px] mx-auto ">
      <h1 className="text-sm md:text-lg lg:text-2xl text-center xl:text-start text-white mt-[70px] select-custom-about-title my-5">
        My Hackathons
      </h1>
      <div className=" text-center xl:text-start flex flex-col xl:flex-row justify-between my-8">
        <div className="text-[10px] sm:text-xs md:text-sm lg:text-base max-w-[800px] mx-auto xl:mx-0 ">
          <Typed
            className="text-gray-500 select-custom "
            strings={[
              "My journey into web3 is heavily influenced by hackathons. Just few months after getting into web3, I pushed myself to things that really challenged me. Being a very competitive person, I really found my passion in participating in winning these competitions. Innovating new ideas and making it come to life can become an addiction ",
            ]}
            typeSpeed={35}
            showCursor={false}
            onStop={() => {}}
          />
          <Typed
            className=" px-3 text-gray-500 select-custom-last about-hero-last"
            strings={[" XD"]}
            typeSpeed={70}
            showCursor={false}
            startDelay={19000}
          />
        </div>
        <img
          src={Power}
          className="mx-auto xl:mx-0 select-none mb-8"
          alt="Cat with a guitar"
          width={300}
        />
      </div>

      <ProjectCard
        hackLogo={BuildQuestLogo}
        projectDashboard={BuildQuestDash}
        projectImage={BuildQuestProj}
        hackName={"BuildQuest 2022"}
        projectName={"SuprArms"}
        slide={slide}
        description={
          "A 3D multiplayer FPS MetaVerse with 8400+ unique gun NFTs having distinguished looks and stats."
        }
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Sailesh",
            link: "https://www.linkedin.com/in/sailesh-sivakumar-453061141/",
          },
          {
            name: "Shachindra",
            link: "https://www.linkedin.com/in/shachindra92/",
          },
          { name: "Karan", link: "https://www.linkedin.com/in/karanbdev/" },
        ]}
        prizes={[
          "🕹 Best 3D Metaverse Game built on Polygon",
          "🥉 Best Dapp using Moralis",
          "🏅 Best Use of Chainlink",
        ]}
        dashLink={"https://ethglobal.com/showcase/suprarms-7xz9r"}
      />
      <ProjectCard
        hackLogo={FaberLogo}
        projectDashboard={FaberDash}
        hackName={"Faber Web3 2022"}
        projectName={"Brandapp"}
        projectImage={FaberProj}
        description={
          "Mint your brand, Create your own white-label Brand Resource Center."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Raksha",
            link: "https://www.linkedin.com/in/raksha001/",
          },
          {
            name: "Fabian",
            link: "https://www.linkedin.com/in/fabianferno/",
          },
          {
            name: "Subhiksha",
            link: "https://www.linkedin.com/in/elizabeth-subhiksha-victoria-b3a661193/",
          },
          {
            name: "Veroni",
            link: "https://www.linkedin.com/in/veroni-shwetha/",
          },
          {
            name: "Jesinthan",
            link: "https://www.linkedin.com/in/jesinthan/",
          },
        ]}
        prizes={["⚡ Across the Line Award"]}
        dashLink={"https://devpost.com/software/brandapp"}
      />
      <ProjectCard
        hackLogo={SpringLogo}
        projectDashboard={SpringDash}
        hackName={"Chainlink Spring 2022"}
        projectName={"AIRNFT"}
        projectImage={SpringProj}
        description={
          "An interactive nft service that aids the creator in bringing interactive nfts to the market: be it games, 3d models, interactive animations etc."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Sailesh",
            link: "https://www.linkedin.com/in/sailesh-sivakumar-453061141/",
          },
          {
            name: "Shachindra",
            link: "https://www.linkedin.com/in/shachindra92/",
          },
          { name: "Karan", link: "https://www.linkedin.com/in/karanbdev/" },
          {
            name: "Ishan",
            link: "https://www.linkedin.com/in/ishan-pathak-96852a1b7/",
          },
        ]}
        prizes={["🏃 Filecoin - Runners up"]}
        dashLink={"https://devpost.com/software/ins"}
      />
      <ProjectCard
        hackLogo={HackMoneyLogo}
        projectDashboard={HackMoneyDash}
        hackName={"HackMoney 2022"}
        projectName={"DAOLanders"}
        projectImage={HackMoneyProj}
        description={
          "A DAO that helps people to come together buy NFTs stake it, play with it and much more to generate income."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Fabian",
            link: "https://www.linkedin.com/in/fabianferno/",
          },
        ]}
        prizes={["🏊‍♂️ Waku — Pool Prize"]}
        dashLink={"https://ethglobal.com/showcase/daolanders-5f4za"}
      />
      <ProjectCard
        hackLogo={HackFSLogo}
        projectDashboard={HackFSDash}
        hackName={"HackFS 2022"}
        projectName={"NeuralNFTs"}
        projectImage={HackFSProj}
        description={
          "Giving the sixth sense to NFTs by creating an ML model marketplace with some NFT analytics."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Fabian",
            link: "https://www.linkedin.com/in/fabianferno/",
          },
        ]}
        prizes={[
          "🏊‍♂️ NFTPort — Pool Prize",
          "3️⃣5️⃣ IPFS/Filecoin — Storage Mage",
          "🔟 Spheron — Top 10 project",
        ]}
        dashLink={"https://ethglobal.com/showcase/neuralnfts-yxcg0"}
      />
      <ProjectCard
        hackLogo={MetabolismLogo}
        projectDashboard={MetabolismDash}
        hackName={"Metabolism 2022"}
        projectName={"Dawn"}
        projectImage={MetabolismProj}
        description={
          "View and listen to NFTs with Zora using our user friendly discord bot."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Pinto",
            link: "https://www.linkedin.com/in/pintoinfant/",
          },
          {
            name: "Crispin",
            link: "https://www.linkedin.com/in/crispinr/",
          },
        ]}
        prizes={["🥈 ZORA — 🌜🌞🌛 ZORA protocol and API"]}
        dashLink={"https://ethglobal.com/showcase/dawn-3p94j"}
      />

      <ProjectCard
        hackLogo={ETHIndiaLogo}
        projectDashboard={ETHIndiaDash}
        hackName={"ETHIndia 2022"}
        projectName={"Poly.edu"}
        projectImage={ETHIndiaProj}
        description={"Proof of Education, Own what you learn."}
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
        ]}
        prizes={[
          "🏊 Valist — Prize Pool",
          "🏊 The Graph — Pool Prize",
          "🥇 Router — Best Use",
        ]}
        dashLink={"https://ethglobal.com/showcase/poly-edu-t2h8m"}
      />

      <ProjectCard
        hackLogo={XRPLLogo}
        projectDashboard={XRPLDash}
        hackName={"XRPL: NFT Launch Party 2022"}
        projectName={"AIRNFT"}
        projectImage={XRPLProj}
        description={"Never remember account address again :)"}
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
        ]}
        prizes={["👑 Honorable Mentions"]}
        dashLink={"https://devpost.com/software/xrpals"}
      />
      <ProjectCard
        hackLogo={SpaceWarpLogo}
        projectDashboard={SpaceWarpDash}
        hackName={"FVM Spacewarp 2023"}
        projectName={"DEPTO"}
        projectImage={SpaceWarpProj}
        description={
          "Provable and decentralized Data DAO for patent provisioning and verification."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Pinto",
            link: "https://www.linkedin.com/in/pintoinfant/",
          },
          {
            name: "Fabian",
            link: "https://www.linkedin.com/in/fabianferno/",
          },
        ]}
        prizes={["🔥 Filecoin & IPFS — 🏊 FVM Jetpacks"]}
        dashLink={
          "https://ethglobal.com/showcase/depto-decentralized-patent-and-trademrk-office-c9hd2"
        }
      />
      <ProjectCard
        hackLogo={EthForAllLogo}
        projectDashboard={EthForAllDash}
        hackName={"ETHForAll 2023"}
        projectName={"Super Offers"}
        projectImage={EthForAllProj}
        description={
          "Complete on-chain tasks and get a constant stream of income."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
        ]}
        prizes={[
          "🏅 Push Protocol - Best use of Push Protocol",
          "🏊 Superfluid - Pool Prize",
        ]}
        dashLink={"https://devfolio.co/projects/super-offers-1c57"}
      />
      <ProjectCard
        hackLogo={OxUNOLogo}
        projectDashboard={OxUNODash}
        hackName={"Scaling Ethereum 2023"}
        projectName={"0xUNO"}
        projectImage={OxUNOProj}
        description={
          "A cross chain P2E UNO game where players can play with opponents from a different chain and earn 💲."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Fabian",
            link: "https://www.linkedin.com/in/fabianferno/",
          },
        ]}
        prizes={["🤝 Push Protocol — Best UX", "👯 Polybase — Pool Prize"]}
        dashLink={"https://ethglobal.com/showcase/oxuno-0j53o"}
      />
      <ProjectCard
        hackLogo={TokyoLogo}
        projectDashboard={TokyoDash}
        hackName={"ETHGlobal Tokyo 2023"}
        projectName={"Zaisan"}
        projectImage={TokyoProj}
        description={
          "Create promotions. Earn rewards without revealing data. Build the infinite community."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Roman Lobanov",
            link: "https://www.linkedin.com/in/roman-lobanov-b8122198/",
          },
        ]}
        prizes={[
          "📜 Scroll — Just Deploy",
          "🏊 Worldcoin — Pool Prize",
          "🥉 Sismo — Best ZK Badge or Data Hack",
          "🏊‍♂️ Polygon — Pool Prize",
          "🤝 Hyperlane — Best use of Interoperability",
        ]}
        dashLink={"https://ethglobal.com/showcase/zaisan-6dxue"}
      />
      <ProjectCard
        hackLogo={SparrowLogo}
        projectDashboard={SparrowDash}
        hackName={"Survey Sparrow Hackathon"}
        projectName={"SURV-A"}
        projectImage={SparrowProj}
        description={
          "Automated Survey Response Analysis with geographical data and word cloud analysis using Entity Detection."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Pinto Infant Valan",
            link: "https://www.linkedin.com/in/pintoinfant/",
          },
          {
            name: "Ramya MV",
            link: "https://www.linkedin.com/in/ramya-mv-1092/",
          },
        ]}
        prizes={["🥇 1st Prize"]}
        dashLink={"https://github.com/pintoinfant/surv-a"}
      />
      <ProjectCard
        hackLogo={LisonLogo}
        projectDashboard={LisbonDash}
        hackName={"ETHGlobal Lisbon 2023"}
        projectName={"QSound"}
        projectImage={LisbonProj}
        description={
          "A music streaming platform where anyone can sell their songs by token gating them on a flexible subscription basis."
        }
        slide={slide}
        team={[
          {
            name: "Gabriel",
            link: "https://www.linkedin.com/in/gabriel-antony/",
          },
          {
            name: "Roman Lobanov",
            link: "https://www.linkedin.com/in/roman-lobanov-b8122198/",
          },
        ]}
        prizes={[
          "🥈 ApeCoin DAO — Best Integration",
          "🏊 The Graph — Pool Prize",
          "📜 Scroll — Just Deploy",
        ]}
        dashLink={"https://ethglobal.com/showcase/qsound-sqju3"}
      />
    </div>
  );
};

export default Hacks;
