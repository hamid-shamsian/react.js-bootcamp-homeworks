export const debounce = (func, delay) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => func(...args), delay);
  };
};
