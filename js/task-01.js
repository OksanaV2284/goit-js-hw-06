const NumberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", NumberOfCategories.length);

NumberOfCategories.forEach((el) => {
  const categoriesTitle = el.querySelector("h2").innerHTML;
  console.log("Category:", categoriesTitle);
  const itemsLength = el.querySelectorAll("li").length;
  console.log(" Elements:", itemsLength);
});
