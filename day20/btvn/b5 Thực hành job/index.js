// Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.
let job = document.querySelector(".jobs");
let jobCard1 = document.querySelector(".job-card");
let jobCard2 = jobCard1.cloneNode(true); //Sao chép jobCard bằng cloneNode
let jobCard3 = jobCard1.cloneNode(true);
let jobCard4 = jobCard1.cloneNode(true);

job.appendChild(jobCard2);
job.appendChild(jobCard3);
job.appendChild(jobCard4);

// Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
jobCard2.querySelector("h3").innerText = "JavaScript Developer";
jobCard3.querySelector("h3").innerText = "Java Developer";
jobCard4.querySelector("h3").innerText = "Python Developer";

// Cập nhật Jobs listed thành tổng số công việc hiện có trong trang

let jobCount = document.querySelector("#jobs-listed span");
let jobCards = document.querySelectorAll(".job-card");
jobCount.innerText = jobCards.length;

// Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
let searchJob = document.getElementById("search");
searchJob.addEventListener("keyup", function () {
  let value = this.value;
  Array.from(jobCards).forEach((job) => {
    let jobTitle = job.querySelector("h3").innerText;
    if (jobTitle.toLowerCase().includes(value.toLowerCase())) {
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  });
});

// Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc

let allBtn = document.getElementById("show-all");
allBtn.addEventListener("click", function () {
  searchJob.value = "";
  Array.from(jobCards).forEach((job) => {
    job.style.display = "block";
  });
});
