const monthsOfDaysCount = {
   31: [1, 3, 5, 7, 8, 10, 12],
   30: [4, 6, 9, 11],
   "29-28": 2
};

const monthNamesOfDaysCount = {
   31: ["January", "March", "May", "July", "August", "October", "December"],
   30: ["April", "June", "September", "November"],
   "29-28": "February"
};

const getDaysCount = (month, year) => {
   if (typeof month != "number" || typeof year != "number") return "invalid inputs!";
   const isLeapYear = year % 100 == 0 ? year % 400 == 0 : year % 4 == 0; // becuase every 400 years, 3 leap-years are skipped (one leap-year per 100 years.)
   // though I think it is not best practice to do so:
   switch (true) {
      case monthsOfDaysCount[31].includes(month):
         return 31;
      case monthsOfDaysCount[30].includes(month):
         return 30;
      case month == monthsOfDaysCount["29-28"]:
         return isLeapYear ? 29 : 28;
      default:
         return -1;
   }
};

console.log(getDaysCount(2, 2023));
console.log(getDaysCount(2, 2020));
console.log(getDaysCount(5, 2019));
console.log(getDaysCount(9, 2018));
console.log(getDaysCount(12, 2017));
console.log(getDaysCount(14, 2016));
console.log(getDaysCount(12, {}));

//////// alternative:
const monthsGroups = [
   [4, 6, 9, 11],
   [1, 3, 5, 7, 8, 10, 12]
];

const getDaysCount2 = (month, year) => {
   if (typeof month + typeof year != "numbernumber") return "invalid inputs!";
   const isLeapYear = year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
   if (month == 2) return isLeapYear ? 29 : 28;
   for (let i = 0; i < monthsGroups.length; i++) if (monthsGroups[i].includes(month)) return 30 + i;
   return -1;
};

// console.log(getDaysCount2(2, 2023));
// console.log(getDaysCount2(2, 2020));
// console.log(getDaysCount2(5, 2019));
// console.log(getDaysCount2(9, 2018));
// console.log(getDaysCount2(12, 2017));
// console.log(getDaysCount2(14, 2016));
// console.log(getDaysCount2(12, {}));
