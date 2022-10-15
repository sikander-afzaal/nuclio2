import "./About.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = ({ close }) => {
  return (
    <div className="about-page">
      <button onClick={() => close(false)}>
        <HiOutlineArrowNarrowLeft className="back-arrow" />
      </button>
      <button
        onClick={() => {
          close(false);
          animationToTop();
        }}
      >
        <img src="/logo-black.png" alt="" className="logo" />
      </button>
      <div className="about-box">
        <div className="blur"></div>
        <img src="/about.png" alt="" />
        <div className="text-about">
          <h1>
            <span>A</span> new frontier
          </h1>
          <p className="seg">
            Nuclio Labs aims to replicate the success Nuclio has had in web 2.0.
          </p>
          <p className="seg">
            Nuclio Labs wants to be at the frontier of the web3 revolution. Our
            priority is to become the "top of mind" brand for developers,
            investors, and founders. An all-in- one ecosystem to develop web3
            projects globally with offices in Barcelona and Toronto to cover the
            markets in Europe and North America.
          </p>
          <p className="seg">
            Nuclio Labs welcomes the future and is excited to power the next
            generation of web3 start-ups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
