//Hàm là gì?
//Tham số(trong phần khai báo), đối số(trong phần gọi hàm): cho phép tùy chỉnh hành vi của hàm, tham số hóa các giá trị bên trong hàm.
//Khai báo hàm:

/*
1. Khai báo biến
2. Khai báo hàm-sử dung arrow function
3. Khai báo sự kiện
*/

//Arrow function
//Colosure: cho phép mã bên ngoài truy cập được giá trị trong hàm.
//Hàm return và không return. Hàm nào cũng có kết quả trả về. Mặc định là undefind. Khi gặp return, hàm sẽ dừng ngay lập tức.

/*
Object
1. Object là gì?
2. Khởi tạo object
Literal object:

let keyword objectName = {
key1: value1,
key2: value2,
key3: {}
method() {}
*/

//Đối tượng rỗng:
let empty = {};

/*
let laptop = {
  os: console.log("window"),
  brand: "hp",
  weight: 2,
  screenSize: 13,
  cpu: {
    cpuGent: "xxxx",
    core: 4,
    speed: 2,
  },
};

/*
Truy cập thông tin
1. Dot notation - Cú pháp dấu chấm
    tendoituong.tenthuoctinh
    VD: laptop.os;
        laptop.cpu.speed;
*/

//laptop;

/*
Các thao tác với đối tượng
Thêm:
*/
empty.age = 30;
empty.name = "rong";

//Sửa:
empty.age = 33;

//Xóa:
//delete empty.name;

// Duyệt qua các thuộc tính của object.
for (let key in empty) {
  value = empty[key];
  console.log(key, value);
}
// Kiểm tra xem đối tượng có thông tin không
console.log("a" in empty);

let coordinates = {
  a: {
    x: 1,
    y: 2,
  },
  b: {
    x: 5,
    y: 8,
  },
};

function cal() {
  const A = coordinates.a;
  const B = coordinates.b;
  let khoangCach = Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2));
  return khoangCach;
}

console.log(cal());

// this là 1 toán tử đặc biệt, trỏ đến đối tượng đang thực hiện hành vi. Giúp truy cập chính xác đến đối tượng
// Cách xác định this: this là đối tượng trước dấu chấm.
// phương thúc toString() dùng để chuyển object về kiểu dữ liệu chuỗi
// phuong thúc valueOf() dùng để chuyển object về kiểu dữ liệu giá trị
// Pure function(hàm thuàn khiết): luôn trả về cùng 1 giá trị với đầu vào, không gây ra bất kỳ tác dụng phụ(thay đổi giá trị ở bên ngoài)

//Hàm khởi tạo.
function Cat(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}

const cat1 = new Cat("meo", "muop", 1);
const cat2 = new Cat("meomeo", "persian", 2);


//BTVN: Tìm hiểu về Array.

let dog={
     name: "",
age:  12,
bread: ,
 gender:
 color: 
 legs: 
  favoriteFood: 
}
