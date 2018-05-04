var navOpener = document.querySelector(".open-nav");
var navCloser = document.querySelector(".close-nav");
var menu      = document.querySelector(".desktop-menu");
var shareBtn  = document.querySelector(".share-btn");
var navList   = document.querySelector(".nav-list-menu");
var body      = document.body;

function openMenuS() {
    console.log("open S");
    menu.style.left = "0";
    shareBtn.style.left = "0";
    body.style.overflow = "hidden";
}

function openMenuM() {
    console.log("open M");
    navList.style.left = "0";
    navCloser.style.left = "0";
}

function closeMenuS() {
    console.log("close S");
    menu.style.left = "-100vw";
    shareBtn.style.left = "-200vw";
    body.style.overflow = "scroll";
}

function closeMenuM() {
    console.log("close M");
    navList.style.left = "-438px";
    navCloser.style.left = "-438px";
}

navOpener.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {
        openMenuM();
    } else {
        openMenuS();
    }
});

navCloser.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {
        closeMenuM();
    } else {
        closeMenuS();
    }
});
