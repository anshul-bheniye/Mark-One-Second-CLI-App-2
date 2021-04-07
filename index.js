// Assignment

//  Importing Packages 
var readlineSync = require("readline-sync");
const chalk = require("chalk");

// declaring variable
var score = 6; 

//input from user
var userName = readlineSync.question(chalk.greenBright("💡 Enter your first name please!  "));
console.log(chalk.yellow("Welcome " + userName + " to") + chalk.yellowBright(" >> How Much Do You Know About Chhatrapati Shivaji Maharaj <<"));

// list of questions in array  
var questions = 
[
  {
   question: 
   chalk.blueBright(`🚩  What Was His Father's Name?
    a. Shahuji
    b. Shahaji
    c. None Of These
    d. Lekhaji
    Answer = `),
   answer: "b",
   comment:chalk.magentaBright("Shahaji Maharaj Was The Name Of Shivaji Maharaj's Father!" )
  },
 {
   question: 
   chalk.blueBright(`🚩  What Was His Mother's Name?
    a. Jijabai
    b. Tulsibai
    c. Sitabai
    d. None Of These
    Answer = `),
   answer: "a",
   comment: chalk.magentaBright("Jijabai Was The Name Of Shivaji Maharaj's Mother!")
  },
 {
   question: 
   chalk.blueBright(`🚩  What Is The Date Of Birth Of Shivaji Maharaj?
    a. 12 June 1467
    b. 01 December 1330
    c. 20 March 1539
    d. 19 February 1630
    Answer = `),
   answer: "d",
   comment: chalk.magentaBright("Date Of Birth Is 19 February 1630")
 },
 {
   question: 
   chalk.blueBright(`🚩  Which Clan Of Maratha Did Shivaji Maharaj Belonged To?
    a. Khanvilkar
    b. Sawant
    c. Bhonsle
    d. Ghatge
    Answer = `),
   answer: "c",
   comment: chalk.magentaBright("Bhonsle Clan are also known as warrior clan")
 },
 {
   question: 
   chalk.blueBright(`🚩  How Many Forts Did Shivaji Maharaj Conquered?
    a. 100
    b. 360
    c. 280
    d. 400
    Answer = `),
   answer: "b",
   comment: chalk.magentaBright(" Shivaji Maharaj have had a control of almost 360 forts in his reign in Marathwada.")
 },
 {
   question: 
   chalk.blueBright(`🚩  Which Is The Biggest Fort Of Shivaji Maharaj?
    a. Torna Fort
    b. Sinhagad Fort
    c. Shivneri Fort
    d. Raigad Fort
    Answer = `),
   answer: "d",
   comment: chalk.magentaBright("Raigad Fort! Formerly known as Murumdev, the fort was the capital of the Maratha Empire")
 },
];



//declaring function  
function play(question,answer){
var answerKeeper = readlineSync.question(question);
if (answerKeeper === answer){
  console.log(chalk.greenBright("Congrats your answer was correct ✔️ "));
  score = score + 1;
}
else{
  console.log(chalk.redBright("Uh-No your answer was wrong ❌ "));
  score = score - 1;
}
}

//using for loop to index through question
for ( i = 0; i < questions.length; i++ ){
  var currQuestion = questions[i];
  play(currQuestion.question, currQuestion.answer)
  console.log(chalk.yellowBright("Details: ") ,currQuestion.comment); 
  console.log(chalk.greenBright("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
}

// Final Score
console.log(chalk.yellowBright("Dear " + userName + " your final score is: " + score )+ chalk.bgMagenta.yellowBright("\nIf you want to see your name in leaderboard then send me screenshot of your score"));

// declaring the highscores in an array
var hScores = [ {
  name : "Anshul",
  score : "6",
}, {
  name : " ",
  score :" ",
}
];

console.log(chalk.greenBright("~~~~~~~~~~~~~~~~~~~~"));

console.log(chalk.yellow("~~~ Leader Board ~~~"));

//displaying the leaderboard

for(var k=0 ; k<hScores.length; k++){

  var currUser = hScores[k];

  console.log(chalk.yellowBright("Name: ") + currUser.name + chalk.yellowBright(" score: ")+ currUser.score);

}

console.log(chalk.bgGrey("~~~~~~~~ Thank-You! For Playing This Game ~~~~~~~~"));