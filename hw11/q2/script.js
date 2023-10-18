import classes from "./assets/classes.js";

const formElement = document.querySelector("form");
const selectElement = document.querySelector("#select");
const inputsDiv = document.querySelector("#inputs");
const calcBtn = document.querySelector("#calcBtn");
const outputsTable = document.querySelector("#outputs");
const titleSpan = document.querySelector("#title");

selectElement.addEventListener("change", renderInputs);
calcBtn.addEventListener("click", renderOutputs);
// ---------------------------------------------------------------------------------
function renderInputs() {
  titleSpan.textContent = this.value;
  inputsDiv.innerHTML = "";

  if (this.value) {
    calcBtn.removeAttribute("disabled");

    const inputFields = classes[this.value].interface().in; // I implemented interface as a static method because i dont want to instantiate the class here :)

    Object.entries(inputFields).forEach(
      field =>
        (inputsDiv.innerHTML += `<div class="input-group mb-3">
          <span class="input-group-text">${field[1]}</span>
          <input name="${field[0]}" type="number" min="0" class="form-control" required/>
          ${field[0] != "sidesCount" ? `<span class="input-group-text">CM</span>` : ""}
        </div>`)
    );
  } else calcBtn.setAttribute("disabled", true);
}
// ---------------------------------------------------------------------------------
function renderOutputs() {
  const data = Object.fromEntries(new FormData(formElement).entries());

  if (Object.values(data).includes("")) {
    return (outputsTable.textContent = "Please fill out all input fields!");
  } else {
    const shape = new classes[selectElement.value]("my shape", ...Object.values(data));

    const outputItems = classes[selectElement.value].interface().out;

    outputsTable.innerHTML = "";
    Object.entries(outputItems).forEach(
      field => (outputsTable.innerHTML += `<tr><td>${field[1]}</td> <td>${shape[field[0]]().toFixed(2)} ${shape.units[field[0]]}</td></tr>`)
    );
  }
}
