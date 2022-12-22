// Mỗi lần tăng giá trị cách nhau 100ms
function setCounter(element, target, duration) {
  let step = duration / 100;
  let incre = Math.floor(target / step);
  let count = 0;
  console.log(step, incre);
  let timer = setInterval(function () {
    element.texContent = Number(element.texContent) + incre;
    count++;
    if (count == step) {
      clearInterval(timer); //Xóa bộ đếm
      element.texContent = target;
    }
  }, 10);
}

const counters = document.querySelectorAll(".counter");
for (let counter of counters) {
  let target = counter.dataset.target;
  let duration = counter.dataset.duration || 3000;
  setCounter(counter, target, duration);
}
