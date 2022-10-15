import "./styles/About.css";
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { animationToTop } from "./anim";
import { useEffect, useState } from "react";
import Change from "../Change/Change";
const Decade = () => {
  const { hash } = useLocation();
  gsap.registerPlugin(ScrollToPlugin);
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
  return (
    <div id="decade" className="decade scroll-section">
      {openAbout && <Change close={setOpenAbout} />}
      <img
        onClick={() => animationToTop()}
        src="/logo-black.png"
        alt=""
        className="logo"
      />

      <div className="text">
        <p>
          A decade of <strong>experience</strong> building <br />
          <strong>successful</strong> startups
        </p>
        <a
          href="#decade"
          onClick={() => setOpenAbout(true)}
          className="cta-btn"
        >
          <BsArrowRight /> About Nuclio
        </a>
      </div>
      <img
        onClick={() => {
          gsap.to(window, {
            scrollTo: "#team",
          });
        }}
        src="/arrow-black.svg"
        alt=""
        className="arrow"
      />
    </div>
  );
};

export default Decade;
