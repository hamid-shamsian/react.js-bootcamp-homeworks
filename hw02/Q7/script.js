const characterTransform = character => {
   switch (character) {
      case "a":
         return "$";
      case "z":
         return "#";
      case "M":
         return "*";
      case "D":
         return "@";
      default:
         return character;
   }
};

const character = prompt("enter a character!");
alert(characterTransform(character));
