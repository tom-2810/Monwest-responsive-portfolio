// let fullscreenFeatured = document.querySelector(".fullscreen.featured");
// let featured = document.querySelector(".featured");

// let featuredContainer = document.querySelector(".project-container#featured");

// fullscreenFeatured.addEventListener("click", () => {
//     fullscreenFeatured.classList.toggle("open");
//     fullscreenFeatured.classList.toggle("close");
//     document.body.classList.toggle("noscroll");
// });

// featuredContainer.addEventListener("click", () => {
//     console.log(featuredContainer);
//     let featuredContainerWidth = featuredContainer.clientWidth;
//     let featuredContainerHeight = featuredContainer.clientHeight;

//     let featuredContainerX = featuredContainer.getBoundingClientRect().left;
//     let featuredContainerY = featuredContainer.getBoundingClientRect().top;

//     console.log("X: " + featuredContainerX, "Y: " + featuredContainerY);
//     fullscreenFeatured.style.clipPath = `circle(0rem at ${featuredContainerX + (featuredContainerWidth / 2)}px ${featuredContainerY + (featuredContainerHeight / 2)}px)`

//     if (fullscreenFeatured.classList.contains("closed")) {
//         fullscreenFeatured.classList.toggle("closed");
//     }

//     if (fullscreenFeatured.classList.contains("close")) {
//         fullscreenFeatured.classList.toggle("close");
//     }

//     fullscreenFeatured.classList.toggle("open");
//     document.body.classList.toggle("noscroll");
// });







document.querySelectorAll(".project-container").forEach(projectContainer => {
    projectContainer.addEventListener("click", () => {
        // console.log(projectContainer);
        containerHandler(projectContainer);
    });
});

document.querySelectorAll(".fullscreen").forEach(projectFullscreen => {
    projectFullscreen.addEventListener("click", () => {
        fullscreenHandler(projectFullscreen);
    });
});

function containerHandler(projectContainer) {
    //TODO deze oplossing is nog foutgevoelig. id en class moeten nu namelijk exact hetzelfde zijn.
    let projectFullscreen = document.querySelector(`.fullscreen.${projectContainer.id}`);

    // console.log(projectFullscreen);

    let projectContainerWidth = projectContainer.clientWidth;
    let projectContainerHeight = projectContainer.clientHeight;

    let projectContainerX = projectContainer.getBoundingClientRect().left;
    let projectContainerY = projectContainer.getBoundingClientRect().top;

    console.log("X: " + projectContainerX, "Y: " + projectContainerY);
    projectFullscreen.style.clipPath = `circle(0rem at ${projectContainerX + (projectContainerWidth / 2)}px ${projectContainerY + (projectContainerHeight / 2)}px)`

    if (projectFullscreen.classList.contains("closed")) {
        projectFullscreen.classList.toggle("closed");
    }

    if (projectFullscreen.classList.contains("close")) {
        projectFullscreen.classList.toggle("close");
    }

    projectFullscreen.classList.toggle("open");
    document.body.classList.toggle("noscroll");
}

function fullscreenHandler(projectFullscreen) {
    projectFullscreen.classList.toggle("open");
    projectFullscreen.classList.toggle("close");
    document.body.classList.toggle("noscroll");
}