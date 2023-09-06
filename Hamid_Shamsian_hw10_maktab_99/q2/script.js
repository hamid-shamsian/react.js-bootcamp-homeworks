const calcBtn = document.querySelector("#calcBtn");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const result = document.querySelector("#result");

calcBtn.addEventListener("click", calcBMI);

const grades = {
   "Underweight (Severe thinness)": 0,
   "Underweight (Moderate thinness)": 16,
   "Underweight (Mild thinness)": 17,
   "in Normal range": 18.5,
   "Overweight (Pre-obese)": 25,
   "Obese (Class I)": 30,
   "Obese (Class II)": 35,
   "Obese (Class III)": 40
};

function calcBMI() {
   const [w, h] = [weight.value, height.value / 100];

   if (w > 0 && h > 0) {
      const BMI = w / h ** 2;

      const i = [...Object.values(grades), BMI].sort((a, b) => a - b).indexOf(BMI);
      const grade = Object.keys(grades)[i - 1];

      result.innerHTML = `<p>Your BMI is: ${BMI.toFixed(2)}</p><p>You are ${grade}.</p>`;
   } else {
      result.innerHTML = `<p>Please enter valid Weight and Height!</p>`;
   }
}
