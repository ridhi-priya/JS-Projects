// let p1 = document.getElementById("p1");
// let item1 = document.getElementById("item1");
// p1.style.display = "none";
// const span = document.getElementsByTagName("span")[0];

// item1.addEventListener("click", () => {
//   p1.style.display = p1.style.display === "none" ? "block" : "none";
//   span.textContent = p1.style.display === "none" ? "▶" : "▼";
// });

function accordion_main(toggleId, toggleText) {
  let togglepara = document.getElementById(toggleId);
  let toggleItem = document.getElementById(toggleText);
  togglepara.style.display = "none";
  const span = toggleItem.querySelector("span");

  toggleItem.addEventListener("click", () => {
    togglepara.style.display =
      togglepara.style.display === "none" ? "block" : "none";
    span.textContent = togglepara.style.display === "none" ? "▶" : "▼";
  });
}

accordion_main("p1", "item1");
accordion_main("p2", "item2");
accordion_main("p3", "item3");
