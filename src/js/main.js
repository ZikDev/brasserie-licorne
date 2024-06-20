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
  width: "136.247px",
  height: "25px",
});

var burger = document.querySelector(".burger");
var menu = document.querySelector(".burger-menu");
var title = document.querySelector(".title-logo");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  title.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
