const get_GCD_LCM_of = (num1, num2) => {
   if (isNaN(+num1 + +num2)) return `invalid numbers!`;
   if (+num1 == 0 || +num2 == 0) return `cannot calculate for zero as an input!`;
   const Divisions = [num1, num2].sort((a, b) => a - b);
   do {
      Divisions.push(Divisions.at(-2) % Divisions.at(-1));
   } while (Divisions.at(-1) != 0);
   const _GCD = Divisions.at(-2);
   return `
GCD of the numbers is: ${_GCD}
And the LCM is: ${(num1 * num2) / _GCD}`;
};

// console.log(get_GCD_LCM_of(98, 420));

const a = prompt("enter first number");
const b = prompt("enter second number");
alert(get_GCD_LCM_of(a, b));

// const arr = [3, 4, 5];
// arr.push(6);
// console.log(arr);
