const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(event) => {
    console.log(event.pageX);
    follow(event.pageX,event.pageY);
})

function follow(pagex,pagey){
    cursor.style.left = pagex + "px";
    cursor.style.top = pagey + "px";
}
