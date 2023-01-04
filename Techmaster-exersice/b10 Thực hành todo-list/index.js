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

let todo_list = document.querySelector(".list");
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
            <button class="btn btn-update" >
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

let addBtn = document.querySelector(".input");
let input_tex = document.querySelector("#input-tex");

function addTodo() {
  addBtn.addEventListener("click", function () {
    let input_content = input_tex.value;
    if (input_content == "") {
      alert("Không được để trống công việc");
      return;
    }
    let newTodo = {
      id: createId(),
      title: input_content,
      status: false,
    };
    todos.push(newTodo);
    renderUI(todos);
    input_tex.value = "";
  });
}
addTodo();

function deleteItem(id) {
  for (let i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      todos.splice(i, 1);
    }
  }
  renderUI(todos);
}

deleteItem();

function doneStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      todos[i].status = !todos[i].status;
    }
  }
  renderUI(todos);
}

doneStatus();
