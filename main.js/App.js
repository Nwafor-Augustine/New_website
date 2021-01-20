const mediaCheck = window.matchMedia('(max-width: 1000px)');
const menu_bar = document.querySelector("#menu_bar");
const menu = document.querySelector("#menu_bar");
const nav = document.querySelector("#nav_link");
const slideContainer = document.querySelector(".slider_container");
const slideImage = document.querySelectorAll(".comments_slider");
const navdot = document.querySelector(".sliderdot");
var registerIcon = document.querySelector(".fa");
var register = document.querySelector(".register")

// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev")
let clickCheck = 0;
let slideimageNumber = slideImage.length;
let currentIndex = 0;


mediaCheck.addEventListener("change", checkScreenSize)
checkScreenSize(mediaCheck);

menu.addEventListener("click", navShow);
registerIcon.addEventListener("click", openRegister)
init();
sliderPosition();





















// nextBtn.addEventListener("click", () => {
//     currentIndex++
//     if (currentIndex >= slideimageNumber) {
//         currentIndex = 0;
//     }

//     showslide(currentIndex)
// })



// prevBtn.addEventListener("click", () => {
//     currentIndex--
//     if (currentIndex < 0) {
//         currentIndex = 0;
//         showslide(slideImage.length - 1);
//     }

//     showslide(currentIndex)
// })






