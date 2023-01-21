let fullscreen = document.querySelector(".fullscreen");
let featured = document.querySelector(".featured");

fullscreen.addEventListener("click", () => {
    fullscreen.classList.toggle("open");
    fullscreen.classList.toggle("close");
});

featured.addEventListener("click", () => {
    // featured.style.visibility = "hidden";
    if(fullscreen.classList.contains("closed")) {
        fullscreen.classList.toggle("closed");
    }

    if(fullscreen.classList.contains("close")) {
    fullscreen.classList.toggle("close");
    }

    fullscreen.classList.toggle("open");
});