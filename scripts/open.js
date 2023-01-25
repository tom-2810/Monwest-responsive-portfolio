let featuredContainer = document.querySelector(".project-container#featured");
let featuredFullscreen = document.querySelector(".fullscreen.featured");



featuredContainer.addEventListener("click", () => {
    document.body.classList.toggle("noscroll");
    document.querySelector("main").style.overflowX = "hidden";


    let featuredContainerX = featuredContainer.getBoundingClientRect().left;
    let featuredContainerY = featuredContainer.getBoundingClientRect().top;

    console.log(featuredContainerX, featuredContainerY)

    // featuredFullscreen.style.left = `${featuredContainerY}`;

    if(featuredContainerY < 0) {
        console.log(featuredContainerY)
        if(featuredFullscreen.classList.contains("open")) {
            featuredFullscreen.style.transform = null;
        } else {
    document.querySelector("main").style.overflowX = "visible";

            featuredFullscreen.style.transform = `translateX(-${featuredContainerX}px) translateY(${-1*featuredContainerY}px)`;
            console.log(featuredContainerY)
        }
    }

    if(featuredFullscreen.classList.contains("open")) {
        featuredFullscreen.style.transform = null;
    } else {
    document.querySelector("main").style.overflowX = "visible";

        featuredFullscreen.style.transform = `translateX(-${featuredContainerX}px) translateY(-${featuredContainerY}px)`;
    }

        
    featuredFullscreen.style.transition = ".2s ease";
    featuredFullscreen.classList.toggle("open");
    
})