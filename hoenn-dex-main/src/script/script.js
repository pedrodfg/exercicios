const alterThemeButton = document.querySelector(".sun");

const body = document.querySelector("body");
const SunButton = document.querySelector(".sun")

alterThemeButton.addEventListener("click", () => {
    const DarkModeOn = body.classList.contains("dark-mode");
    body.classList.toggle("dark-mode")

    if (DarkModeOn) {
        SunButton.setAttribute("src", "./src/imagens/338.gif");
    }   else {
        SunButton.setAttribute("src", "./src/imagens/337.gif");

    
    }


})