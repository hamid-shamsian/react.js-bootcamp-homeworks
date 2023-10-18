const mainForm = document.querySelector(".main-form");

mainForm.addEventListener("submit", validateForm);

function validateForm(e) {
   e.preventDefault();
   const formData = Object.fromEntries(new FormData(mainForm).entries());
   if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email) &&
      formData.phone.match(/^\d{10}$/) &&
      formData.company &&
      formData.business &&
      formData.address &&
      formData.postcode &&
      formData.contact &&
      formData.linkedin
   ) {
      console.log("form data is valid...");
      // submit form here...
   }
}
