const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger");
const slideMenuClose = document.querySelector("#slideMenuClose")

hamburgerMenu.addEventListener("click", onHamburgerClick);
slideMenuClose.addEventListener("click", onSlideMenuCloseClick)

function onHamburgerClick() {
    menu.classList.remove("hidden")
}
function onSlideMenuCloseClick() {
    menu.classList.add("hidden")
}