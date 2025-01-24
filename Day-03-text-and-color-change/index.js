let colors = ["red", "black", "blue", "white", "yellow"];
let i = 0;
let bodychange = document.getElementById("change");
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  bodychange.style.backgroundColor = colors[i];
  i = (i + 2) % colors.length;
});

let fruits = ["apple", "orange", "pineapple", "Mango", "pears"];
let j = 0;
let text = document.getElementsByTagName("h1")[0];
text.addEventListener("click", () => {
  text.textContent = fruits[j];
  j = (j + 1) % fruits.length;
});
