const buttons = document.querySelectorAll('.color_botton');
const container = document.querySelector('.container');

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log("teena thapa")
        container.style.background = btn.id
    });
});
