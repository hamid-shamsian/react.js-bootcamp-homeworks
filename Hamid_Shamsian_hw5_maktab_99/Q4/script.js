const showNotification = ({ top = 20, right = 20, html = "This is a Notification!", className }) => {
   document.body.insertAdjacentHTML("beforeend", `<span class="notif ${className}" style="top:${top}px;right:${right}px">${html}</span>`);

   document.querySelector(".notif").addEventListener("click", function () {
      this.remove();
      setTimeout(getInfoAndShowNotif, 100);
   });
};

function getInfoAndShowNotif() {
   showNotification({
      top: prompt("Enter the vertical offset from TOP") || undefined,
      right: prompt("Enter the horizontal offset from RIGHT") || undefined,
      html: prompt("Enter HTML content of the notification") || undefined,
      className: prompt("Enter CSS Classes if any...") || undefined
   });
}

getInfoAndShowNotif();
