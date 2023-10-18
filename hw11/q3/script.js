const main1 = document.querySelector("#main-1");
const cta1 = document.querySelector("#cta-1");
const ctaBtn1 = document.querySelector("#cta-btn-1");
const main2 = document.querySelector("#main-2");
const cta2 = document.querySelector("#cta-2");
const ctaBtn2 = document.querySelector("#cta-btn-2");

ctaBtn1.addEventListener("click", togglePages);
ctaBtn2.addEventListener("click", togglePages);

function togglePages() {
  main1.classList.toggle("none");
  cta1.classList.toggle("none");

  main2.classList.toggle("none");
  cta2.classList.toggle("none");
}
