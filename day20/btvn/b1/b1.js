const heading = document.querySelector("#heading");
const para1 = document.querySelector(".para-1");
const para3 = document.querySelector(".para-3");
const title = document.querySelector("#title");
const description = document.querySelector(".description");
const content = document.querySelector(".content");
//Thay đổi màu chữ heading thành màu đỏ
heading.style.color = "red";

//Thay đổi màu chữ, font size của para
para1.style.color = "blue";
para1.style.fontSize = "20px";

//Chèn link facebook vào sau thẻ para3
let facebook = document.createElement("a");
facebook.href =
  "https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_PBgBmYAfL&q=facebook&rlz=1C1CHBF_enVN1016VN1016&oq=fa&aqs=chrome.1.69i60j46i39i199i465j69i57j46i67j0i131i433i512j69i60l2j5.2694j0j7&sourceid=chrome&ie=UTF-8";
facebook.innerText = "Facebook";
document.body.insertBefore(facebook, content);

//Thay đổi nội dung thẻ tiêu đề
title.textContent = "Đây là thẻ tiêu đề";

//Thêm class vào thẻ description
description.classList.add = "text - bold";

// Thay thể para3 thành button
let btn = document.createElement("button");
btn.innerText = "Click Me";
para3.parentNode.replaceChild(btn, para3);

//Copy thẻ para-2
const para2 = document.querySelector(".para-2");
const copyPara2 = para2.cloneNode(true);
para2.insertAdjacentElement("afterend", copyPara2);

//Xóa thẻ para1

para1.parentNode.removeChild(para1);
