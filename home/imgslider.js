const nextEl= document.querySelector(".next");

const prevEl= document.querySelector(".prev");

const imageEl= document.querySelector(".image");

const imgsno= document.querySelectorAll("img"); //to give no. of images under the .image class

let currentimg=1;
let timeout;

nextEl.addEventListener("click", ()=>{
    currentimg++;
    clearTimeout(timeout); //to clear the timer when right or left arrows are clicked
    updateImg();
});

prevEl.addEventListener("click", ()=>{
    currentimg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg(){
    if(currentimg > imgsno.length){
        currentimg=1;
    }

    else if(currentimg < 1){
        currentimg= imgsno.length;
    }

    //imageEl.style.transform="translateX(-1000px)"
    imageEl.style.transform=`translateX(-${(currentimg-1)*1000}px)`;
    
    timeout = setTimeout(()=>{
        currentimg++;
        updateImg();
    }, 3000)
}



