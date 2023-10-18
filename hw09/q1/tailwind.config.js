/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["public/index.html", "public/script.js"],
   theme: {
      fontFamily: { IranSans: "IranSans, sans-serif, system-ui" },
      extend: {
         screens: {
            xs: "500px",
            sm: "700px"
         }
      }
   },
   plugins: []
};
