const input = document.getElementById("validation-input");
console.log(input);
const numberAttributeSymbols = input.dataset.length;
console.log(numberAttributeSymbols);
input.addEventListener("blur", onValidationInput);

function onValidationInput(evn) {
  console.log(input.value.length);
  if (evn.currentTarget.value.length === Number(numberAttributeSymbols)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    // this.classList.remove("valid");замість інпут може бути this
    input.classList.add("invalid");
  }
}
