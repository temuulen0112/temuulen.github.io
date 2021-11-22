// 1. Create a multidimensional array to hold quiz questions and answers
var quiz = [
  ['10+10 = ?' , '20'],
  ['200-200 = ?', '0'],
  ['5+5 = ?', '10'],
  ['1+1 = ?', '2'],
]
// 2. Store the number of questions answered correctly
let correct = 0;
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for( i = 0; i < quiz.length; i++){
  let question = quiz[i][0]
  let answer = quiz[i][1]
  let response = prompt(question)
  if(response == answer){
    correct += 1
  }
}
// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = `<p>You got ${correct} out  of 4.</p>`