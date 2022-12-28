// Một tính năng mới vào gói Pro: ‘24/7 Phone support’

let ul = document.querySelector("#pro-plan ul");
let newOtp = document.createElement("li");
newOtp.innerText = "24/7 Phone support";
ul.appendChild(newOtp);

// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

let card = document.querySelectorAll(".col-md-4");
let row = document.querySelector(".row");
row.innerHTML = "";
row.appendChild(card[1]);
row.appendChild(card[0]);

// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’

let proBtn = document.querySelector("#pro-plan button");
proBtn.style.backgroundColor = "#0984e3";
proBtn.style.color = "#fff";
proBtn.innerText = "Buy now";

// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%

let proStorage = document.querySelector("#pro-plan .storage-amount");
proStorage.innerText = proStorage.innerText * 1.5;

let basicStorage = document.querySelector("#basic-plan .storage-amount");
basicStorage.innerText = basicStorage.innerText * 1.25;
