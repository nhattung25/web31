// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const applause = document.querySelector("#applause");
// const boo = document.querySelector("#boo");
// const current = null;
// btn1.addEventListener("click", function () {
//   if (current) {
//     current.pause();
//   }
//   if (applause.paused) {
//     applause.play();
//   } else {
//     applause.pause();
//   }
//   current = btn1;
// });

// btn2.addEventListener("click", function () {
//   if (current) {
//     current.pause();
//   }
//   if (boo.paused) {
//     boo.play();
//   } else {
//     boo.pause();
//   }
//   current = btn1;
// });

const buttons = document.querySelectorAll(".btn");
const current = null;
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const audio = document.querySelector(btn.dataset.target);
    if (current && current != audio) {
      current.pause();
      current.currentTime = 0;
    }
    if (audio.paused) {
      audio.play();
    } else audio.pause();
    current = audio;
  });
});
