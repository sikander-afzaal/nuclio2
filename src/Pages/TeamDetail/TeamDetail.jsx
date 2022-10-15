import gsap from "gsap";
import { useEffect, useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { animationToTop } from "../Landing/anim";
import "./TeamDetail.css";
import { ScrollToPlugin } from "gsap/all";

const TeamDetail = ({ close, name }) => {
  const [teamMember, setTeamMember] = useState({
    name: "Earnest Sanchez",
    img: "/team/team (10).png",
    desc: [
      "Best entrepreneur and Business Angel of 2014 in Spain.Founder of Akamon Entertainment, Conector Startup Accelerator, Encomenda Smart Capital and First Tuesday.",
      "Managing Partner and Cofounder of Encomenda Smart Capital and Investor in 100+ start-ups.",
      "PADE IESE Business School.",
    ],
    linkedin: "carlosblanco",
    url: "",
  });
  const MemberData = [
    {
      name: "Ernest Sanchez",
      img: "/team/team (10).png",
      desc: [
        "15+ years Venture Capital & entrepreneurship. Europe Investment Partner for Entrée Capital (100m+ portfolio managed) and board Member at Glovo, Shoppiday and Zapper among others. Former CEO of BeOne Telecom and S2AGroup.",
        "BSc in Business Management (University Barcelona), AvMP (Stanford) and PE & VC (Harvard).",
      ],
      linkedin: "ernestsanchez",
      url: "https://www.linkedin.com/in/ernest-sanchez/ ",
    },
    {
      name: "Martin Caride",
      img: "/team/team (12).png",
      desc: [
        "Economist, investor, M&A and Corporate Development Partner. Venture Capital Investment Director and financial and strategy consultant from various industry sectors.",
        "Project leader at Diversity VC and Lead Expert in Digital Finance Master NDS.",
        "BBA USP CEU and MSc - Financial Markets and Wealth Management USP CEU",
      ],
      linkedin: "martincaride",
      url: "https://es.linkedin.com/in/martingonzalezcaride ",
    },
    {
      name: "Pedro Cadena",
      img: "/team/team (13).png",
      desc: [
        "Web3 developer, entrepreneur, and investor. Professor in the Master of Blockchain program at Nuclio Digital School and proficient in Javascript and Solidity.",
        "Former CTO at KNFT, technical advisor at Hedgie and co-founder of Web3TO.",
        "2022 NEAR hackathon winner at the Toronto Futurist Conference.",
      ],
      linkedin: "pedrocadena",
      url: "https://www.linkedin.com/in/pedro-c-64217517a/",
    },
    // {
    //   name: "Carlos Blanco",
    //   img: "/team/team (8).png",
    //   desc: [
    //     "Best entrepreneur and Business Angel of 2014 in Spain.Founder of Akamon Entertainment, Conector Startup Accelerator, Encomenda Smart Capital and First Tuesday.",
    //     "Managing Partner and Cofounder of Encomenda Smart Capital and Investor in 100+ start-ups.",
    //     "PADE IESE Business School.",
    //   ],
    //   linkedin: "carlosblanco",
    //   url: "",
    // },
    // {
    //   name: "Eli",
    //   img: "/team/team (9).png",
    //   desc: [
    //     "Best entrepreneur and Business Angel of 2014 in Spain.Founder of Akamon Entertainment, Conector Startup Accelerator, Encomenda Smart Capital and First Tuesday.",
    //     "Managing Partner and Cofounder of Encomenda Smart Capital and Investor in 100+ start-ups.",
    //     "PADE IESE Business School.",
    //   ],
    //   linkedin: "carlosblanco",
    //   url: "",
    // },
    // {
    //   name: "Maria Rosa",
    //   img: "/team/team (11).png",
    //   desc: [
    //     "Best entrepreneur and Business Angel of 2014 in Spain.Founder of Akamon Entertainment, Conector Startup Accelerator, Encomenda Smart Capital and First Tuesday.",
    //     "Managing Partner and Cofounder of Encomenda Smart Capital and Investor in 100+ start-ups.",
    //     "PADE IESE Business School.",
    //   ],
    //   linkedin: "carlosblanco",
    //   url: "",
    // },
    // {
    //   name: "Quim",
    //   img: "/team/team (14).png",
    //   desc: [
    //     "Best entrepreneur and Business Angel of 2014 in Spain.Founder of Akamon Entertainment, Conector Startup Accelerator, Encomenda Smart Capital and First Tuesday.",
    //     "Managing Partner and Cofounder of Encomenda Smart Capital and Investor in 100+ start-ups.",
    //     "PADE IESE Business School.",
    //   ],
    //   linkedin: "carlosblanco",
    //   url: "",
    // },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    window.scrollTo(0, 0);
    MemberData.forEach((elem) => {
      if (elem.name === name) {
        setTeamMember(elem);
      }
    });
  }, [name]);

  return (
    <div className="team-details">
      <HiOutlineArrowNarrowLeft
        onClick={() => {
          close(false);
          gsap.to(window, {
            scrollTo: "#team",
          });
        }}
        className="back-arrow"
      />

      <img
        onClick={() => {
          close(false);
          animationToTop();
        }}
        src="/logo-black.png"
        alt=""
        className="logo"
      />
      <div className="team-details-box">
        <img src={teamMember.img} alt="" />
        <div className="right-team-detail">
          <h1>
            <span>{teamMember?.name?.split(" ")[0]}</span>{" "}
            {teamMember?.name?.split(" ")[1]}
          </h1>
          {teamMember.desc.map((elem, idx) => {
            return (
              <p className="seg" key={idx + "para"}>
                {elem}
              </p>
            );
          })}
          <a className="seg" href={teamMember.url} target={"blank"}>
            <img src="/LinkedIn Logo.svg" alt="" />/{teamMember.linkedin}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
