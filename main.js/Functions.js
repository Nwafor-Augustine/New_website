function checkScreenSize(x) {

    menu_bar.classList.remove("nodisplay");
    menu_bar.classList.add("display");
    if (x.matches) {
        menu_bar.classList.remove("nodisplay");
        menu_bar.classList.add("display");
    } else {
        menu_bar.classList.add("nodisplay");
        menu_bar.classList.remove("display");
    }

}


function navShow() {

    nav.classList.add("navdisplay")
    clickCheck++

    if (clickCheck == 2) {
        clickCheck = 0;

        nav.classList.remove("navdisplay")
    }


}



function init() {
    for (let f = 0; f < slideimageNumber; f++) {
        let dot = document.createElement("div");
        dot.classList.add("single_dot");
        navdot.appendChild(dot);
        dot.addEventListener("click", () => {
            showslide(f);
        })
    }

    navdot.children[0].classList.add("active")

}



function sliderPosition() {

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%"
    })
    slideImage[0].classList.add("active")

}





function showslide(slideindex) {
    slideContainer.style.transform = `translate(-${slideindex * 100}%)`
    currentIndex = slideindex;
    setActiveSlide();


}



function setActiveSlide() {
    let currentDot = document.querySelector(".single_dot.active")
    currentDot.classList.remove("active")
    console.log(currentIndex)

    navdot.children[currentIndex].classList.add("active")
}

function openRegister() {

    register.classList.toggle("mobile")
}



