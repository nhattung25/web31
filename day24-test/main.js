async function getBreedList() {
  let res = await axios.get("https://dog.ceo/api/breeds/list/all");
  renderSub(res.data.message);
  renderBreed(res.data.message);
  let img = await axios.get("https://dog.ceo/api/breed/hound/afghan/images");
  showImg(img.data.message);
}


let list = document.querySelector("#list");
let btn = document.querySelector("#btn");

//Function render breed
function renderBreed(breeds) {
  let arr = Object.keys(breeds);
  for (let i = 0; i < arr.length; i++) {
    list.innerHTML += `<option value="${arr[i]}">${arr[i]}</option>`;
  }
}

//Tạo event cho button
const subList = document.querySelector("#sub-list");
function renderSub(breeds) {
  btn.addEventListener("click", function () {
    let value = list.value;
    if (breeds[value].length > 0) {
      subList.innerHTML = "";
      for (let i = 0; i < breeds[value].length; i++) {
        let a = breeds[value];
        subList.innerHTML += ` <li class="item">${a[i]}</li>`;
      }
    } else {
      subList.innerHTML = `<li>Không có sub breed</li>`;
    }
  });
}

let li = document.getElementsByClassName("item");
let anh = document.querySelector(".img");

function randomImg() {
  return Math.floor(Math.random() * 50);
}
function showImg(img) {
  Array.from(li).forEach((item) => {
    item.addEventListener("click", function () {
      anh.innerHTML = `<img class="anh" src="${img[randomImg()]}" alt="">`;
    });
  });
  anh.innerHTML = "";
}
getBreedList();

