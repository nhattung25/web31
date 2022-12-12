// phương thức với mảng

// callback: truyền 1 hàm (giá trị hàm) vào 1 hàm khác dưới dạng đối số.VD:
// Khai báo hàm bên ngoài rồi truyền vào hàm khác
// function demo() {
//   console.log("demo");
// }
// demo; // giá trị hàm
// demo(); //cuộc gọi hàm
// console.log(demo);

// // Khai báo trực tiếp
// function doSomething(callback) {
//   const data = 10;
//   callback(data);
// }
// doSomething(demo);

// let x = 123;
// let other = function () {};
// doSomething(123);
// doSomething(data);
// doSomething(demo);

// find: tìm ra giá trị đầu tiên khóp với điều kiện
let arr = [3, 5, 10, 15, 12, 11];
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  //console.log(n);
  return true;
}

let firstPrime = arr.find(isPrime);
// filter: tìm tất cả giá trị khớp với điều kiện
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);

// dùng filter
let result = arr.filter(isPrime);
console.log(result);

// finderIndex: Tìm chỉ mục của phần tử trong mảng
let index = arr.findIndex(isPrime);
console.log(index);

// map: Biến đổi các phần tử trong mảng thành các giá trị khác
function double(n) {
  return n * n;
}
let arrdouble = [];
for (let i = 0; i < arr.length; i++) {
  arrdouble.push(double(arr[i]));
}

arrdouble = arr.map(double);
console.log(arrdouble);

// reduce
let sum = 0;
function tinhTong(a, b) {
  // Trong đó a là giá trị tích lũy, b là phần tử trong mảng
  return a + b;
}
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
sum = arr.reduce(tinhTong, 0); // Nên để 0
console.log(sum);

//forEach: với mỗi phần tử trong mảng, thực hiện 1 tác vụ. VD:
// function pow(n) {
//   console.log(n ** 2);
// }

// let arr2 = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   pow(arr[i]);
// }

//arr.forEach(pow);

// arr.forEach(console.log);

//sort: sắp xếp các phần tử trong mảng. Mặc định sắp xếp theo dạng chuỗi. Dữ liệu sẽ được chuyển sang dạnh chuỗi và sắp xếp

function compare(a, b) {
  // Trả về 1 nếu a lớn hơn b, trả về -1 nếu a < b
  if (a > b) return 1;
  else return -1;
}

console.log(arr.sort(compare)); // Trong sort là hàm logic sắp xếp

// các phương thức với số
let x = 1.121212;
console.log(x.toString(8));
const MAX = 100;
const MIN = 10;
let a = Math.floor(Math.random() * MAX - MIN) + MIN; // Tạo 1 số ngẫu nhiên trong khoảng
console.log(a);

// Chuỗi: có tính chất giống với mảng nhưng không thể thay đổi giá trị của phần tử, không có các phương thức giống với mảng. Có thể truy xuất thông qua chỉ mục của phần tử. Các phương thức dưới đây sẽ tạo ra 1 chuổi mới mà không thay đổi giá trị của chuỗi cũ

let myName = "tung";
console.log(myName[0]);
console.log(myName.length);
console.log(myName.includes("a"));
console.log(myName.toUpperCase());

//Hàm tạo thời gian
let now = new Date();
console.log(now);

let birthDay = new Date("2022-04-01");
console.log(birthDay);

//Thao tác với hàm tạo thời gian
//print
birthDay.toDateString();
birthDay.toLocaleTimeString();

//get
birthDay.getDate();
birthDay.getFullYear();
birthDay.getMonth();

//set: khi giá trị set vượt quá giới hạn sẽ tự động (cộng trừ) bù vào phần dư.
birthDay.setMonth();
