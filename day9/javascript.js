// alert("Xin chào");
// console.log("xinchaoâ");

// Toán tử: 3 dạng toán tử đơn unary, toán tử đôi binary, toán tử 3 ngôi ternary.
// Binary Số học: * /% **
// Binary So sánh: ==, ===, (phân biệt == và ===)
// Binary gán
// Binary logic
// Toán tử 3 ngôi: sử dụng để gán giá trị theo 1 đk cụ thể. Nếu đúng nhận v1, sai nhận v2. Dùng thay thế cho if else
// let x = condition ? v1 : v2;

// Chuyển đổi kiểu dữ liệu: Java script sẽ tự động chuyển đổi kiểu dữ liệu. Tuy nhiên điều đó có thể không phù hợp với yêu cầu của bài toán. Do vậy ta cần chuyển kiểu dữ liệu thủ công.
Number(); // lưu ý các TH đặc biệt
String();
Boolean(); // 5 giá trị trả về false

//Biến là tên của 1 giá trị.
// Cú pháp khai báo: var, let, const. thường dùng let và const.
// Quy tắc đặt tên biến: ko được trùng với tên có sẵn trong JS,
// không được chứa ký tự đặc biệt (chỉ chấp nhận $ và _ ),
// không bắt đầu bằng 1 số. Đặt tên theo quy tắc camelCase.. VD: myName, fullName..
// đặt tên có ý nghĩa
// các biến chứa giá trị logic nên bắt đầu bằng is, has

// Khai báo function: function functionNam(parameters) {}. Trong đó:
// từ khóa khai báo funtion
// functionName: tên hàm
// (parameter): các tham số truyền vào
// {}thân hàm chứa các câu lệnh.
// Gọi hàm: functionName()

// function greeting(name, age) {
//   console.log("Hello" + name);
// }

// greeting("hhhhh", 20);
// greeting("aaa");
// greeting("aaaa");

// function add(a, b) {
//   let total = a + b;

//   console.log(`${a}+${b}=${total}`);
// }
// add(5, 4);

function sub(a, b) {
  let result = a - b;
  console.log(`${a}-${b}=${result}`);
}

sub(5, 4);

// function sub(a, b) {}

// function mul(a, b) {}

// function div(a, b) {}

// const currentYear = 2022;

// function calcAge(yearOfBirth) {}

for (let i = 0; i < 10; ++i) {
  console.log("Xin chào");
}

try {
  // Khối lệnh có thể xảy ra lỗi
} catch (ex) {
  // Khối lệnh thực thi nếu có lỗi
} finally {
  // Khối lệnh này sẽ được thực thi
  // cho dù có lỗi hay không lỗi
}