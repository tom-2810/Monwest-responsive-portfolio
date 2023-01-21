let fullscreenFeatured = document.querySelector(".fullscreen.featured");
let featured = document.querySelector(".featured");

let featuredContainer = document.querySelector(".project-container#featured");

fullscreenFeatured.addEventListener("click", () => {
    fullscreenFeatured.classList.toggle("open");
    fullscreenFeatured.classList.toggle("close");
    document.body.classList.toggle("noscroll");
});

featured.addEventListener("click", () => {
    let featuredContainerWidth = featuredContainer.clientWidth;
    let featuredContainerHeight = featuredContainer.clientHeight;

    let featuredContainerX = featuredContainer.getBoundingClientRect().left;
    let featuredContainerY = featuredContainer.getBoundingClientRect().top;

    console.log("X: " + featuredContainerX, "Y: " + featuredContainerY);
    fullscreenFeatured.style.clipPath = `circle(0rem at ${featuredContainerX + (featuredContainerWidth / 2)}px ${featuredContainerY + (featuredContainerHeight / 2)}px)`

    if (fullscreenFeatured.classList.contains("closed")) {
        fullscreenFeatured.classList.toggle("closed");
    }

    if (fullscreenFeatured.classList.contains("close")) {
        fullscreenFeatured.classList.toggle("close");
    }

    fullscreenFeatured.classList.toggle("open");
    document.body.classList.toggle("noscroll");
});