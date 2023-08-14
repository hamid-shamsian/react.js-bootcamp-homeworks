//////// first implementation: (accepts only single characters)
const countCharacters = (str, string) =>
   typeof string == "string" && typeof str == "string" && str.length == 1
      ? string.split("").reduce((occurences, letter) => (letter == str ? ++occurences : occurences), 0)
      : "invalid inputs!";

console.log(countCharacters("p", "peyman panj porteghal be sepehr dad!"));
console.log(countCharacters("p", "peyman panj porteghal be pppsepehr dad!"));
console.log(countCharacters("p", ""));
// invoking with invalid inputs:
console.log(countCharacters("", "peyman panj porteghal be sepehr dad!"));
console.log(countCharacters("pe", "some text"));
console.log(countCharacters(undefined, "some text"));
console.log(countCharacters([], "some text"));
console.log(countCharacters("p", {}));
console.log(countCharacters("p", 45));

///////// better alternative way: (mutli-characters strings can also be found)
const countCharacters2 = (str, string) =>
   typeof string == "string" && typeof str == "string" && str.length > 0
      ? string.split(str).length - 1
      : "invalid inputs!";

// console.log(countCharacters2("p", "peyman panj porteghal be sepehr dad!"));
// console.log(countCharacters2("p", "peyman panj porteghalppp be sepehr dad!"));
// console.log(countCharacters2("pe", "peyman panj porteghal be sepehr dad!"));
// console.log(countCharacters2("  ", "peyman panj porteghal be sepehr dad!"));
// console.log(countCharacters2("", "peyman panj porteghal be sepehr dad!"));
