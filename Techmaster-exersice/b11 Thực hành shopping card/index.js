// Random id ngẫu nhiên trong khoảng 0 -> 100000
function randomId() {
  return Math.floor(Math.random() * 100000);
}

// Danh sách sản phẩm
let products = [
  {
    id: randomId(),
    name: "Áo kiểu nữ cam đất phối cổ trắng dập ly",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 250000,
    image:
      "https://thumbs.dreamstime.com/b/cute-tender-feminine-caucasian-woman-orange-hoodie-show-peace-signs-over-eyes-tilt-head-looking-left-happy-smiling-broadly-174846258.jpg",
    count: 2,
  },
  {
    id: randomId(),
    name: "Áo trắng bèo lé đen tay loe dễ thương",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 350000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ivdq4lILjlQDJ5tUFN_zawLtvnL4pZLs58IfiXX1JoqcYyTqoalI3QwuOT1fHwp-N5o&usqp=CAU",
    count: 1,
  },
];

let item = document.querySelectorAll(".item");
let item_list = document.querySelector(".item-list");
let discount = document.querySelector(".discount");
let itemCount = document.querySelector(".item-count");
let delBtn = document.querySelector(".delBtn");

function renderItem(arr) {
  //Đếm item trong giỏ
  itemCount.innerHTML = `${countItem(arr)} item in the bag`;
  item_list.innerHTML = "";

  //Render item trong data base
  if (arr.length === 0) {
    item_list.innerHTML = "Không có sản phẩm trong giỏ hàng";
    discount.style.display = "none";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    let p = arr[i];
    item_list.innerHTML += `<div class="item">
          <div class="info">
            <div class="thumbnail"><img src="${p.image}" alt="" /></div>
            <div class="item-info">
              <div class="item-name">${p.name}</h2></div>
              <div class="description">${p.description}</div>
              <div class="price">${p.price} VND</div>
            </div>
          </div>
          <div class="quantity">
  <input
    type="number"
    class="quantity"
    step="1"
    value="${p.count}"
  />
</div>
          <div class="del-btn" >
            <button class="delBtn" onClick="delItem(${p.id})">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                />
              </svg>
            </button>
          </div>
        </div>`;
  }
}
window.onload = renderItem(products);

//Function đếm item
function countItem(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    p = arr[i];
    total += p.count;
  }
  return total;
}

//Function xóa item trong giỏ hàng
function delItem(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }
  renderItem(products);
}
