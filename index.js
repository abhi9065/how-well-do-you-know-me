
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("what your name?")

console.log("welcome " + userName + " to DO YOU KNOW tanay?");

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");
    score = score - 1;
  }

  console.log("current score:" + score);
  console.log("__________");

}
//array of objects
var questions = [{
  question: "where do i live? ",
  answer: "guna"
}, {
  question: "my favourite superhero would be? ",
  answer: "batman"
}, {
  question: "where do i work? ",
  answer: "pg collage"
}, {
  question: "my phone phone brand is ? ",
  answer: "realme"
}, {
  question: "my fav. food is? ",
  answer: "rice"
}];

//loop


for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer)

}

console.log("yay! you scored", score);
