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

var burger = document.querySelector(".burger");
var menu = document.querySelector(".burger-menu");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
