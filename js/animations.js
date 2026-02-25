// @ts-nocheck

gsap.registerPlugin(ScrollTrigger);
// start header animation
const headerTitle = document.querySelector(".header__title");
gsap.from(headerTitle, {
  duration: 1.5,
  x: -500,
  opacity: 0,
  skewX: -15,
  skewY: -15,
  ease: "power3.out",
});

const headerMenuList = document.querySelectorAll(".header__menu-item");
const tweenMenuItems = [];
headerMenuList.forEach((item, index) => {
  tweenMenuItems.push(
    gsap
      .from(item, {
        duration: 1.5,
        x: 500,
        opacity: 0,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      })
      .delay(0.05 * index),
  );
});

let timeoutRemoveMobileMenu = null;

function removeMobileMenu() {
  clearTimeout(timeoutRemoveMobileMenu);
  timeoutRemoveMobileMenu = setTimeout(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= 1024) {
      const header = document.querySelector(".header.header--menu-open");
      header.classList.remove("header--menu-open");
    }
  }, 250);
}

window.addEventListener("resize", () => {
  removeMobileMenu();
});

function restartAnimationMenuMobile() {
  tweenMenuItems.forEach((tweenMenuItem, index) => {
    tweenMenuItem
      .restart()
      .delay(0.15 * index)
      .duration(1);
  });
}

const headerHamburger = document.querySelector(".header__hamburger");
headerHamburger.addEventListener("click", () => {
  console.log("mandehana");
  restartAnimationMenuMobile();
});

// end header animation

// start creation animation
const items = document.querySelectorAll(".gallery__item");
items.forEach((item, index) => {
  gsap
    .from(item, {
      duration: 1,
      x: -500,
      opacity: 0,
      skewX: -15,
      skewY: 15,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    })
    .delay(0.05 * index);
});
// end creation animation

// start footer animation
const footerLogo = document.querySelector(".footer__logo");
gsap.from(footerLogo, {
  duration: 1.5,
  x: -400,
  opacity: 0,
  skewX: -15,
  skewY: -15,
  ease: "power3.out",
});

const footerMenuList = document.querySelectorAll(".footer__menu-item");
footerMenuList.forEach((item, index) => {
  gsap
    .from(item, {
      duration: 1.5,
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        markers: true,
        toggleActions: "restart none none reset",
      },
    })
    .delay(0.05 * footerMenuList.length - 0.05 * index);
});

const footerMediaList = document.querySelectorAll(".footer__media");
footerMediaList.forEach((item, index) => {
  gsap
    .from(item, {
      duration: 1.5,
      x: 500,
      opacity: 0,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    })
    .delay(0.05 * index);
});

const copyright = document.querySelector(".footer__copyright");
gsap.from(copyright, {
  duration: 1.5,
  x: 500,
  opacity: 0,
  scrollTrigger: {
    trigger: copyright,
    start: "top 80%",
    toggleActions: "restart none none reset",
  },
});
// end footer animation