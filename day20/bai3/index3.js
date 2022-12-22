const showNav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  let y = document.documentElement.scrollTop;
  if (y > 50) {
    showNav.classList.add("active");
  } else showNav.classList.remove("active");
});
