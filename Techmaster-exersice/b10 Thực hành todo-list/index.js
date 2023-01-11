let isUpdate = false;
let idUpdate = null;
let todo_list = document.querySelector(".list");
let addBtn = document.querySelector(".input");
let input_tex = document.querySelector("#input-tex");
let allOpt = document.querySelector("#all");
let pendingOtp = document.querySelector("#pending");
let doneOtp = document.querySelector("#done");

function createId() {
  let id = Math.floor(Math.random() * 10000);
  return id;
}
let todos = [
  {
    id: createId(),
    title: "Làm bài tập",
    status: true,
  },
  {
    id: createId(),
    title: "Chơi với bạn bè",
    status: false,
  },
  {
    id: createId(),
    title: "Sang nhà chị thăm người ốm",
    status: true,
  },
];

function renderUI(arr) {
  todo_list.innerHTML = "";
  if (arr.length === 0) {
    todo_list.innerHTML = "<p>Không có công việc</p>";
  }
  for (let i = 0; i < arr.length; i++) {
    let t = arr[i];
    todo_list.innerHTML += `
    <div class="todo-list ${t.status ? "active-todo" : ""}">
          <div class="todo-item">
            <input type="checkbox" id="checkbox" ${
              t.status ? "checked" : ""
            } onClick="doneStatus(${t.id})"/> 
            <div class="checkbox-title">${t.title}</div>
          </div>
          <div class="option">
            <button class="btn btn-update" onClick="updateItem(${t.id})">
              <img
                src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg"
                alt="icon"
              />
            </button>
            <button class="btn btn-delete" onClick="deleteItem(${t.id})">
              <img
                src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg"
                alt="icon"
              />
            </button>
          </div>
    `;
  }
}

renderUI(todos);

addBtn.addEventListener("click", function () {
  let input_content = input_tex.value;
  if (input_content == "") {
    alert("Không được để trống công việc");
    return;
  }

  if (isUpdate) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == idUpdate) {
        todos[i].title = input_content;
      }
    }
    addBtn.textContent = "THÊM";
    isUpdate = false;
    idUpdate = null;
  } else {
    let newTodo = {
      id: createId(),
      title: input_content,
      status: false,
    };
    todos.push(newTodo);
  }
  renderUI(todos);
  input_tex.value = "";
});

function deleteItem(id) {
  for (let i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      todos.splice(i, 1);
    }
  }
  renderUI(todos);
}

function doneStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      todos[i].status = !todos[i].status;
    }
  }
  renderUI(todos);
}

function updateItem(id) {
  let title;
  for (let i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      title = todos[i].title;
    }
  }
  addBtn.textContent = "CẬP NHẬT";
  input_tex.value = title;
  input_tex.focus();
  idUpdate = id;
  isUpdate = true;
}
// let radio = document.getElementsByClassName("radio");
// function check() {
//   if (allOpt.checked) {
//     doneOtp.checked = false;
//     pendingOtp.checked = false;
//     renderUI(todos);
//   }
//   if (pendingOtp.checked) {
//     console.log("bbbb");
//     allOpt.checked = false;
//     doneOtp.checked = false;
//   }
//   if (doneOtp.checked) {
//     console.log("aaaa");
//     allOpt.checked = false;
//     pendingOtp.checked = false;
//   }
// }
