let forwardButton = document.getElementById('forward');
let backButton = document.getElementById('backward');


let slider1 = document.querySelector('.slider');
let slider2 = slider1.querySelector('.slider .list');
let thumbnail1 = document.querySelector('.slider .thumbnail');
let thumbnail2 = thumbnail1.querySelectorAll('.item');
let time1 = document.querySelector('.slider .time');

thumbnail1.appendChild(thumbnail2[0]);
let animationRunning = 3000;
let autoRun = 7000;

forwardButton.onclick = function(){
    revealSlider('forward');    
}

backButton.onclick = function(){
    revealSlider('backward');    
}

let animationTimeOut;
let autoRunNext = setTimeout(() => {
    forwardButton.click();
}, autoRun)

function revealSlider(type){
    let  slider2 = slider1.querySelectorAll('.slider .list .item');
    let thumbnail2 = document.querySelectorAll('.slider .thumbnail .item');
    
    if(type === 'forward'){
        slider1.appendChild(slider2[0]);
        thumbnail1.appendChild(thumbnail2[0]);
        slider1.classList.add('forward');
    }else{
        slider1.prepend(slider2[slider2.length - 1]);
        thumbnail1.prepend(thumbnail2[thumbnail2.length - 1]);
        slider1.classList.add('backward');
    }
    clearTimeout(animationTimeOut);
    animationTimeOut = setTimeout(() => {
        slider1.classList.remove('forward');
        slider1.classList.remove('backward');
    }, animationRunning);

    clearTimeout(autoRunNext);
    autoRunNext = setTimeout(() => {
        forwardButton.click();
    }, autoRun)
} 