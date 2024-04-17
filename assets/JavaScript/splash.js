let splash = document.querySelector('.splashpage');
let sloganSpan = document.querySelectorAll('.slogan');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        sloganSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 800)
        });

        setTimeout(() => {
            sloganSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, 6000)
            })
        }, 200);

        setTimeout(() => {
            splash.style.top = '-100vh';
        }, 7000)
    })
})