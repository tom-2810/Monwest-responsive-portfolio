let projectImage = document.querySelector("#projects .project img");

var scrollBefore = 0;
var updateY = 0;

let enableCall = true;
window.addEventListener('scroll',function(e){

if (!enableCall) return;

enableCall = false;

const scrolled = window.scrollY;

if(scrollBefore > scrolled){
console.log("ScrollUP");
scrollBefore = scrolled;
updateY = updateY + 4;
projectImage.style.transform = `translateY(${updateY}px)`;
//Desired action
}else{
scrollBefore = scrolled;
console.log("ScrollDOWN");
updateY = updateY - 4;
projectImage.style.transform = `translateY(${updateY}px)`;
//Desired action
}

setTimeout(() => enableCall = true, 50);

});