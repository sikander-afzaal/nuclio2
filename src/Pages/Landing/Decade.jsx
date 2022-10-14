import "./styles/About.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { animationToTop } from "./anim";
const Decade = () => {
  gsap.registerPlugin(ScrollToPlugin);
  return (
    <div id="decade" className="decade scroll-section">
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
        <Link to={"/change"} className="cta-btn">
          <BsArrowRight /> About Nuclio
        </Link>
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
