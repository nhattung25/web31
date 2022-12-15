//1. Thay đổi nội dung của thẻ `title` thành giá trị của `heading`
document.title = heading;

let x = document.body.children;
//2. Thay đổi nội dung của thẻ `h1` thành giá trị của `heading`
x[0].innerHTML = heading;

// 3. Thay đổi `src` của thẻ `img` thành giá trị của `avatar`
x[1].setAttribute("src", avatar);

// 4. Thay đổi `href` của thẻ `a` thành giá trị của `profile`
x[2].setAttribute("href", profile);

// 5. Thay đổi nội dung của thẻ `li ` đầu tiên trong thẻ `ul` thành `Code application`
x[3].firstElementChild.textContent = "Code application";

// 6. Thay đổi nội dung của thẻ `li` cuối cùng trong thẻ `ul` thành `Sleep`
x[3].lastElementChild.textContent = "Sleep";

// 7. Thay đổi nội dung của `div` thành thời gian hiện tại theo mẫu `Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm`
x[4].textContent = "Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm";
