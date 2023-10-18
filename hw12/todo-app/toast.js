export default function showToast(text, color) {
  Toastify({
    text,
    duration: 5000,
    className: "",
    // close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: color
    }
  }).showToast();
}
