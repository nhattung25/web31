// API lấy danh sách todo
function getTodosAPI() {
  return axios.get("/todos"); // => luôn trả về promise
}

// Lấy danh sách todo
async function getTodos() {
  try {
    const res = await getTodosAPI();
    todos = res.data;

    // Render ra ngoài giao diện
    renderUI(todos);
  } catch (error) {
    console.log(error);
  }
}

//Khai báo biến
let todos = [];

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

function renderUI(arr) {
  todo_list.innerHTML = "";
  if (arr.length === 0) {
    todo_list.innerHTML = "<p>Không có công việc</p>";
  }
  for (let i = 0; i < arr.length; i++) {
    let t = arr[i];
    console.log(t);
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

window.onload = () => {
  getTodos();
};
