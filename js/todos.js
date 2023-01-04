const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function removeTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newTodo.text;
  button.innerText = "❌";

  li.appendChild(span);
  li.appendChild(button);

  button.addEventListener("click", removeTodo);
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  newTodo.id = Math.random();
  todoInput.value = "";
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
