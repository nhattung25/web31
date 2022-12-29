// Thêm label cho các trường username, password, confirm password (sử dụng thẻ label để thêm các tiêu đề tương ứng cho các ô input)
let userLabel = document.createElement("label");
userLabel.innerText = "Username";
let regis = document.querySelectorAll(".form-input");
regis[0].prepend(userLabel);

let passwordLable = document.createElement("label");
passwordLable.innerText = "Password";
regis[1].prepend(passwordLable);

let confirmLable = document.createElement("label");
confirmLable.innerText = "Confirm passwword";
regis[2].prepend(confirmLable);

// Kiểm tra xem password và confirm pass có trùng nhau hay không
let passInput = document.querySelector("#password");
let passConfirm = document.querySelector("#confirmPassword");
let userInput = document.querySelector("#username");
let flag = false;
passInput.addEventListener("keyup", function () {
  let passValue = this.value;
  passConfirm.addEventListener("keyup", function () {
    let passConfirmValue = this.value;
    if (passValue == passConfirmValue) {
      flag = true;
    }
  });
});

// Đảm bảo nút ‘Đăng ký’ bị disable cho đến khi người dùng nhập dữ liệu hợp lệ vào tất cả các trường đầu vào.
let submitBtn = document.querySelector("#btn");
submitBtn.setAttribute("disabled", true);

// Sau khi nhập đầy đủ thì ‘Đăng ký’ được enable.
userInput.addEventListener("keyup", function () {
  let userInputTex = this.value;
  if (userInputTex != "" && flag) submitBtn.removeAttribute("disabled");
});

// Khi user nhập đủ thông tin hợp lệ và bấm vào nút submit thì tạo 1 hộp thoại thông báo đăng ký thành công
submitBtn.addEventListener("click", function () {
  alert("Đăng ký thành công");
});
