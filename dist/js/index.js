let menuBar = document.querySelector(".menu-bar-parent");
let menuBranding = document.querySelector(".menu-branding");
let menuBtn = document.querySelector(".menu-btn-parent");
let body = document.getElementById("bakground-img");
let menuBtnItems = document.querySelectorAll(".menu-btn")

let menuBarShow = false;

menuBar.addEventListener("click", show);

function show() {
    if(!menuBarShow) {
        menuBar.classList.add("close");
        menuBranding.classList.add("show");
        menuBtn.classList.add("show");

        menuBarShow = true;
    } else {
        menuBar.classList.remove("close");
        menuBranding.classList.remove("show");
        menuBtn.classList.remove("show");

        menuBarShow = false;
    }
}