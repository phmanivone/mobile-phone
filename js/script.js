const home = document.querySelector(".home")
const screen = document.querySelector(".screen")

home.addEventListener("click", () => {
    screen.classList.toggle("active")
})