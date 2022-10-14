import "./styles/About.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { animationToTop } from "./anim";

const About = () => {
  gsap.registerPlugin(ScrollToPlugin);
  return (
    <div id="about" className="about scroll-section">
      <img
        onClick={() => animationToTop()}
        src="/logo-black.png"
        alt=""
        className="logo"
      />

      <div className="text">
        <p>
          Building <strong>iconic</strong> web3 startups <br /> that{" "}
          <strong>shape our future</strong>
        </p>
        <Link to="/about" className="cta-btn">
          <BsArrowRight /> About Nuclio Labs
        </Link>
      </div>
      <img
        onClick={() => {
          gsap.to(window, {
            scrollTo: "#brand",
          });
        }}
        src="/arrow-black.svg"
        alt=""
        className="arrow"
      />
    </div>
  );
};

export default About;
