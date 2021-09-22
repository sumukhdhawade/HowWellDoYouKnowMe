const chalk = require('chalk');

var readlineSync = require("readline-sync");

score=0;

var userName = readlineSync.question(chalk.blue("what's your name? "));

console.log(chalk.blue("Welcome ")+userName +chalk.magenta(" to Do you know Sumukh? "));

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.bold.green("right!"));
    score++;
  } else{
    console.log(chalk.bold.red("wrong!"));
    score--;
  }
  console.log(chalk.bold.yellowBright("current score: ",score));
  console.log("-------------------------");
}

var highScores = {
  name1: "Sumukh",
  score1: "10",
  name2: "Nabha",
  score2: "9",
}


var questions = [{question:chalk.bold.cyan("where do i live? "),answer:"nagpur"},{question:chalk.bold.cyan("what am i studying? "),answer:"cs"},{question:chalk.bold.cyan("what is my fav colour? "),answer:"black"},{question:chalk.bold.cyan("what car do i have? "),answer:"city"},{question:chalk.bold.cyan("what is my fav music genre? "),answer:"hip hop"},{question:chalk.bold.cyan("what is my fav sport? "),answer:"f1"},{question:chalk.bold.cyan("would i rather go for a trek or party? "),answer:"trek"},{question:chalk.bold.cyan("who is my fav superhero? "),answer:"batman"},{question:chalk.bold.cyan("what's my dream job? "),answer:"youtuber"},{question:chalk.bold.cyan("introvert or extrovert? "),answer:"ambivert"}];

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}


console.log("HIGH SCORES: ",highScores.name1+" ",highScores.score1);

console.log("HIGH SCORES: ",highScores.name2+" ",highScores.score2);


