var readlineSync = require('readline-sync');
const chalk = require('chalk');


console.log(chalk.redBright.bgYellowBright("Welcome to Bollywod Quiz!"))
console.log(chalk.red("=============================="))
score = 0;

var highScores = [
  {
    name: "Yash",
    score: 6,
  },
]

var username = readlineSync.question(chalk.blueBright("What is your name? => \n"))
console.log(chalk.cyan("Welcome!", username))
console.log(chalk.red("*****************"))
console.log(chalk.blueBright("Please write Full Answer without A,B,C or D."))
console.log(chalk.red("*****************"))
function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("YaY! You were Right."))
    score += 1;
  } else {
    console.log(chalk.green.bgRed("Sorry,try again later!"))
  }
  console.log(chalk.red("*****************"))
}
play("What is the name of Akshay kumar in hera pheri? \n A. Deviprasad \n B. Shyam \n C. Raju \n D. Mohan \n =>", "Raju")
play("What is the name of the lead female character in Dilwale Dulhania Le Jayenge? \n A. Roop \n B. Simran \n C. Preet \n D. Priya \n => ", "Simran")
play("Finish the quote from Deewar: Mere paas ____? \n A. Maa hai \n B. Behen hai \n C. Beti hai \n D. Dadi hai \n => ", "Maa Hai")
play("In Chak De! India, how many minutes, according to coach Kabir Khan, does the team have? \n A. 60 \n B. 70 \n C. 80 \n D. 90 \n => ", "70")
play("In which year kriti sanon's movie MIMI released ? \n A. 2020 \n B. 2021 \n C. 2022 \n D. 2023 \n => ", "2021")
play("In sholay what is the name of amitabh? \n A. Jay \n B. veeru \n C. Ritik \n D. Yash \n => ", "Jay")


console.log(chalk.redBright.bgGreen("\nYour score is " + "(" + score + ")" + " out of 6."))
if (score > 5) {
  console.log(chalk.black.bgYellow("\n\nHurray,You are Champ!\n"))
} else if (score > 3) {
  console.log(chalk.black.bgYellow("\n\nYou done it well!\n"))
} else {
  console.log(chalk.black.bgYellow("\n\nYou have to learn more!\n"))
}
console.log(chalk.green("High Score : "))
highScores.map(score => console.log(score.name, ":", score.score))

console.log("\n\nIF YOUR SCORE IS HIGH PLEASE LET ME KNOW!")