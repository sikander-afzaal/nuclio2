import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger, Sine } from "gsap/all";

export const animationToTop = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  ScrollTrigger.getAll().forEach((st) => st.kill());
  gsap.to(window, {
    scrollTo: "#hero",
  });
  setTimeout(() => {
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
          ease: Sine.easeOut,
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
  }, 700);
};
