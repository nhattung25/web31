//xóa
//Duyệt mảng: dùng for(i) hoặc for value of arr
// Các phương thức với mảng: toString(), join, pop, push, shift, unshift, concat, slice, splice, .
//arr.join("-")  - chuyển mảng thành chuỗi và thêm ký tự vào giữa các phần tử.

// let arr = [3, "tt", 1, 4, 5];
// //console.log(arr[1]);
// //console.log(arr.length);
// //arr.splice(2, 1, "tung");
// arr.toString();
// arr.join(" ");
// console.log(arr);

//Duyệt qua chỉ mục
//for (let i = 0; i < arr.length; i++) {
//  console.log(arr[i]);
//}

//Duyệt qua giá trị
///for (let value of arr) {
// console.log(value);
//}

// arr.slice(); //Copy toàn bộ mảng
// arr.slice(1, 3); //Copy phần tử sau vị trí 1 đến 3
// arr.indexOf(); //Tìm vị trí của phần tử trong mảng (vị trí đầu tiên tìm thấy), nếu phần tử không có trong mảng thì index của phần tử sẽ trả về -1
// arr.lastIndexOf(); //Tìm vị trí của phần tử trong mảng(vị trí cuối cùng tìm thấy)
// arr.concat([1, 2], [2, 3]); //Tạo 1 mảng mới bằng cách nối 2 mảng với nhau
// arr.reverse(); // Đảo ngược vị trí của các phân tử trong mảng
// arr.includes(); // Xác định xem phần tử có thuộc mảng hay không. Giá trị trả về là true hoặc false
//sort, find, filter, forEach;

//BAI TAP

let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

// In arr ra console
console.log(arr);
// In ra độ dài (số lượng phần tử) của arr
console.log(arr.length);

// In ra phần tử thứ 3 trong mảng
console.log(arr[2]);

// In ra phần tử đầu tiên trong mảng
console.log(arr[0]);

// In ra phần tử cuối cùng của mảng
console.log(arr[arr.length - 1]);

// In ra phần tử có index = -1, chú ý kết quả
console.log(arr[-1]);

// Sử dụng vòng lặp in ra từng giá trị trong arr
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng của giá trị đó trong arr

// Ví dụ:
// Index: 0, Value: 10
// Index: 1, Value: 20
// ...

// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều ngược lại (từ cuối mảng)
for (let i = arr.length; i >= 0; i--) {
  console.log(arr[i]);
}
// Thêm "Ba"  cuối mảng sử dụng phương thức push()
arr0 = arr.push("Ba");
console.log(arr0);

// Thêm "Thảo" vào cuối mảng mà KHÔNG SỬ DỤNG phương thức push()
// arr[length - 1] = "Thao";
// console.log(arr);

// Thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()
arr1 = arr.unshift("Beos");
console.log(arr1);

// Xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop() và in ra giá trị đó
arr2 = arr.pop();
console.log(arr2);

// Xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift() va in ra giá trị đó
arr3 = arr.shift();
console.log(arr3);

// Sao chép 2 phần tử đầu tiên sử dụng phương thức slice() và in ra kết quả
arr4 = arr.slice(0, 2);
console.log(arr4);

// Sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()
arr5 = arr.slice();
console.log(arr5);

// Sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()
arr6 = arr.slice(2, 5);
console.log(arr6);

// Xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng sử dụng phương thức splice()
arr7 = arr.splice(2, 2);
console.log(arr7);

// Thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3 sử dụng phương thức splice()

// Tìm và in ra chỉ mục của "Ba" ra console sử dụng phương thức indexOf()

console.log(arr.indexOf("Ba"));

// Tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả
console.log(arr.indexOf("Thảo"));
// Kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức includes() và in ra kết quả
console.log(arr.includes("Mai Anh"));
// Sử dụng alert() in arr, chú ý kết quả
//alert(arr);
// Nối các tên trong mảng thành một chuỗi sử dụng phương thức join() và in ra console

arr.join("a");

console.log(arr);

// Đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse() và in ra kết quả
console.log(arr.reverse());

// Đổi chỗ 2 phần tử đầu và cuối mảng
console.log(arr[length - 1]);
// Xóa toàn bộ phần tử trong mảng
arr.length = 0;

/**
 * Tính tổng các số trong một mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Tổng các số trong mảng
 */
function sum() {
  let arra = [1, 2, 3, 4, 5, 6, 1];
  let sum = 0;
  for (let i = 0; i < arra.length; i++) {
    sum += arra[i];
  }
  console.log(sum);
}
sum();

/**
 * Tính trung bình cộng các số trong mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Trung bình cộng các số trong mảng
 */
function avg() {
  let arra2 = [1, 2, 3, 4, 5, 6, 1];
  let sum = 0;
  let avg2 = 0;
  for (let j = 0; j < arra2.length; j++) {
    sum += arra2[j];
  }
  console.log(sum);
  avg2 = sum / arra2.length;
  console.log(avg2);
}
avg();
