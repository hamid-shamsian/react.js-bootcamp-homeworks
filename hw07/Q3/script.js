const anagramsClean = array => {
   const uniformedStrings = array.map(str =>
      [...str]
         .map(ch => ch.toLowerCase())
         .sort()
         .join("")
   );

   const uniquePatterns = [...new Set(uniformedStrings)];

   return uniquePatterns.map(pattern => array[uniformedStrings.indexOf(pattern)]);
};

//////////////////////////////////////////////

const arr = ["nap", "teacHers", "cheAters", "PAN", "ear", "erA", "heCtARes"];

console.log(anagramsClean(arr));
