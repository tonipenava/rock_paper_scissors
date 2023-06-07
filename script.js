let playerScore = 0;
let computerScore = 0;
let highScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    displayResult(`It's a tie! Computer choose: ${computerChoice}`);
    toggleStyle('draw');
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    highScore++;
    displayResult(`You win! ${playerChoice} beats ${computerChoice}`);
    updateHighScore(highScore);
    toggleStyle('win');
  } else {
    computerScore++;
    highScore = 0;
    displayResult(`You lose! ${computerChoice} beats ${playerChoice} `);
    updateHighScore(0);
    toggleStyle('lose');
  }

  updateScoreboard();
}

function displayResult(message) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = message;
}

function updateScoreboard() {
  const playerScoreElement = document.getElementById('player-score');
  playerScoreElement.textContent = playerScore;

  const computerScoreElement = document.getElementById('computer-score');
  computerScoreElement.textContent = computerScore;
}

function updateHighScore(value) {
  highScore = value;
  const highScoreElement = document.getElementById('hs');
  highScoreElement.textContent = 'Your current high score:' + highScore;
}

function toggleStyle(value) {
  if (value == 'win') {
    document.body.style.backgroundColor = '#53a052';
    document.getElementById('if-win').style.display = 'block';
  } else if (value == 'draw') {
    document.body.style.backgroundColor = '#8c8c8c';
    document.getElementById('if-win').style.display = 'none';
  } else {
    document.body.style.backgroundColor = '#905252';
    document.getElementById('if-win').style.display = 'none';
  }
}
