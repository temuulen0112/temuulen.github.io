/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
var correctAnswers = 0;


// 2. Store the rank of a player
var playerRanks = '';

// 3. Select the <main> HTML element
let main = document.querySelector("main")

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
var question1 = prompt("What is the most expensive painting in the world?");
var correctAnswer1 = 'salvator mundi';
if( question1 === correctAnswer1 ){
  correctAnswers += 1;
}

var question2 = prompt("How many players are on a basketball team?");
var correctAnswer2 = "5";
if( question2 === correctAnswer2 ){
  correctAnswers += 1; 
}

var question3 = prompt("What is the weather today?");
var correctAnswer3  = "i don't know";
if( question3 === correctAnswer3 ){
  correctAnswers += 1;
}

var question4 = prompt("Who is the richest person in the world");
var correctAnswer4 = "elon musk";
if( question4 === correctAnswer4 ){
  correctAnswers += 1;
}

var question5 = prompt("Who is the most followed person on instagram");
var correctAnswer5 = "cristiano ronaldo"
if( question5 === correctAnswer5 ){
  correctAnswers += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
let msg;
if( correctAnswers >= 5 ){
  playerRanks = `Gold`;
  msg = `<h1>You got out ${correctAnswers} of 5 questions correct.</h1> <p>Crown earned: <div class="gold"> ${playerRanks} </div></p>`
} else if( correctAnswers >= 3 ){
  playerRanks = `Silver`;
  msg = `<h1>You got out ${correctAnswers} of 5 questions correct.</h1> <p>Crown earned: <div class="silver"> ${playerRanks} </div></p>`
} else if( correctAnswers >= 1 ){
  playerRanks = 'Bronze';
  msg = `<h1>You got out ${correctAnswers} of 5 questions correct.</h1> <p>Crown earned: <div class="bronze"> ${playerRanks} </div></p>`
} else{correctAnswers === 0
  playerRanks = `Uuu huurhii dansand 5k tgd hariug n heliy. Golomt Temuulen 1605160318`;
  msg = `<h1>You got out ${correctAnswers} of 5 questions correct.</h1> <p>Crown earned: ${playerRanks}</p>`
}  


// 6. Output results to the <main> element
main.innerHTML = msg