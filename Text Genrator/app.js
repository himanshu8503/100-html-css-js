const text = document.querySelector('.text');
const cursor = document.querySelector('.cursor');

const words = ['Awesome','Cool','Fun','Life','Weird','FuckedUp'];

const newlettertime = 2000;
const typingtime = 200;
const erasingtime = 200;

let index = 0;
let charindex = 0;

document.addEventListener('DOMContentLoaded',() => {
    if(words.length)
    {
        setTimeout(type,newlettertime);
    }
} )

function type(){
    if(charindex < words[index].length)
    {
        text.textContent += words[index].charAt(charindex);
        charindex++;
        setTimeout(type,typingtime);
    }
    else {
        setTimeout(erase,newlettertime);
    }
}

function erase()
{
    if(charindex > 0)
    {
        text.textContent = words[index].substring(0,charindex-1);
        charindex--;
        setTimeout(erase,erasingtime);
    }
    else {
        index++;
        if(index >= words.length){
            index = 0;
        }
        setTimeout(type,typingtime + 1100);
    }
}



