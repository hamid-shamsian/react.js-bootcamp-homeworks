const generalWords = [
   ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه", "ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"],
   ["", "", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
   ["", "یکصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"]
];
const extendWords = ["", " هزار", " میلیون", " میلیارد", " تریلیون", " تریلیارد"];

let number,
   farsified = "";

do {
   number = prompt("enter a number!");
} while (isNaN(parseInt(number)));

const splittedBy3digits = [];
let i = number.length;
while (i > 0) {
   splittedBy3digits.push(number.slice(Math.max(0, i - 3), i));
   i -= 3;
}
// console.log(splittedBy3digits);

for (i = 0; i < splittedBy3digits.length; i++) {
   let farsifiedOf3Digits = "";
   const twoRightDigits = splittedBy3digits[i].slice(-2);
   if (twoRightDigits < 20) {
      farsifiedOf3Digits = `${generalWords[0][Number(twoRightDigits)]}${extendWords[i]}`;
      if (splittedBy3digits[i].length == 3) {
         const thirdDigit = +splittedBy3digits[i][0];
         farsifiedOf3Digits = generalWords[2][thirdDigit] + (farsifiedOf3Digits ? " و " : " ") + farsifiedOf3Digits;
      }
   } else {
      const numberDigits = splittedBy3digits[i]
         .split("")
         .map(d => +d)
         .reverse();
      for (let j = numberDigits.length - 1; j >= 0; j--) {
         const farsiWord = generalWords[j][numberDigits[j]];
         farsifiedOf3Digits += farsiWord && `${farsiWord}${j > 0 ? " و " : " "}`;
      }
      farsifiedOf3Digits += extendWords[i] + (i > 0 ? " و " : " ");
   }
   farsified = `${farsifiedOf3Digits} ${farsified}`;
}

alert(splittedBy3digits.reverse().join(",") + "\n" + farsified);
