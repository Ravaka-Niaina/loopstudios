// @ts-nocheck
const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__hamburger");
const headerClose = document.querySelector(".header__close");

hamburger.addEventListener("click", () => {
  header.classList.add("header--menu-open");
});

headerClose.addEventListener("click", () => {
  header.classList.remove("header--menu-open");
});