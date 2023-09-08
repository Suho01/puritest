// const $imgChange = document.querySelector("#imgChange");
// const $up = document.querySelector(".real-upload");
// $imgChange.addEventListener("click", () => $up.click());

const $darkmode = document.querySelector(".darkmode");
const $navBg = document.querySelector(".nav");
const $fontColor = document.querySelectorAll(".navbar li");

$darkmode.addEventListener("click", function() {
    $fontColor.forEach((e, i) => {
        e.classList.toggle("on");
    });
    $navBg.classList.toggle("on");
});