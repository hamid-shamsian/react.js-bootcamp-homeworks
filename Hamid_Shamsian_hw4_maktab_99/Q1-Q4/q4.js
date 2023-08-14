const sortArray = array => {
   if (!Array.isArray(array)) return "invalid input!";
   let needMoreIteration = true;
   let iterationsCount = 0; // to know how many iterations have been done to sort the numbers.
   while (needMoreIteration) {
      needMoreIteration = false;
      for (let i = 0; i < array.length - 1; i++) {
         if (array[i] > array[i + 1]) {
            const temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            needMoreIteration = true;
         }
      }
      iterationsCount++;
   }
   return { array, message: `sorted after ${iterationsCount} iterations.` };
};

const arrayOfNumbers = [4, 0, -3, 90, 5, 6, 23, 12, -40, 79, 145, -3];

console.log(sortArray(arrayOfNumbers));

// const result = sortArray(arrayOfNumbers);
// console.log(result.array);
// console.log(result.message);
