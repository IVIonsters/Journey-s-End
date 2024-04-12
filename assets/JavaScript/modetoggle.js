// grab root html
const htmlEl = document.getElementById("stanley");
// grab images
const phillyBig = document.getElementById("big-philly");
const phillySmol = document.getElementById("lil-philly");
const tampaBig = document.getElementById("big-tampa");
const tampaSmol = document.getElementById("lil-tampa");
const miamiBig = document.getElementById("big-miami");
const miamiSmol = document.getElementById("lil-miami");
const pittBig = document.getElementById("big-pitt");
const pittSmol = document.getElementById("lil-pitt");
const atlantaBig = document.getElementById("big-atlanta");
const atlantaSmol = document.getElementById("lil-atlanta");
// grab buttons
const dayButtons = document.querySelectorAll(".dayBtn")
const nightButtons = document.querySelectorAll(".nightBtn")


function sunrise() {
    // set light mode
    htmlEl.removeAttribute("data-bs-theme");
     // set img src=light
    //  let city 
    //  city.setAttribute("src", `./assets/images/${city}-light.png`);
    phillyBig.setAttribute("src", "./assets/images/philly-light.png");
    tampaBig.setAttribute("src", "./assets/images/tampa-light.png");
    miamiBig.setAttribute("src", "./assets/images/miami-light2.png");
    pittBig.setAttribute("src", "./assets/images/pitt-light.png");
    atlantaBig.setAttribute("src", "./assets/images/atlanta-light.png");
    phillySmol.setAttribute("src", "./assets/images/philly-light.png");
    tampaSmol.setAttribute("src", "./assets/images/tampa-light.png");
    miamiSmol.setAttribute("src", "./assets/images/miami-light2.png");
    pittSmol.setAttribute("src", "./assets/images/pitt-light.png");
    atlantaSmol.setAttribute("src", "./assets/images/atlanta-light.png");
};

function sunset() {
    // set dark mode
    htmlEl.setAttribute("data-bs-theme", "dark");
    // set img src=dark
    phillyBig.setAttribute("src", "./assets/images/philly-dark.png");
    tampaBig.setAttribute("src", "./assets/images/tampa-dark.png");
    miamiBig.setAttribute("src", "./assets/images/miami-dark2.png");
    pittBig.setAttribute("src", "./assets/images/pitt-dark.png");
    atlantaBig.setAttribute("src", "./assets/images/atlanta-dark.png");
    phillySmol.setAttribute("src", "./assets/images/philly-dark.png");
    tampaSmol.setAttribute("src", "./assets/images/tampa-dark.png");
    miamiSmol.setAttribute("src", "./assets/images/miami-dark2.png");
    pittSmol.setAttribute("src", "./assets/images/pitt-dark.png");
    atlantaSmol.setAttribute("src", "./assets/images/atlanta-dark.png");
};


dayButtons.forEach(function(dayButton) {
    dayButton.addEventListener("click", sunrise)
});
nightButtons.forEach(function(nightButton) {
    nightButton.addEventListener("click", sunset)
});