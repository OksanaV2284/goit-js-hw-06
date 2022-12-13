const button = document.querySelector(".change-color");

const colorSpan = document.querySelector(".color");

button.addEventListener("click", handButtonClick);

function handButtonClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = document.body.style.backgroundColor;

  console.log(document.body.style.backgroundColor);
  console.log(colorSpan.textContent);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
