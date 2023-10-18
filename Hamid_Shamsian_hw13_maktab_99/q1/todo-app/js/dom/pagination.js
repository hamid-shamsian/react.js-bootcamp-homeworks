export default function paginate(pagesCount, currentPage) {
  let markup = '<li class="page-item"><a class="page-link">Prev</a></li>';
  for (let i = 1; i <= pagesCount; i++) markup += `<li class="page-item page-link${i == currentPage ? " active" : ""}">${i}</li>`;
  return markup + '<li class="page-item"><a class="page-link">Next</a></li>';
}
