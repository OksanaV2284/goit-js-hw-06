const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.createElement("li");
const title = document.querySelector("#ingredients");
const listIngredients = ingredients
  .map((n) => `<li class=item>${n}</li>`)
  .join("");
title.innerHTML = listIngredients;
// const listIngredients = document
//   .querySelector("#ingredients")
//   .insertAdjacentHTML(
//     "afterbegin",
//     ingredients.map((n) => `<li class=item>${n}</li>`).join("")
//   );
