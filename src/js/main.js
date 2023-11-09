import { gsap } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".intro", {
  scrollTrigger: {
    trigger: ".intro",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
  backgroundPositionY: "40%",
});
