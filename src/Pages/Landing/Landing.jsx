import About from "./About";
import Decade from "./Decade";
import Brands from "./Brands";
import Hero from "./Hero";
import Team from "./Team";
import End from "./End";
import { useEffect } from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/all";

const Landing = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    const scrolling = {
      enabled: true,
      events: "scroll,wheel,touchmove,pointermove".split(","),
      prevent: (e) => e.preventDefault(),
      disable() {
        if (scrolling.enabled) {
          scrolling.enabled = false;
          window.addEventListener("scroll", gsap.ticker.tick, {
            passive: true,
          });
          scrolling.events.forEach((e, i) =>
            (i ? document : window).addEventListener(e, scrolling.prevent, {
              passive: false,
            })
          );
        }
      },
      enable() {
        if (!scrolling.enabled) {
          scrolling.enabled = true;
          window.removeEventListener("scroll", gsap.ticker.tick);
          scrolling.events.forEach((e, i) =>
            (i ? document : window).removeEventListener(e, scrolling.prevent)
          );
        }
      },
    };

    function goToSection(section, anim, i) {
      if (scrolling.enabled) {
        // skip if a scroll tween is in progress
        scrolling.disable();

        gsap.to(window, {
          scrollTo: { y: section, autoKill: false },
          onComplete: scrolling.enable,
          duration: 0.8,
        });

        anim && anim.restart();
      }
    }
    document.querySelectorAll(".scroll-section").forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () => goToSection(section),
        onEnterBack: () => goToSection(section),
      });
    });

    // ScrollTrigger.create({
    //   trigger: panel,
    //   start: "bottom bottom",

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="landing">
      <Hero />
      <About />
      <Brands />
      <Decade />
      <Team />
      <End />
    </div>
  );
};

export default Landing;
