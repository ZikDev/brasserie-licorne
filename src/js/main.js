import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".title-logo", {
  scrollTrigger: {
    trigger: ".title-logo",
    start: "top-=300",
    end: "bottom top",
    scrub: 1,
  },
  top: "35px",
  width: "163.497px",
  height: "30px",
});
