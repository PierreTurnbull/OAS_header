var navOpener       = document.querySelector(".open-nav");
var navCloser       = document.querySelector(".close-nav");
var navOpenerImg    = document.querySelector(".open-nav-img");
var menu            = document.querySelector(".desktop-menu");
var shareBtn        = document.querySelector(".share-btn");
var navList         = document.querySelector(".nav-list-menu");
var body            = document.body;

var menuIsOpen      = false;

function openMenuS() {
    console.log("open S");
    menu.style.left = "0";
    shareBtn.style.left = "0";
    body.style.overflow = "hidden";
}

function openMenuM() {
    console.log("open M");
    navOpenerImg.src = "img/close-nav.png";
    navOpenerImg.style.height = "22px";
    navList.style.display = "block";
    setTimeout(() => {
        navList.style.height = "500px";
    }, 0);
    menuIsOpen = true;
}

function closeMenuS() {
    console.log("close S");
    menu.style.left = "-100vw";
    shareBtn.style.left = "-200vw";
    body.style.overflow = "scroll";
}

function closeMenuM() {
    console.log("close M");
    navOpenerImg.src = "img/open-nav.png";
    navOpenerImg.style.height = "15px";
    navList.style.height = "0px";
    setTimeout(() => {
        navList.style.display = "none";
    }, 300);
    menuIsOpen = false;
}

navOpener.addEventListener("click", () => {
    if (window.innerWidth >= 1024 && !menuIsOpen) {
        openMenuM();
    } else if (window.innerWidth >= 1024) {
        closeMenuM();
    } else {
        openMenuS();
    }
});

navCloser.addEventListener("click", () => {
    closeMenuS();
});
