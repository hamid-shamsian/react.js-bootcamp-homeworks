import showToast from "../utils/toast.js";
import http from "./httpService.js";

export async function getTodos(id) {
  try {
    return await http("GET", "todos");
  } catch (err) {
    showToast(err.message, "red");
    throw new Error();
  }
}

export async function getTodo(id) {
  try {
    return await http("GET", `todos/${id}`);
  } catch (err) {
    showToast(err.message, "red");
    throw new Error();
  }
}

export async function addTodo(todo) {
  try {
    await http("POST", "todos", todo);
    showToast("Todo successfully added", "green");
  } catch (err) {
    throw new Error();
  }
}

export async function saveTodo(todo, id) {
  try {
    await http("PATCH", `todos/${id}`, todo);
    showToast("Changes successfully saved", "green");
  } catch (err) {
    throw new Error();
  }
}

export async function deleteTodo(id) {
  try {
    await http("DELETE", `todos/${id}`);
    showToast("Todo successfully deleted", "green");
  } catch (err) {
    throw new Error();
  }
}
