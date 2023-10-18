import { getTodos, saveTodo, deleteTodo } from "./services/todoService.js";
import renderTodo from "./dom/renderTodo.js";
import paginate from "./dom/pagination.js";
import getQueryParam from "./utils/queryParam.js";
import showToast from "./utils/toast.js";

let todos = [];
let perPage = 5;
let currentPage = 1;
let pagesCount = 1;

const todosDiv = document.querySelector("#todos");
const pagesDiv = document.querySelector("#pagination");
const doDeleteBtn = document.querySelector("#doDelete");
const showingCountP = document.querySelector("#showingCount");

document.addEventListener("DOMContentLoaded", init);

async function init() {
  currentPage = getQueryParam("page") ?? 1;

  try {
    todos = await getTodos();
    showToast("Successfully fetched Todos", "green");
    renderPageBtns();
    renderTodos();
  } catch (err) {
    console.log(err);
  }
}
// =========================================================================================

function renderTodos() {
  const from = (currentPage - 1) * perPage;
  const to = Math.min(from + perPage, todos.length);

  showingCountP.textContent = todos.length ? `Showing Todos number ${from + 1} to ${to} out of ${todos.length}.` : "No todos to show!";

  const paginatedTodos = todos.slice(from, to);

  todosDiv.innerHTML = paginatedTodos.map(renderTodo).join("");
}
// =========================================================================================

function renderPageBtns() {
  pagesCount = Math.ceil(todos.length / perPage);
  if (currentPage > pagesCount) currentPage = pagesCount;
  pagesDiv.innerHTML = pagesCount > 1 ? paginate(pagesCount, currentPage) : "";
}
// =========================================================================================

// pagination buttons click event delegation:
pagesDiv.addEventListener("click", changePage);

function changePage(e) {
  pagesDiv.children[currentPage].classList.remove("active");

  switch (e.target.textContent) {
    case "Prev":
      if (currentPage > 1) currentPage--;
      break;
    case "Next":
      if (currentPage < pagesCount) currentPage++;
      break;
    default:
      currentPage = +e.target.textContent;
  }

  pagesDiv.children[currentPage].classList.add("active");

  const url = new URL(location);
  url.searchParams.set("page", currentPage);
  history.pushState({}, "", url);

  renderTodos();
}
// =========================================================================================

// action buttons click event delegation:
todosDiv.addEventListener("click", doActions);

function doActions(e) {
  const classes = e.target.classList;

  if (classes.contains("done")) changeDone(e.target);
  else if (classes.contains("edit")) location.assign(`index.html?id=${e.target.parentElement.dataset.id}`);
  else if (classes.contains("delete")) initConfirmModal(e.target.parentElement.dataset.id);
}
// =========================================================================================

async function changeDone(doneBtn) {
  try {
    await saveTodo({ isDone: doneBtn.checked }, doneBtn.parentElement.dataset.id);
  } catch (err) {
    doneBtn.checked = !doneBtn.checked; // if failured, revert changes back in the UI. (todo's done sitation in this case)
  }
}
// =========================================================================================

doDeleteBtn.addEventListener("click", doDeleteTodo);

function initConfirmModal(id) {
  doDeleteBtn.dataset.id = id;
  document.querySelector("#deleteTitle").textContent = todos.find(t => t.id == id).title;
}

async function doDeleteTodo() {
  // >>>>>>>>>>>>>>>>>>>>>>>> changing UI first for optimistic update:
  const deletingTodo = document.querySelector(`[data-id="${this.dataset.id}"]`).closest(".card");
  deletingTodo.classList.add("d-none");

  try {
    await deleteTodo(this.dataset.id);
    const i = todos.findIndex(t => t.id == this.dataset.id);
    todos.splice(i, 1);
    renderPageBtns();
    renderTodos();
  } catch (err) {
    deletingTodo.classList.remove("d-none"); // if failured, revert changes back in the UI. (todo deletion in this case)
  }
}
