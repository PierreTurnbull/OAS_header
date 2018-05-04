var navOpener = document.querySelector(".open-nav");
var navCloser = document.querySelector(".close-nav");
var menu      = document.querySelector(".desktop-menu");
var shareBtn  = document.querySelector(".share-btn");
var body      = document.body;

function openMenu() {
    menu.style.left = "0";
    shareBtn.style.left = "0";
    body.style.overflow = "hidden";
}

function closeMenu() {
    menu.style.left = "-100vw";
    shareBtn.style.left = "-200vw";
    body.style.overflow = "scroll";
}

navOpener.addEventListener("click", () => {
    openMenu();
});

navCloser.addEventListener("click", () => {
    closeMenu();
});
