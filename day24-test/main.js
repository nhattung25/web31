async function getBreedList() {
  let res = await axios.get("https://dog.ceo/api/breeds/list/all");
  let img = await axios.get("https://dog.ceo/api/breed/hound/afghan/images");
  renderSub(res.data.message, img.data.message);
  renderBreed(res.data.message);
}

let list = document.querySelector("#list");
let btn = document.querySelector("#btn");
let lin = document.getElementsByClassName("item");
let anh = document.querySelector(".img");

//Function render breed
function renderBreed(breeds) {
  let arr = Object.keys(breeds);
  for (let i = 0; i < arr.length; i++) {
    list.innerHTML += `<option value="${arr[i]}">${arr[i]}</option>`;
  }
}

//Tạo event cho button
const subList = document.querySelector("#sub-list");
function renderSub(breeds, img) {
  btn.addEventListener("click", function () {
    anh.innerHTML = "";
    let value = list.value;
    if (breeds[value].length > 0) {
      subList.innerHTML = "";
      for (let i = 0; i < breeds[value].length; i++) {
        let a = breeds[value];
        subList.innerHTML += `<li class="item">${a[i]}</li>`;
      }
    } else {
      subList.innerHTML = `<li>Không có sub breed</li>`;
    }
    // In random ảnh ra màn hình
    Array.from(lin).forEach((item) => {
      item.addEventListener("click", function () {
        anh.innerHTML = `<img class="anh" src="${img[randomImg()]}" alt="">`;
      });
    });
  });
}

function randomImg() {
  return Math.floor(Math.random() * 50);
}

getBreedList();
