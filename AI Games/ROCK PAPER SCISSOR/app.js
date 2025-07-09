window.addEventListener('DOMContentLoaded', () => {
  const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
      const rockBtn = document.querySelector('.rock');
      const paperBtn = document.querySelector('.paper');
      const scissorBtn = document.querySelector('.scissor');
      const playerOptions = [rockBtn, paperBtn, scissorBtn];
      const computerOptions = ['rock', 'paper', 'scissors'];

      playerOptions.forEach(option => {
        option.addEventListener('click', function () {
          const movesLeft = document.querySelector('.movesleft');
          const computerMoveDisplay = document.querySelector('.computer-move');
          moves++;
          movesLeft.innerText = `Moves Left: ${10 - moves}`;

          const choiceNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[choiceNumber];
          const playerChoice = this.innerText.toLowerCase();

          computerMoveDisplay.textContent = `Computer chose: ${computerChoice}`;

          winner(playerChoice, computerChoice);

          if (moves === 10) {
            gameOver(playerOptions, movesLeft);
          }
        });
      });
    };

    const winner = (player, computer) => {
      const result = document.querySelector('.result');
      const playerScoreBoard = document.querySelector('.p-count');
      const computerScoreBoard = document.querySelector('.c-count');

      if (player === computer) {
        result.textContent = 'It\'s a Tie!';
      } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
      ) {
        result.textContent = 'You Won this round!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      } else {
        result.textContent = 'Computer Won this round!';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      }
    };

    const gameOver = (playerOptions, movesLeft) => {
      const chooseMove = document.querySelector('.move');
      const result = document.querySelector('.result');
      const reloadBtn = document.querySelector('.reload');

      playerOptions.forEach(option => {
        option.disabled = true;
        option.style.opacity = '0.5';
        option.style.cursor = 'not-allowed';
      });

      chooseMove.innerText = 'Game Over!';
      movesLeft.style.display = 'none';

      result.style.fontSize = '2rem';
      if (playerScore > computerScore) {
        result.innerText = 'You Won The Game!';
        result.style.color = '#308D46';
      } else if (playerScore < computerScore) {
        result.innerText = 'You Lost The Game!';
        result.style.color = 'red';
      } else {
        result.innerText = 'It\'s a Tie Game!';
        result.style.color = 'grey';
      }

      reloadBtn.style.display = 'block';
      reloadBtn.addEventListener('click', () => window.location.reload());
    };

    playGame();
  };

  game();
});
