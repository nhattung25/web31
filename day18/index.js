// const h1 = document.querySelector(".heading");

// // Đọc
// console.log(h1);
// console.log(h1.textContent); // văn bản bên trong
// console.log(h1.innerHTML); // cấu trúc bên trong HTML
// console.log(h1.id); // giá trị của id
// console.log(h1.title);
// // Chỉnh sửa
// h1.textContent = "aaaa";
// h1.innerHTML = " <span>aaaaf</span>";

// console.log(h1.dataset.abc);
// h1.dataset.abc = "bbb";
// console.log(h1.dataset.abc);
// h1.classList.add("aaa", "bbb");
// h1.classList.remove("aaa", "bbb");
// h1.classList.toggle("heading");    // nếu đã có class thì toggle sẽ xóa heading đi
// h1.classList.toggle("heading");

// //Tạo node
// const div = document.querySelector("div#app");
// //const p = document.createElement("p");
// const img = document.createElement("img");
// const a = document.createElement("a");

// // tạo node bằng hàm function
// const createPara = function (text, classes) {
//   const p = document.createElement("p");
//   p.textContent = text;
//   p.className = classes;
// };

// //p.textContent = "xin chào";
// // p.id = "para";
// // p.classList.add("aa", "bbb");
// // p.style.color = "blue";
// createPara("Xinchaof", "tittle");

// img.alt = "Không có ảnh";
// img.id = "image";
// img.src =
//   "https://s199.imacdn.com/vg/2022/12/13/9d0a0206186a565b_d482497aa7e9ca87_18856116709401523756547.jpg";

// a.alt = "vuighe";
// a.textContent = "vuighe";
// a.href = "https://vuighe.net/";

// //Chèn node vào div
// // div.append(p, img, a);
// div.append(createPara("Xinchaof", "tittle"));

const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];

const firstCharUpper = function (fruit) {
  return fruit[0].toUpperCase() + fruit.slice(1).toLowerCase();
};

// const toListItem = function (fruit) {
//   return `<li class='fruit-item'>${firstCharUpper(fruit)}</li>`;
// };

// const item = fruitList.map(toListItem).join("");

// const ul = document.createElement("ul");
// ul.className = "fruit-item";

// const createFruitItem = function (fruit) {
//   const li = document.createElement("li");
//   li.className = "fruit-item";
//   li.textContent = firstCharUpper(fruit);
//   return li;
// };

// const creatFruitList = function (fruitList) {
//   const ul = document.createElement("ul");
//   for (let i = 0; i < fruitList.length; i++) {
//     const fruit = fruitList[i];
//     const li = createFruitItem(fruit);
//     ul.append(li);
//   }
//   return ul;
// };

// const div = document.querySelector("div#app");

// div.append(creatFruitList(fruitList));

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  let comon = "";
  for (let i = 0; i < strs.lengt; i++) {
    if (strs[i].includes(prefix)) comon = prefix;
    else prefix = prefix.slice(prefix.length - 1, prefix.length);
  }
  return comon;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
