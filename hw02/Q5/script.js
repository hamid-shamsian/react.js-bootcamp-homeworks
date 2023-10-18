const questions = [
   { query: "question number 1", a: "answer1", b: "answer2", c: "answer3", d: "answer4", answer: "b" },
   { query: "question number 2", a: "answer1", b: "answer2", c: "answer3", d: "answer4", answer: "d" },
   { query: "question number 3", a: "answer1", b: "answer2", c: "answer3", d: "answer4", answer: "a" },
   { query: "question number 4", a: "answer1", b: "answer2", c: "answer3", d: "answer4", answer: "c" }
];

let userPoints = 0;

for (const question of questions) {
   console.log(question);
   const userAnswer = prompt(`
${question.query}:

   a) ${question.a}
   b) ${question.b}
   c) ${question.c}
   d) ${question.d}

plz enter the associated letter of the correct answer!
      `);
   if (userAnswer === question.answer) userPoints++;
}

alert(`You completed the test and your final point is:
   >>>> ${userPoints} out of ${questions.length} :)`);
