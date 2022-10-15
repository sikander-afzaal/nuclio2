import "./styles/Team.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import TeamMember from "../../Components/TeamMember/TeamMember";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { animationToTop } from "./anim";
import { useEffect, useState } from "react";
import TeamPage from "../Team/Team";

const Team = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const [openAbout, setOpenAbout] = useState(false);
  useEffect(() => {
    if (openAbout) {
      gsap.to("body", { overflow: "hidden" });
    } else {
      gsap.to("body", { overflow: "auto" });
    }
  }, [openAbout]);
  return (
    <div id="team" className="team scroll-section">
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
        <TeamMember img={"/team/team (3).png"} name="Ernest Sanchez" />
        <TeamMember img={"/team/team (1).png"} name="Martin Caride" />
        <TeamMember img={"/team/team (2).png"} name="Pedro Cadena" />
      </div>
      <button
        onClick={() => {
          setOpenAbout(true);
        }}
        className="cta-btn"
      >
        <BsArrowRight /> Nuclio Team
      </button>
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
