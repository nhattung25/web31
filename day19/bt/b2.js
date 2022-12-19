const btnAdd = document.querySelector("#btnAdd");
const btnMinus = document.querySelector("#btnMinus");
const counter = document.querySelector("#counter");

var clicks = 0;

function add() {
  clicks += 1;
  counter.innerHTML = clicks;
  if (counter.innerHTML > 0) {
    counter.style.color = "green";
  }
  if (counter.innerHTML == 0) {
    counter.style.color = "#333333";
  }
}

function minus() {
  clicks -= 1;
  counter.innerHTML = clicks;
  if (counter.innerHTML < 0) {
    counter.style.color = "red";
  }
  if (counter.innerHTML == 0) {
    counter.style.color = "#333333";
  }
}

btnAdd.addEventListener("click", add);
btnMinus.addEventListener("click", minus);
