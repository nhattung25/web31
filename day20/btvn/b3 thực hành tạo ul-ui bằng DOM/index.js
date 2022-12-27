// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
/** Tạo thẻ thủ cong bằng tay

let li8 = document.createElement("li"); // tạo element li
li8.innerText = "Item 8"; // chèn nội dung của thẻ li
list.appendChild(li8); // chèn thẻ li vào cuối thẻ ul(thẻ cha)

let li9 = document.createElement("li"); // tạo element li
li9.innerText = "Item 9"; // chèn nội dung của thẻ li
list.appendChild(li9);*/

// Dùng vòng lặp for để tạo thẻ li
const list = document.querySelector("#list"); // truy cập đến thẻ có id là list
for (let i = 8; i <= 10; i++) {
  let li = document.createElement("li");
  li.innerText = `Item ${i}`;
  list.appendChild(li);
}

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
document.querySelector("#list li:nth-child(1)").style.color = "red";

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
document.querySelector("#list li:nth-child(3)").style.backgroundColor = "green";

// Remove thẻ <li> 4
let li4 = document.querySelector("#list li:nth-child(4)");
list.removeChild(li4);

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let liNew = document.createElement("li");
liNew.innerText = "New Item";
const li5 = document.querySelector("#list li:nth-child(4)");
list.insertBefore(liNew, li5);

// Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách

let addText = document.createElement("input"); //Tạo ô nhập liệu
addText.placeholder = "Enter item here";
document.body.appendChild(addText);

let addBtn = document.createElement("button"); //Tạo nút add
addBtn.innerText = "Add";
document.body.appendChild(addBtn);

addBtn.addEventListener("click", function () {
  let input = addText.value;
  let liInput = document.createElement("li");
  if (input == "") {
    alert("Please input the item's name");
    return;
  } else liInput.innerText = input;
  list.appendChild(liInput);
  addText.value = ""; //Set nội dung của ô nhập liệu bằng rỗng để tự xóa sau khi add li
});

// Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách

let removeBtn = document.createElement("button");
removeBtn.innerText = "Remove last Item";
document.body.appendChild(removeBtn);
removeBtn.addEventListener("click", function () {
  let lastLi = document.querySelector("#list li:last-Child");
  console.log(lastLi);
  if (lastLi) {
    list.removeChild(lastLi); // Xóa lastLi
  }
  return;
});
// Thêm 1 nút “Hide” trên đầu của danh sách <ul>.
let hideBtn = document.createElement("button");
hideBtn.innerText = "Hide";
document.body.insertBefore(hideBtn, list);
hideBtn.addEventListener("click", function () {
  list.classList.toggle("hide");
  if (list.classList.contains("hide")) {
    hideBtn.innerText = "Show";
  } else hideBtn.innerText = "Hide";
});

// Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”

// Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”
