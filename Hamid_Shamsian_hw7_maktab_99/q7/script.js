import { laptops } from "./assets/laptops.js";

document.addEventListener("DOMContentLoaded", populateTable);

document.querySelectorAll("select").forEach(select => select.addEventListener("change", changeFilter));

const table = document.querySelector("tbody");

const filters = {
   model: "none",
   processor: "none",
   ram: "none",
   hardDisk: "none",
   display: "none"
};

function populateTable() {
   const filteredList = laptops.filter(laptop => Object.entries(filters).every(filter => filter[1] == "none" || laptop[filter[0]] == filter[1]));

   table.innerHTML = "";
   document.querySelector("#resultsCount").textContent = `Showing ${filteredList.length} results:`;

   filteredList.forEach(laptop => {
      table.insertAdjacentHTML(
         "beforeend",
         `<tr>
            <td>${laptop.model.toUpperCase()}</td>
            <td><img src="assets/${laptop.image}" alt="laptop"</td>
            <td>${laptop.processor.toUpperCase()}</td>
            <td>${laptop.ram.toUpperCase()}</td>
            <td>${laptop.hardDisk.toUpperCase()}</td>
            <td>${laptop.display} inch</td>
            <td>${laptop.graphics}</td>
            <td>${laptop.os}</td>
            <td>${laptop.weight}</td>
            <td>${laptop.battery}</td>
            <td>${laptop.price}</td>
            <td><a href="${laptop.purchase}">Buy now</a></td>
          </tr>`
      );
   });
}

function changeFilter() {
   document.querySelector(`#${this.name}`).className = this.className = this.value == "none" ? "" : "active";
   filters[this.name] = this.value;
   populateTable();
}
