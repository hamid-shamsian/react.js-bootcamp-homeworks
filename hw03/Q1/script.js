const choices = ["rock", "paper", "scissors"];
const user = { role: "", scores: 0 };
const robot = { role: "", scores: 0 };

while (true) {
   user.role = prompt("enter your choice; select from: ROCK, PAPER, SCISSORS. \nenter only the first letter! (r, p, s)");
   if (!user.role) break;
   user.role = choices.find(c => c[0] === user.role);
   if (!user.role) continue;

   robot.role = choices[Math.floor(Math.random() * 3)];

   updateScores();

   console.log(`
   choices: you: ${user.role}, robot: ${robot.role}

   Scores: you ${user.scores}, robot ${robot.scores}

   winner up to now: ${getWinner()}!`);
}

function updateScores() {
   if (user.role === robot.role) return;
   switch (user.role) {
      case "rock":
         robot.role === "scissors" ? user.scores++ : robot.scores++;
         break;
      case "paper":
         robot.role === "rock" ? user.scores++ : robot.scores++;
         break;
      case "scissors":
         robot.role === "paper" ? user.scores++ : robot.scores++;
   }
}

function getWinner() {
   if (user.scores === robot.scores) return "Equal Scores";
   return user.scores > robot.scores ? "YOU" : "ROBOT";
}
