// grab root html
const htmlEl = document.getElementById("stanley");
// grab images
const phillyImg = document.querySelectorAll(".philly");
const tampaImg = document.querySelectorAll(".tampa");
const miamiImg = document.querySelectorAll(".miami");
const pittImg = document.querySelectorAll(".pitt");
const atlantaImg = document.querySelectorAll(".atlanta");
// grab buttons
const dayButtons = document.querySelectorAll(".dayBtn");
const nightButtons = document.querySelectorAll(".nightBtn");


function sunrise() {
    // set light mode
    htmlEl.removeAttribute("data-bs-theme");
     // set img src = light image
    phillyImg.setAttribute("src", "./assets/images/philly-light.png");
    tampaImg.setAttribute("src", "./assets/images/tampa-light.png");
    miamiImg.setAttribute("src", "./assets/images/miami-light2.png");
    pittImg.setAttribute("src", "./assets/images/pitt-light.png");
    atlantaImg.setAttribute("src", "./assets/images/atlanta-light.png");
};

function sunset() {
    // set dark mode
    htmlEl.setAttribute("data-bs-theme", "dark");
    // set img src = dark image
    phillyImg.setAttribute("src", "./assets/images/philly-dark.png");
    tampaImg.setAttribute("src", "./assets/images/tampa-dark.png");
    miamiImg.setAttribute("src", "./assets/images/miami-dark2.png");
    pittImg.setAttribute("src", "./assets/images/pitt-dark.png");
    atlantaImg.setAttribute("src", "./assets/images/atlanta-dark.png");
};


dayButtons.forEach(function(dayButton) {
    dayButton.addEventListener("click", sunrise)
});
nightButtons.forEach(function(nightButton) {
    nightButton.addEventListener("click", sunset)
});