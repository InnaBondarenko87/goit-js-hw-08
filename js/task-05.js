function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
btnEl.addEventListener("click", function () {
  const RandomColor = getRandomHexColor();
  document.body.style.backgroundColor = RandomColor;
  spanEl.textContent = RandomColor;
});

btnEl.style.backgroundColor = "#4E75FF";
btnEl.style.borderRadius = "8px";
btnEl.style.width = "148px";
btnEl.style.height = "40px";
btnEl.style.padding = "8px, 16px, 8px, 16px";
btnEl.style.gap = "10px";
