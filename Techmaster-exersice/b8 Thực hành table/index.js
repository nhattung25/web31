// Thêm class “table-bordered” cho <table>
let table = document.querySelector(".table");
table.classList.add("table-bordered");

// Thêm class “bg-dark” cho <tr> đầu tiên
document.querySelector(".table tr").className = "bg-dark";

// Thêm 1 hàng mới trong table với nội dung như sau : ‘Sean Reyes’ (@sreyes)
let newRow = document.createElement("tr");
let tbody = document.querySelector(".table tbody");
function creatCol() {
  for (let i = 0; i <= 3; i++) {
    let col = document.createElement("td");
    newRow.appendChild(col);
  }
}
creatCol();
tbody.appendChild(newRow);
let lastRow = tbody.querySelectorAll("tr")[6].querySelectorAll("td");
lastRow[0].innerText = "6";
lastRow[1].innerText = "Sean";
lastRow[2].innerText = "Reyes";
lastRow[3].innerText = "@sreyes";

// Cập nhật “Leona Dixon’s handle” thành “@dixonl” (hàng 3 - cột Handle)
tbody.querySelectorAll("tr")[3].querySelectorAll("td")[3].innerText = "@dixonl";

// Di chuyển “Rosa Reed” lên đầu bảng và đảm bảo tất cả các mục nhập số trong cột đầu tiên được cập nhật tương ứng.
let targetRow = tbody.querySelectorAll("tr")[4];
let newRow4 = targetRow.cloneNode(true);
targetRow.remove();
tbody.insertBefore(newRow4, tbody.querySelectorAll("tr")[1]);

let row = tbody.querySelectorAll("tr");
//let td = querySelector("td");
//console.log(td);
Array.from(row).forEach((item) => {
  let firstCell = item.querySelectorAll("td")[0];
  console.log(firstCell);
  Array.from(firstCell).forEach((cell) => {
   cell.innerText="a"
  });
});

// Đổi chỗ 2 cột “First” và “Handle” cho nhau
// Các row có index là số lẻ ( trừ hàng tiêu đề cột )thì có background = “#f2f2f2”
