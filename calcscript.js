"use strict";
let ans = 1;
let query = "";
console.log(ans);
function num_opPress(val) {
  console.log(`${val} pressed`);
  query += val;
  displayMessage();
}
function calculateQuery() {
  query = eval(query);
  displayMessage();
}
function displayMessage() {
  document.querySelector(".display").innerHTML = query;
}
let buttons = document.querySelectorAll(".num_op");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => num_opPress(buttons[i].value));
}
document.querySelector(".Calculate").addEventListener("click", calculateQuery);
document.querySelector(".AC").addEventListener("click", () => {
  query = "0";
  displayMessage();
});
document.querySelector(".del").addEventListener("click", () => {
  query = query.slice(0, -1);
  displayMessage();
});
