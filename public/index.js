const navHamburger = document.querySelector(".header__hamburger");
const modalNav = document.querySelector(".modal");
const body = document.querySelector("body");
let menuOpen = false;

navHamburger.addEventListener("click", () => {
  if (!menuOpen) {
    navHamburger.classList.add("header__hamburger--active");
    modalNav.classList.add("modal--active");
    body.classList.add("no-scroll");
    menuOpen = true;
  } else {
    navHamburger.classList.remove("header__hamburger--active");
    modalNav.classList.remove("modal--active");
    body.classList.remove("no-scroll");
    menuOpen = false;
  }
});
