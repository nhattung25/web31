async function getBreedList() {
  let res = await axios.get("https://dog.ceo/api/breeds/list/all");

  renderBreed(res.data.message);
  renderSub(res.data.message);
}
async function getImage() {
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
let anh = document.querySelector(".anh");

function randomImg() {
  return Math.floor(Math.random() * 50);
}
function showImg(img) {
  Array.from(li).forEach((item) => {
    item.addEventListener("click", function () {
      console.log(img[1]);
      anh.innerHTML = `<img class="anh" src="${img[randomImg()]}" alt="">`;
    });
  });
}
getBreedList();
getImage();
