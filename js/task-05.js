// Напиши скрипт, який під час набору тексту в інпуті input#name - input
//     (подія input), підставляє його поточне значення в span#name - output.
//     Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
input.addEventListener("input", outpute);

function outpute(evn) {
  const valueEvn = evn.currentTarget.value;

  if (!valueEvn) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = valueEvn;
  }
}
