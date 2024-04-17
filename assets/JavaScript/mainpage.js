// Select the nav links
const tampaLink = document.getElementById('tampa');
const atlantaaLink = document.getElementById('atlanta');
const philiLink = document.getElementById('philadelphia')
const miamiLink = document.getElementById('miami')
const pittLink = document.getElementById('pittsburgh')

// Add event listeners to the nav links and set city value in local storage
tampaLink.addEventListener('click', function() {localStorage.setItem('city', JSON.stringify('tampa'));});
atlantaaLink.addEventListener('click', function() {localStorage.setItem('city', JSON.stringify('atlanta'));});
philiLink.addEventListener('click', function () {localStorage.setItem('city', JSON.stringify('philadelphia'));});
miamiLink.addEventListener('click', function () {localStorage.setItem('city', JSON.stringify('miami'));});
pittLink.addEventListener('click', function () {localStorage.setItem('city', JSON.stringify('pittsburgh'));});


// Define Variables
let nextArrow = document.getElementById('next');
let previousArrow = document.getElementById('previous');
let slider1 = document.querySelector('.slider');
let slider2 = slider1.querySelector('.slider .list');
let thumbnail1 = document.querySelector('.slider .thumbnail');
let thumbnail2 = thumbnail1.querySelectorAll('.item');
let time1 = document.querySelector('.slider .time');

// append thumbnail2 to thumbnail1
thumbnail1.appendChild(thumbnail2[0]);

// define animation variable time
let animationRunning = 3000;
let autoRun = 15000;

// onclick setup for next arrow on mainpage - function trigger
nextArrow.onclick = function(){
    showSlider('next');    
}
// onclick setup for previous arrow on mainpage - function trigger
previousArrow.onclick = function(){
    showSlider('previous');    
}

// set timeout for on next.click to restart autorun function
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, autoRun)

// function for slider, to show next or previous image based on click on mainpage 
function showSlider(type){
    let  SliderItemsDom = slider2.querySelectorAll('.slider .list .item');
    let thumbnail2 = document.querySelectorAll('.slider .thumbnail .item');
    // if statement for next or previous image append
    if(type === 'next'){
        slider2.appendChild(SliderItemsDom[0]);
        thumbnail1.appendChild(thumbnail2[0]);
        slider1.classList.add('next');
    }else{
        slider2.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnail1.prepend(thumbnail2[thumbnail2.length - 1]);
        slider1.classList.add('previous');
    }
    // clear timeout for animationRunning to reset on click
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        slider1.classList.remove('next');
        slider1.classList.remove('previous');
    }, animationRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, autoRun)
}


// commented out notes for presentation
// Set a variable for next and previous arrows on mainpage
// allows users to click through images on mainpage by running the showSlider function
// on next arrow click autorun will restart and still function
// animationRunning is set to 3000ms which will delay the amount of time you have before
// you can click on the next or previous arrow again. Allowing the animation to finish
// autoRun is set to 15000ms which will delay the amount of time before the next image
// will show automatically