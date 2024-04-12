
let nextArrow = document.getElementById('next');
let previousArrow = document.getElementById('previous');

let slider1 = document.querySelector('.slider');
let slider2 = slider1.querySelector('.slider .list');
let thumbnail1 = document.querySelector('.slider .thumbnail');
let thumbnail2 = thumbnail1.querySelectorAll('.item');
let time1 = document.querySelector('.slider .time');

thumbnail1.appendChild(thumbnail2[0]);
let animationRunning = 3000;
let autoRun = 7000;

nextArrow.onclick = function(){
    showSlider('next');    
}

previousArrow.onclick = function(){
    showSlider('previous');    
}

// comment this line to stop auto run


let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, autoRun)


function showSlider(type){
    let  SliderItemsDom = slider2.querySelectorAll('.slider .list .item');
    let thumbnail2 = document.querySelectorAll('.slider .thumbnail .item');
    
    if(type === 'next'){
        slider2.appendChild(SliderItemsDom[0]);
        thumbnail1.appendChild(thumbnail2[0]);
        slider1.classList.add('next');
    }else{
        slider2.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnail1.prepend(thumbnail2[thumbnail2.length - 1]);
        slider1.classList.add('previous');
    }
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
