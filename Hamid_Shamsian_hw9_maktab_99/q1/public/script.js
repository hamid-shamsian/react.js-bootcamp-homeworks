import { products, tags, cats } from "./data.js";

const productsContainer = document.querySelector("#products");
const tagsContainer = document.querySelector("#tags");
const catsContainer = document.querySelector("#cats");

products.forEach(p =>
   productsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="product__card">
         <div class="product__info">
            <h3 class="product__title">${p.title}</h3>
            <div class="product__desc">
               <p>${p.tagline}</p>
               <p>${p.price} تومان</p>
               <p>${p.date}</p>
            </div>
         </div>
         <div class="relative flex-1">
            <img src="images/${p.image}" alt="product image" class="rounded-md w-full" />
            ${p.chat ? '<i class="fa fa-comment-o absolute -right-5 bottom-1"></i>' : ""}
         </div>
      </div>`
   )
);

tags.forEach(t => tagsContainer.insertAdjacentHTML("beforeend", `<span class="tag">${t}</span>`));

cats.forEach(c =>
   catsContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="cat__item">
         <i class="fa fa-lg fa-fw fa-${c.icon} ml-3"></i>${c.title}
      </li>`
   )
);
