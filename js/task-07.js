const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
input.addEventListener("input", sliderReacts);
function sliderReacts(evn) {
  span.style.fontSize = evn.currentTarget.value + "px";
}
