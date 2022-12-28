// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
let boxes = document.querySelector(".boxes");

for (let i = 0; i < 5; i++) {
  let box = document.createElement("div");
  box.className = "box";
  boxes.appendChild(box);
  box.style.backgroundColor = colors[i];
}
// Cập nhật số lượng total box trong thẻ <span> có class “points”

let count = document.querySelector("#score .points");
let allBox = document.querySelectorAll(".box");
count.innerText = allBox.length;

// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
let box = document.querySelector(".box");
console.log(box);
boxes.addEventListener("click", function () {
  boxes.removeChild(box);
  count.innerText = allBox.length - 1;
});

// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5
