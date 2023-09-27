export default function renderTodo(todo) {
  return `<div class="card w-100">
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
          </div>`;
}
