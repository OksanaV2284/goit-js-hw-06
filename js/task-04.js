const subBtn = document.querySelector('button[data-action="decrement"]');
const addBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

const incrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const decrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

// //---2---

// function incrementClick() {
//   counterValue -= 1;
//   document.getElementById("value").innerHTML = counterValue;
// }
// function decrementClick() {
//   counterValue += 1;
//   document.getElementById("value").innerHTML = counterValue;
// }

addBtn.addEventListener("click", decrementClick);
subBtn.addEventListener("click", incrementClick);
