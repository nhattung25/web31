// Lấy đối tượng trong HTML
const p = document.querySelector("#text");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const cat = document.querySelector("#cat");

//Tạo hàm sự kiên
function changeContent() {
  p.textContent = "aaaaaaa";
}
function changeColor() {
  p.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

btn1.addEventListener("click", changeContent);

btn2.addEventListener("click", changeColor);

function creatCircle() {
  let div = document.createElement("div");
  div.classList.add("circle");
  return div;
}

window.addEventListener("click", function (e) {
  const circle = creatCircle();
  const x = e.x;
  const y = e.y;
  circle.style.top = `${y - 10}px`;
  circle.style.left = `${x - 10}px`;
  document.body.append(circle);
});

window.addEventListener("mousemove", function (e) {
  const x = e.x;
  const y = e.y;
  cat.style.cssText = `
  top:${y - 15}px;
   left:${x - 15}px;
  `;
});
// function creatKey(key) {
//   const button = document.createElement("button");
//   button.classList.add("key");

// }

// window.addEventListener("keypress", function (e) {
//   const key = e.key;
//   const alt = e.altKey;
//   const shift = e.shiftKey;
//   const ctrl = e.ctrlKey;
// });
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
//  console.log(document.documentElement.scrollTop);
  let y = document.documentElement.scrollTop;
  if (y > 200) {
    backToTop.style.display = "block";
  } else backToTop.style.display = "none";
});

window.addEventListener("click",function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})