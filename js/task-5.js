const docBody = document.querySelector("body");
const textColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", onButtonClick);

function onButtonClick() {
  const color = getRandomHexColor();
  docBody.style.backgroundColor = color;
  textColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
