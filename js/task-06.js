function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const input = document.querySelector("input");

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  boxesEl.removeEventListener("click", destroyBoxes());
  const amount = Number(input.value);

  const boxes = [];
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }
  }
  boxesEl.append(...boxes);
  input.value = "";
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

boxes.style.display = "flex";
boxes.style.gap = "16px";
boxes.style.marginTop = "32px";
boxes.style.flexWrap = "wrap";
createBtnEl.style.backgroundColor = "#4E75FF";
createBtnEl.style.width = "120px";
createBtnEl.style.height = "40px";
createBtnEl.style.borderRadius = "8px";
createBtnEl.style.padding = "8px, 16px, 8px, 16px";
createBtnEl.style.gap = "10px";
createBtnEl.style.border = "none";
destroyBtnEl.style.backgroundColor = "#FF4E4E";

destroyBtnEl.style.width = "120px";
destroyBtnEl.style.height = "40px";
destroyBtnEl.style.borderRadius = "8px";
destroyBtnEl.style.padding = "8px, 16px, 8px, 16px";
destroyBtnEl.style.gap = "10px";
destroyBtnEl.style.border = "none";

input.style.width = "150px";
input.style.height = "40px";
input.style.borderRadius = "8px";
input.style.padding = "8px, 72px, 8px, 72px";
input.style.gap = "10px";
input.style.border = "1px solid #808080";
