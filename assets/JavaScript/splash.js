// defined variables
let splash = document.querySelector('.splashpage');
let sloganSpan = document.querySelectorAll('.slogan');

// event listenter to trigger Timeout animations on content load
window.addEventListener('DOMContentLoaded', () => {
    // timeout delay before adding active class to sloganSpan
    setTimeout(() => {
        sloganSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 800)
        });
    // timeout delay before removing active and setting fade class from css
        setTimeout(() => {
            sloganSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, 6000)
            })
        }, 200);
        // timeout delay before remove splash page entirely
        setTimeout(() => {
            splash.style.top = '-100vh';
        }, 7000)
    })
})

// Commented out as notes for presentation.
// I wanted to create a splash page that would display a series of slogans in a sequence,
// then fade out and remove itself from the DOM.
// I set a timeout function to delay adding different classes and removing them to create
// the appearance of a sequence of animations.
// I then used a final timeout function to remove the splash page from the DOM entirely.
