const btn = document.querySelector("#btn");
const pass = document.querySelector("#pass");

btn.addEventListener("click", function () {
  if (pass.type == "password") {
    pass.type = "text";
    btn.textContent = "Hide";
  } else {
    pass.type = "password";
  }
});
