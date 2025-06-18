const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", onNameInput);

function onNameInput() {
  const trimInput = nameInput.value.trim();
  nameOutput.textContent = trimInput || "Anonymous";
}
