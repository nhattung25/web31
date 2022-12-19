const audio = new Audio("./mp3.mp3");
function handleClick() {
  if (audio.paused) audio.play();
  else audio.pause();
}
const button = document.querySelector("button");
//button.onclick = handleClick;

button.addEventListener("click", handleClick); //Dùng addEventListener Hay dùng
