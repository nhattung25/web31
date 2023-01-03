//Gọi API
//Cú pháp fetch(url,options)
let toPostCard = function (post) {
  return ` <div class="posts">
    <div class="post">
      <div class="post-author">
        <div>
          Post by: <span class="author-name">${post.user.username}</span> - Email:
          <a href="${post.user.email}" class="author-email">${post.user.email}</a>
        </div>
      </div>
      <div class="post-title">Title:
        <a href="" class="post-link"> ${post.title}</a>
      </div>
      <div class="post-body">${post.body}</div>
    </div>
  </div>`;
};

try {
  //gọi API dòng 6,7
  const respone = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_expand=user"
  );
  const data = await respone.json();

  document.querySelector(".post").innerHTML = data.map(toPostCard).join("");
} catch (error) {
  console.log("không thể lấy dữ liệu");
}
