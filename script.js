var navOpener = document.querySelector(".open-nav");
var navCloser = document.querySelector(".close-nav");
var menu      = document.querySelector(".desktop-menu");

function openMenu() {
    menu.style.left = "0";
}

function closeMenu() {
    menu.style.left = "-100vw";
}

navOpener.addEventListener("click", () => {
    openMenu();
});

navCloser.addEventListener("click", () => {
    closeMenu();
});
