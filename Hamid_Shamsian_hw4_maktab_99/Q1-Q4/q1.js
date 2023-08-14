const lonelyInteger = arrayOfIntegers => {
   if (!Array.isArray(arrayOfIntegers)) return "invalid input!";

   const sortedIntegers = arrayOfIntegers.sort((a, b) => a - b); // I sorted them to decrease the number of potential repeatitive elements checking: [2,-2,-4,4,7,-7,....]

   for (let integer of sortedIntegers)
      if (!sortedIntegers.includes(-integer)) return `lonely integer: ${integer}`;

   return "all integers have at least one negative instance!";
};

console.log(lonelyInteger([2, -25, 4, -7, 25, -6, -3, -4, -2, 6, 6, 6, 3]));
