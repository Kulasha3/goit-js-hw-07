const userInput = document.querySelector('#controls input[type="number"]');
const container = document.querySelector("div#boxes");

function createBoxes(amount) {
  let x = 30;
  let boxMarkup = "";
  for (let i = 0; i < amount; i++) {
    boxMarkup += `<div style="background-color: ${getRandomHexColor()}; width: ${
      x + i * 10
    }px; height: ${x + i * 10}px;"></div>`;
  }
  container.insertAdjacentHTML("beforeend", boxMarkup);
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", onCreateClick);
function onCreateClick() {
  const amount = Number(userInput.value);
  
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  
  container.innerHTML = "";
  createBoxes(amount);
  userInput.value = "";
}

userInput.addEventListener("click", onInput);
function onInput() {
  userInput.removeAttribute("placeholder");
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  container.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
