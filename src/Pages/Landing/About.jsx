import "./styles/About.css";
import { BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { animationToTop } from "./anim";
import { useEffect, useState } from "react";
import AboutPage from "../About/About";
import { useLocation } from "react-router-dom";

const About = () => {
  const { hash } = useLocation();
  const [openAbout, setOpenAbout] = useState(false);
  useEffect(() => {
    if (openAbout) {
      gsap.to("body", { overflow: "hidden" });
    } else {
      gsap.to("body", { overflow: "auto" });
    }
  }, [openAbout]);
  useEffect(() => {
    if (hash === "") {
      gsap.to("body", { overflow: "auto" });
      setOpenAbout(false);
    } else {
      gsap.to("body", { overflow: "hidden" });
    }
  }, [hash]);

  gsap.registerPlugin(ScrollToPlugin);
  return (
    <div id="about" className="about scroll-section">
      {openAbout && <AboutPage close={setOpenAbout} />}
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
        <a
          href="#About nuclio labs"
          onClick={() => setOpenAbout(true)}
          className="cta-btn"
        >
          <BsArrowRight /> About Nuclio Labs
        </a>
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
