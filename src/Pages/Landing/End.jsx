import "./styles/End.css";
import { animationToTop } from "./anim";

const End = () => {
  return (
    <div id="end" className="end scroll-section">
      <video
        src="/Ending.mp4"
        loop
        autoPlay
        playsInline
        controls={false}
        muted
        className="desktop-vid"
      />
      <video
        src="/Ending Vertical.mp4"
        loop
        autoPlay
        playsInline
        controls={false}
        muted
        className="mobile-vid"
      />
      <div className="end-box">
        <img src="/logo-name.png" alt="" />
        <p className="seg">
          Barcelona <span></span> Toronto
        </p>
        <div>
          <a className="seg" href="mailto:info@nucliolabs.com">
            info@nucliolabs.com{" "}
          </a>
          <span></span>
          <a
            className="seg"
            target={"blank"}
            href="https://twitter.com/nucliolabs"
          >
            @nucliolabs
          </a>
        </div>
      </div>

      <img
        onClick={() => {
          animationToTop();
        }}
        src="/arrow-up.svg"
        alt=""
        className="arrow rotate"
      />
    </div>
  );
};

export default End;
