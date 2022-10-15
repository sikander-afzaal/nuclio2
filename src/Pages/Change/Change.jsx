import "./Change.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { animationToTop } from "../Landing/anim";

const Change = ({ close }) => {
  return (
    <div className="about-page change">
      <HiOutlineArrowNarrowLeft
        onClick={() => close(false)}
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

      <div className="about-box ">
        <div className="blur"></div>
        <img src="/change.png" alt="" />
        <div className="text-about change-box">
          <h1>
            Change <span>leads to</span> value
          </h1>
          <p className="seg">
            Nuclio is one of the most successful Venture Builders in Southern
            Europe with a complete ecosystem comprised of a Venture Fund,
            Digital School, Talent Company, Digital Transformation Consulting
            Company, and a Venture Studio.
          </p>
          <p className="seg">
            We build curated business models from scratch that later become the
            start-ups of tomorrow. Our global-oriented and momentum-minded
            approach provides efficiency and scalability to international
            markets.
          </p>
          <p className="seg">
            Nuclio has a successful track record of web 2.0 business models and
            has developed start-ups in various verticals such as fintech,
            proptech, edtech, pharma, health, and gaming, to mention a few. In
            addition, within the Conector ecosystem (a Nuclio Accelerator), we
            have accelerated more than 200+ start-ups, such as Glovo, Goi,
            Singularu, Meller, Kompyte, among others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Change;
