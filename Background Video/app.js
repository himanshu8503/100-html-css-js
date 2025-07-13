const Vol_btn = document.querySelector('.btn');
const video = document.querySelector('video');


Vol_btn.addEventListener('click',() => {
    Vol_btn.classList.toggle("fa-volume-high");
    Vol_btn.classList.toggle("fa-volume-xmark")
    video.muted?video.muted = false: video.muted=true;
})