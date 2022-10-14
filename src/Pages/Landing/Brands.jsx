import "./styles/Brands.css";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { animationToTop } from "./anim";
const Brands = () => {
  gsap.registerPlugin(ScrollToPlugin);
  return (
    <div id="brand" className="brands scroll-section">
      <img
        onClick={() => animationToTop()}
        src="/logo-white.png"
        alt=""
        className="logo"
      />

      <h1 className="thet">
        <span className="thet">Our</span> Investments
      </h1>
      <div className="brand-box">
        <img src="/brands/brands (3).png" alt="" className="brand-img bigger" />
        <img src="/brands/brands (4).png" alt="" className="brand-img bigger" />
        <img
          src="/brands/brands (2).png"
          alt=""
          className="brand-img bigger margin-left-10px"
        />
        <img
          src="/brands/brands (8).png"
          alt=""
          className="brand-img smaller end-just"
        />
        <img
          src="/brands/brands (1).png"
          alt=""
          className="brand-img bit-bigger margin-top-3px"
        />
        <img
          src="/brands/brands (6).png"
          alt=""
          className="brand-img margin-left-8px"
        />
        <img src="/brands/brands (7).png" alt="" className="brand-img center" />
        <img
          src="/brands/brands (5).png"
          alt=""
          className="brand-img end-just"
        />
      </div>
      <img
        onClick={() => {
          gsap.to(window, {
            scrollTo: "#decade",
          });
        }}
        src="/arrow-white.svg"
        alt=""
        className="arrow"
      />
    </div>
  );
};

export default Brands;
