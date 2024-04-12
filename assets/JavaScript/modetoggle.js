// set variables here
const htmlEl = document.getElementById("stanley");
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

const phiDayBtn = document.getElementById("philly-AM");
const phinightBtn = document.getElementById("philly-PM");
const tamDayBtn = document.getElementById("tampa-AM");
const tamnightBtn = document.getElementById("tampa-PM");
const miaDayBtn = document.getElementById("miami-AM");
const mianightBtn = document.getElementById("miami-PM");
const pitDayBtn = document.getElementById("pitt-AM");
const pitnightBtn = document.getElementById("pitt-PM");
const atlDayBtn = document.getElementById("atlanta-AM");
const atlnightBtn = document.getElementById("atlanta-PM");

// const dayButtons = [phiDayBtn, tamDayBtn, miaDayBtn, pitDayBtn, atlDayBtn]
// const nightButtons = [phinightBtn, tamnightBtn, mianightBtn, pitnightBtn, atlnightBtn]

function sunrise() {
    // e.preventDefault();
    //set light mode
    htmlEl.removeAttribute("data-bs-theme");
     //set img src=light
    phillyBig.setAttribute("src", "./assets/images/philly-light.png");
    tampaBig.setAttribute("src", "./assets/images/tampa-light.png");
    miamiBig.setAttribute("src", "./assets/images/miami-light1.png");
    pittBig.setAttribute("src", "./assets/images/pitt-light.png");
    atlantaBig.setAttribute("src", "./assets/images/atlanta-light.png");
    phillySmol.setAttribute("src", "./assets/images/philly-light.png");
    tampaSmol.setAttribute("src", "./assets/images/tampa-light.png");
    miamiSmol.setAttribute("src", "./assets/images/miami-light1.png");
    pittSmol.setAttribute("src", "./assets/images/pitt-light.png");
    atlantaSmol.setAttribute("src", "./assets/images/atlanta-light.png");
};

function sunset() {
    // event.preventDefault();
    //set dark mode
    htmlEl.setAttribute("data-bs-theme", "dark");
    //set img src=dark
    phillyBig.setAttribute("src", "./assets/images/philly-dark.png");
    tampaBig.setAttribute("src", "./assets/images/tampa-dark.png");
    miamiBig.setAttribute("src", "./assets/images/miami-dark1.png");
    pittBig.setAttribute("src", "./assets/images/pitt-dark.png");
    atlantaBig.setAttribute("src", "./assets/images/atlanta-dark.png");
    phillySmol.setAttribute("src", "./assets/images/philly-dark.png");
    tampaSmol.setAttribute("src", "./assets/images/tampa-dark.png");
    miamiSmol.setAttribute("src", "./assets/images/miami-dark1.png");
    pittSmol.setAttribute("src", "./assets/images/pitt-dark.png");
    atlantaSmol.setAttribute("src", "./assets/images/atlanta-dark.png");

};

//early attempt at refactoring code... commented out for later reconsideration:
// for (let i = 0; i < dayButtons.length; i++) {
//     const dayBtn = dayButtons[i];
//     dayBtn.addEventListener("click", sunrise())
// };

// for (let i = 0; i < nightButtons.length; i++) {
//     const nightBtn = nightButtons[i];
//     nightBtn.addEventListener("click", sunset())
// };

phiDayBtn.addEventListener("click", sunrise);
tamDayBtn.addEventListener("click", sunrise);
miaDayBtn.addEventListener("click", sunrise);
pitDayBtn.addEventListener("click", sunrise);
atlDayBtn.addEventListener("click", sunrise);

phinightBtn.addEventListener("click", sunset);
tamnightBtn.addEventListener("click", sunset);
mianightBtn.addEventListener("click", sunset);
pitnightBtn.addEventListener("click", sunset);
atlnightBtn.addEventListener("click", sunset);