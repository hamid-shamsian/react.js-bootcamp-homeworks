import { products, tags, cats } from "./data.js";

const productsContainer = document.querySelector("#products");
const tagsContainer = document.querySelector("#tags");
const catsContainer = document.querySelector("#cats");

products.forEach(p =>
   productsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="border rounded-md p-4 flex justify-between gap-5 cursor-pointer">
         <div class="flex flex-col justify-between flex-1">
            <h3 class="font-bold text-lg lg:text-base">${p.title}</h3>
            <div class="text-gray-400 text-sm xs:text-base lg:text-sm">
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

tags.forEach(t => tagsContainer.insertAdjacentHTML("beforeend", `<span class="ml-2 px-4 py-1.5 border border-gray-200 rounded-full">${t}</span>`));

cats.forEach(c =>
   catsContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="flex items-center my-3 cursor-pointer transition-all duration-300 hover:text-black">
         <i class="fa fa-lg fa-fw fa-${c.icon} ml-3"></i>${c.title}
      </li>`
   )
);
