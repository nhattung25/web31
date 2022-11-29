// If else
// Đánh giá điều kiện và chạy nếu đúng
// Nếu sai không làm gì cả

if (condition) {
  // Câu lệnh
}

if (condition) {
} else {
}

// Kiểm tra từng điều kiện

if (condition) {
} else if (condition2) {
} else if (condition3) {
} else {
}

//Kiểm tra điều kiện phụ thuộc lẫn nhau
if ((condition1 && condition2) || condition3) {
}

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

function sumOfNumbers(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  console.log(total);
}
sumOfNumbers(1);
