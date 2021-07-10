const readline = require("readline-sync");
console.log("\t *****Welcome to Quizzler*****");
//Taking playerName
var playerName = readline.question("Please Enter Your Name :")
console.log (`Welcome ${playerName} !! \nLets play Kaun Banega Console Pati`);
console.log ("\nThis Episode is dedicated to Front-End Engineers");
console.log("\nOur topic for this episode will be JavaScript")

var score = 0;

function quizEngine(question,correctAnswer){
    var userAnswer= readline.question(question);
    var isAnswerCorrect;
    
    if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()){
        score ++ ;
        isAnswerCorrect=true;
        //console.log("You Guessed it right !!")
    }
     else{
        isAnswerCorrect=false;
       // console.log("You messed this buddy !!")
     }

     return isAnswerCorrect;
}

var questionBank = [{
  question: "JavaScript was Developed in which year ? \n",
  answer : "1951"
},{
  question: "Who developed JavaScript ? \n",
  answer : "Brendan Eich"
},{
  question: "What is the name of this function ()=>{} \n ",
  answer : "arrow"
},
{
  question:"A function which take another function as arugment is called ? \n",
  answer:"higher-order"
},
{
    question:"A function without name  is called ? \n",
    answer:"anonymous"
  },
  {
    question:"React is JavaScript framework or Library ? \n",
    answer:"library"
  }

]

for (var iterator=0; iterator < questionBank.length; iterator ++){
var guessValue = quizEngine(questionBank[iterator].question,questionBank[iterator].answer);
console.log("did you guess it right  ?", guessValue);
console.log("Your Score is : ", score);
}

console.log(`You Got ${score} out of ${questionBank.length} correct`);

var scoreBoard = [
{
  player : "Sarvjeet",
  point: `${questionBank.length}`,
},
{
  player:"Rauhl",
  point: `${questionBank.length -1}`
},
{
  player:`${playerName}`,
  point: `${score}`
}
]

console.log("------------ScoreBoard------------");
  console.log("Player"+" : "+"Score");
  for (i=0; i < scoreBoard.length; i++){
   console.log (scoreBoard[i].player+" : "+scoreBoard[i].point);}
var leaderBoard = [
{
  player : "Sarvjeet",
  point: `${questionBank.length}`,
},{
  player:"Rauhl",
  point: `${questionBank.length -1}`
}
]


function isTopScorer(leaderBoard,score){
  var result=false;
for(var iterator =0; iterator < leaderBoard.length; iterator ++){
  if (leaderBoard[iterator].point <= score)result=true;
}
if(result){
  console.log("You are top scorer !!, \n Send me Screenshot at my mail, I will update your name in Learderboard")
}
else{
   console.log("Try again to become top scorer !!")
  
}

} isTopScorer(leaderBoard,score);