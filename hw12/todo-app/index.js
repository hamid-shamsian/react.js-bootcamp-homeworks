import showToast from "./toast.js";
const API_URL = "http://localhost:3000/";

const pageTitle = document.querySelector("#pageTitle");
const form = document.querySelector("form");
const btn = document.querySelector("form button");
let todoId = null;

document.addEventListener("DOMContentLoaded", init);

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  todoId = urlParams.get("id");

  if (todoId) {
    pageTitle.textContent = "Edit Todo";
    btn.textContent = "Save Changes";
    populateForm(todoId);
  } else {
    pageTitle.textContent = "Add a New Todo";
    btn.textContent = "Submit";
  }
}
// =========================================================================================

async function populateForm(id) {
  try {
    const res = await fetch(`${API_URL}todos/${id}`);
    if (res.status === 404) location.assign("notFound.html");
    if (!res.ok) throw new Error("An expected error occured"); // for handling other expected errors...
    const todo = await res.json();

    form.title.value = todo.title;
    form.description.value = todo.description;
    form.dueDate.value = new Date(todo.dueDate).toISOString().split("T")[0];
  } catch (err) {
    showToast(err.message, "red");
  }
}
// =========================================================================================

form.addEventListener("submit", saveTodo);

async function saveTodo(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  if (data.title && data.dueDate) {
    const todo = { ...data, updatedAt: Date.now(), ...(todoId ? {} : { id: Date.now(), createdAt: Date.now(), isDone: false }) };
    todo.dueDate = +new Date(data.dueDate);

    await myFetch(todo);
  } else {
    showToast("plz fill out the required fields.", "yellow");
  }
}
// =========================================================================================

async function myFetch(body) {
  try {
    let res = await fetch(`${API_URL}todos${todoId ? `/${todoId}` : ""}`, {
      method: todoId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (res.ok) {
      showToast(todoId ? "Changes successfully saved" : "Todo successfully added", "green");
      form.reset();
      pageTitle.textContent = "Add a New Todo";
      btn.textContent = "Submit";
      // window.location.search = "";  // <<<< this will refresh the page that is not something we want...
      const URL = location.href.split("?")[0];
      window.history.pushState("object", document.title, URL);
    } else throw new Error("An expected error occured");
  } catch (err) {
    showToast(err.message, "red");
  }
}
