/**HightLight các từ có số ký tự lớn hơn 8*/
let para = document.querySelector("p");
let content = para.innerText
  .split(" ")
  .map((ele) =>
    ele.length >= 8
      ? `<span style="background-color : yellow">${ele}</span>`
      : ele
  )
  .join(" ");
para.innerHTML = content;

/*Chèn link facebook vào sau thẻ p */
let link = document.createElement("a"); // Tạo element
link.innerText = "Facebook "; // Chèn nội dung text hiển thị của element
link.href = "https://facebook.com"; // Chèn link dẫn của thẻ
link.target = "_blank"; // Thêm target blank để thẻ mở trong tab mới
document.body.appendChild(link); // Dùng appendChild để chèn link vào cuối phần tử cha(body) của element p.

/*Đếm số từ có trong đoạn văn, tạo thẻ div để hiển thị số lượng từ có trong đoạn văn */
let count = para.innerText.split(" ").length;
console.log(count);
const wordEle = document.createElement("div");
wordEle.innerText = `${count} từ`;
document.body.insertBefore(wordEle, para);

/*Thay thế ký hiệu ? => 🤔, ! => 😲 */
para.innerHTML = para.innerHTML.replace(/\?/g, "🤔"); // Dùng phương thức replace kết hợp với biểu thức chính quy và biến global để thay thế toàn bộ ký tự được chọn
para.innerHTML = para.innerHTML.replace(/\!/g, "😲");
