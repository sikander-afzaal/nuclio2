import "./styles/Team.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import TeamMember from "../../Components/TeamMember/TeamMember";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { animationToTop } from "./anim";

const Team = () => {
  gsap.registerPlugin(ScrollToPlugin);
  return (
    <div id="team" className="team scroll-section">
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
      <Link to="/team" className="cta-btn">
        <BsArrowRight /> Nuclio Team
      </Link>
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
