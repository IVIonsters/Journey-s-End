let lightMode = "no";
const lightModeToggle = document.querySelector('#mode');

lightModeToggle.addEventListener("click", () => {
    if (lightMode !== "yes"){
        enableLightMode();
        lightMode = "yes";
        console.log(lightMode)
    }else{
        disableLightMode();
        lightMode = "no";
        console.log(lightMode);
    };
});

const enableLightMode = () => {
    document.body.classList.add("lightmode");
}

const disableLightMode = () => {
    document.body.classList.remove("lightmode");
}
