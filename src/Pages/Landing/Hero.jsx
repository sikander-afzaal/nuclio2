import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useEffect } from "react";
import "./styles/Hero.css";

const Hero = () => {
  gsap.registerPlugin(ScrollToPlugin);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector(".mobile-vid").play();
    });
  }, []);

  return (
    <div id="hero" className="hero scroll-section">
      <video
        src="/Landing with Logo.mp4"
        loop
        autoPlay
        playsInline
        controls={false}
        muted
        className="desktop-vid"
      />
      <video
        src="/Landing with Logo Vertical.mp4"
        loop
        autoPlay
        playsInline
        controls={false}
        muted
        className="mobile-vid"
      />
      <img
        onClick={() => {
          gsap.to(window, {
            scrollTo: "#about",
          });
        }}
        src="/arrow-white.svg"
        alt=""
        className="arrow"
      />
    </div>
  );
};

export default Hero;
