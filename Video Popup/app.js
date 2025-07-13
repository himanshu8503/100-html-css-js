const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const traler = document.querySelector(".trailer-container");
const video = document.querySelector("video");




btn.addEventListener('click',() => {
    traler.classList.remove("active");
});

closeIcon.addEventListener("click",() => {
    traler.classList.add("active");
    video.pause();
    video.currentTime = 0;
})