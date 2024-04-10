let forwardButton = document.getElementById('forward');
let backButton = document.getElementById('back');
let sliderDOM = document.querySelector('.slider');
let listDOM = document.querySelector('.slider .list');
let thumbnails = document.querySelector('.slider .thumbnail');

forwardButton.onclick = function() {
    moveSlider('forward');
}

backButton.onclick = function() {
    moveSlider('back');
}

let animationTime = 3000;
let animationTimeOut;

function moveSlider(type) {
    let sliderItems = document.querySelectorAll('.slider .list .item');
    let thumbnailItems = document.querySelectorAll('.slider .thumbnail .card');

    if (type === 'forward') {
        listDOM.appendChild(sliderItems[0]);
        thumbnails.appendChild(thumbnailItems[0]);
        sliderDOM.classList.add('forward');
    } else {
        let positionLastThumbnail = thumbnailItems.length - 1;
        listDOM.prepend(sliderItems[positionLastThumbnail]);
    }

    clearTimeout(animationTimeOut);
    animationTimeOut = setTimeout(() => {
        sliderDOM.classList.remove('forward');
    }, animationTime);
}