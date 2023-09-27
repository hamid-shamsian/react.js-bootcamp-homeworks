import showToast from "./toast.js";
const API_URL = "http://localhost:3000/";

let todos = [];
let perPage = 5;
let currentPage = 1;
let pagesCount = 1;

const todosDiv = document.querySelector("#todos");
const pagesDiv = document.querySelector("#pagination");
const doDeleteBtn = document.querySelector("#doDelete");
const showingCountP = document.querySelector("#showingCount");

document.addEventListener("DOMContentLoaded", getTodos);

async function getTodos() {
  const urlParams = new URLSearchParams(window.location.search);
  currentPage = urlParams.get("page") || 1;

  try {
    const res = await fetch(API_URL + "todos");

    if (res.ok) showToast("Successfully fetched Todos", "green");
    else throw new Error("An expected error occured!");

    todos = await res.json();
    renderPageBtns();
    renderTodos();
  } catch (err) {
    showToast(err.message, "red");
  }
}
// =========================================================================================

function renderTodos() {
  const from = (currentPage - 1) * perPage;
  const to = Math.min(from + perPage, todos.length);

  showingCountP.textContent = todos.length ? `Showing Todos number ${from + 1} to ${to} out of ${todos.length}.` : "No todos to show!";

  const paginatedTodos = todos.slice(from, to);

  todosDiv.innerHTML = "";
  paginatedTodos.forEach(todo =>
    todosDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-100">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">${todo.title}</h5>
          <div class="d-flex align-items-center" data-id="${todo.id}">
            <i class="edit bi-pencil-square fs-4 text-primary mx-2"></i>
            <i class="delete bi-calendar-x fs-4 text-danger me-4" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
            <input type="checkbox" class="done btn-check" id="btn-chk${todo.id}" ${todo.isDone ? "checked" : ""}/>
            <label class="btn btn-outline-success" for="btn-chk${todo.id}">Done</label>
          </div>
        </div>
        <div class="card-body bg-dark-subtle">
          <p class="card-text" id="description">${todo.description || "No description"}</p>
        </div>
        <div class="card-footer bg-danger fw-bold d-flex justify-content-between">
          Do it before: <span>${new Date(todo.dueDate).toDateString()}</span>
        </div>
      </div>`
    )
  );
}
// =========================================================================================

function renderPageBtns() {
  pagesDiv.innerHTML = "";
  pagesCount = Math.ceil(todos.length / perPage);
  if (currentPage > pagesCount) currentPage = pagesCount;
  if (pagesCount > 1) {
    pagesDiv.insertAdjacentHTML("beforeend", '<li class="page-item"><a class="page-link">Prev</a></li>');
    for (let i = 1; i <= pagesCount; i++)
      pagesDiv.insertAdjacentHTML("beforeend", `<li class="page-item page-link${i == currentPage ? " active" : ""}">${i}</li>`);
    pagesDiv.insertAdjacentHTML("beforeend", '<li class="page-item"><a class="page-link">Next</a></li>');
  }
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

function changeDone(doneBtn) {
  //                    👇 we can add a random character here to produce an expected error... (404)
  fetch(`${API_URL}todos/${doneBtn.parentElement.dataset.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: doneBtn.checked })
  })
    .then(res => {
      if (res.ok) showToast("Successfully changed", "green");
      else throw new Error("An expected error occured!");
    })
    .catch(err => {
      showToast(err.message, "red");
      doneBtn.checked = !doneBtn.checked; // if failured, revert changes back in the UI. (todo's done sitation in this case)
    });
}
// =========================================================================================

doDeleteBtn.addEventListener("click", deleteTodo);

function initConfirmModal(id) {
  doDeleteBtn.dataset.id = id;
  document.querySelector("#deleteTitle").textContent = todos.find(t => t.id == id).title;
}

async function deleteTodo() {
  // >>>>>>>>>>>>>>>>>>>>>>>> changing UI first for optimistic update:
  const deletingTodo = document.querySelector(`[data-id="${this.dataset.id}"]`).closest(".card");
  deletingTodo.classList.add("d-none");

  try {
    //                                      👇 we can add a random character here to produce an expected error... (404)
    const res = await fetch(`${API_URL}todos/${this.dataset.id}`, { method: "DELETE" });
    if (res.ok) {
      showToast("Todo successfully deleted", "green");
      deletingTodo.remove();
      todos.splice(
        todos.findIndex(t => t.id == this.dataset.id),
        1
      );
      renderPageBtns();
      renderTodos();
    } else throw new Error("An expected error occured!");
  } catch (err) {
    showToast(err.message, "red");
    deletingTodo.classList.remove("d-none"); // if failured, revert changes back in the UI. (todo deletion in this case)
  }
}
