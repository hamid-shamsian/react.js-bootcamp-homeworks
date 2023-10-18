const linesGenerator = (linesCount, character) => {
   if (isNaN(parseInt(linesCount)) || typeof character != "string") return "invalid inputs to the function!";
   const output = [];
   for (let i = 1; i <= linesCount; i++) {
      output.push(character.repeat(i));
   }
   return output.join("\n");
};

alert(linesGenerator(5, "$"));
