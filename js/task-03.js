const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (event) => {
  const eventEl = inputEl.value.trim();
  outputEl.textContent = eventEl === "" ? "Anonymous" : eventEl;
});
