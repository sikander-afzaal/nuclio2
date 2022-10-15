import "./styles/About.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { animationToTop } from "./anim";
import { useEffect, useState } from "react";
import Change from "../Change/Change";
const Decade = () => {
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
        <button onClick={() => setOpenAbout(true)} className="cta-btn">
          <BsArrowRight /> About Nuclio
        </button>
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
