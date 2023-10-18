import { addTodo, getTodo, saveTodo } from "./services/todoService.js";
import getQueryParam from "./utils/queryParam.js";
import showToast from "./utils/toast.js";

const pageTitle = document.querySelector("#pageTitle");
const form = document.querySelector("form");
const btn = document.querySelector("form button");
let todoId = null;

document.addEventListener("DOMContentLoaded", init);

function init() {
  todoId = getQueryParam("id");
  if (todoId) {
    pageTitle.textContent = "Edit Todo";
    btn.textContent = "Save Changes";
    populateForm(todoId);
  } else resetPage();
}
// =========================================================================================

async function populateForm(id) {
  try {
    const todo = await getTodo(id);
    form.title.value = todo.title;
    form.description.value = todo.description;
    form.dueDate.value = new Date(todo.dueDate).toISOString().split("T")[0];
  } catch (err) {
    console.log(err);
  }
}
// =========================================================================================

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  if (data.title && data.dueDate) {
    data.dueDate = +new Date(data.dueDate);

    try {
      if (todoId) await saveTodo({ ...data, updatedAt: Date.now() }, todoId);
      else await addTodo({ ...data, id: Date.now(), createdAt: Date.now(), updatedAt: Date.now(), isDone: false });

      resetPage();
    } catch (err) {
      console.log(err);
    }
  } else {
    showToast("plz fill out the required fields.", "yellow");
  }
}
// =========================================================================================

function resetPage() {
  form.reset();
  pageTitle.textContent = "Add a New Todo";
  btn.textContent = "Submit";
  const URL = location.href.split("?")[0];
  window.history.pushState("object", document.title, URL);
}
