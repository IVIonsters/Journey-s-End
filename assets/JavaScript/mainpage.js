let forwardButton = document.getElementById('forward');
let backButton = document.getElementById('back');
let sliderDOM = document.querySelector('.slider');
let listDOM = document.querySelector('.slider .list');
let thumbnails = document.querySelector('.slider .thumbnail');

forwardButton.onclick = function() {
    moveSlider('forward');
}

function moveSlider(type) {
    let sliderItems = document.querySelectorAll('.slider .list .item');
    let thumbnailItems = document.querySelectorAll('.slider .thumbnail .item');

    if (type === 'forward') {
        listDOM.appendChild(sliderItems[0]);
    }
}