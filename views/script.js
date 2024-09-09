"use strict";

const primaryNavigation = document.getElementById("primary-navigation");
const btnHamburger = document.getElementById("hamburger-button");

btnHamburger.addEventListener("click", () => {
    primaryNavigation.classList.toggle("open");
    btnHamburger.setAttribute("aria-expanded", btnHamburger.getAttribute("aria-expanded") === "false" ? "true" : "false");
})