import "./styles/Team.css";
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import TeamMember from "../../Components/TeamMember/TeamMember";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { animationToTop } from "./anim";
import { useEffect, useState } from "react";
import TeamPage from "../Team/Team";
import TeamDetail from "../TeamDetail/TeamDetail";

const Team = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const [openAbout, setOpenAbout] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [nameMem, setNameMem] = useState("");
  const { hash } = useLocation();
  useEffect(() => {
    if (openAbout || openModal) {
      gsap.to("body", { overflow: "hidden" });
    } else {
      gsap.to("body", { overflow: "auto" });
    }
  }, [openAbout, openModal]);
  // useEffect(() => {
  //   if (openModal) {
  //     gsap.to("body", { overflow: "hidden" });
  //   } else {
  //     gsap.to("body", { overflow: "auto" });
  //   }
  // }, [openModal]);
  useEffect(() => {
    if (hash === "") {
      gsap.to("body", { overflow: "auto" });
      setOpenAbout(false);
    } else {
      gsap.to("body", { overflow: "hidden" });
    }
  }, [hash]);
  return (
    <div id="team" className="team scroll-section">
      {openModal && <TeamDetail name={nameMem} close={setOpenModal} />}
      {openAbout && <TeamPage close={setOpenAbout} />}
      <img
        onClick={() => animationToTop()}
        src="/logo-black.png"
        alt=""
        className="logo"
      />

      <h1 className="thet">
        <span className="thet">The</span> Partners
      </h1>
      <div className="team-row">
        <TeamMember
          openModal={setOpenModal}
          img={"/team/team (3).png"}
          name="Ernest Sanchez"
          setNameMem={setNameMem}
        />
        <TeamMember
          openModal={setOpenModal}
          img={"/team/team (1).png"}
          name="Martin Caride"
          setNameMem={setNameMem}
        />
        <TeamMember
          openModal={setOpenModal}
          img={"/team/team (2).png"}
          name="Pedro Cadena"
          setNameMem={setNameMem}
        />
      </div>
      <a
        href="#team"
        onClick={() => {
          setOpenAbout(true);
        }}
        className="cta-btn"
      >
        <BsArrowRight /> Nuclio Team
      </a>
      <img
        onClick={() => {
          gsap.to(window, {
            scrollTo: "#end",
          });
        }}
        src="/arrow-black.svg"
        alt=""
        className="arrow"
      />
    </div>
  );
};

export default Team;
