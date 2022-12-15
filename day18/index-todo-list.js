const todos = [
  {
    id: 1,
    completed: true,
    content: "Learning HTML",
  },
  {
    id: 2,
    completed: true,
    content: "Learning CSS",
  },
  {
    id: 3,
    completed: false,
    content: "Learning JavaScript",
  },
];

const div = document.querySelector("div#app");

const createTodoItem = function (todos) {
  const li = document.createElement("li");
  li.textContent = todos.content;
  li.classList.add("todo-item");
  if (todos.completed) li.id = "completed";

  return li;
};

const creatToDoList = function (todos) {
  const ul = document.createElement("ul");
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = createTodoItem(todo);
    ul.append(li);
  }
  return ul;
};

div.append(creatToDoList(todos));
