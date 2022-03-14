const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('counter-intern');
const highScoreDisplay = document.getElementById('high-score');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let score = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
  getScore();
  getHighScore()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) +1;
  if (randomNumber === 1) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'Scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'Paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw'
  }
  if (computerChoice === 'Rock' && userChoice === "Paper") {
     result = 'Your win !';
  }
  if (computerChoice === 'Rock' && userChoice === "Scissors") {
    result = 'Your lost :(';
  }
  if (computerChoice === 'Paper' && userChoice === "Scissors") {
    result = 'Your win !';
  }
  if (computerChoice === 'Paper' && userChoice === "Rock") {
    result = 'Your lost :(';
  }
  if (computerChoice === 'Scissors' && userChoice === "Rock") {
    result = 'Your win !';
  }
  if (computerChoice === 'Scissors' && userChoice === "Paper") {
    result = 'Your lost :(';
  }

  resultDisplay.innerHTML = result;
}
function getScore() {
  if (result == 'Your win !') {
    score++;
  }
  if (result == 'its a draw') {
    score = score;
  }
  if (result == 'Your lost :(') {
    score = 0;
  }

  scoreDisplay.innerHTML = score;
}


let highscore = localStorage.getItem("highscore");

function getHighScore() {
  if(highscore !== null){
      if (score > highscore) {
          localStorage.setItem("highscore", score);
      }
  }
  else{
      localStorage.setItem("highscore", score);
  }
  highScoreDisplay.innerHTML = highscore;
}
