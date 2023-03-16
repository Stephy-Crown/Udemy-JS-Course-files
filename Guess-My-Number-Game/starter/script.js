'use strict';

// CREATING MY SECRET NUMBER
// Math.random()*20:: gives random numbers from 0-1 then multiply by 20::so we get 0-19.9999:::We truncate the decimal part with Math.trunc()::::Then we will only have 0-19, so we add +1:::This secretNumber is also a STATE VARIABLE
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// VARIABLE FOR SCORE
// We will be changing this score whenver there is a wrong answer
// Its good to keep a variable in your code, and not just rely entirely on the DOM::Its a STATE VARIABLE:::Bcoz the score is part of the application state
let score = 20;

// VARIABLE FOR HIGHSCORE
let highScore = 0;

// Add event listener to Check button
document.querySelector('.check').addEventListener('click', () => {
  // console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);

  // The value gotten from an input is usually a type of STRING, so we convert to NUMBER
  console.log(guess, typeof guess);

  // The value of guess is 0::and 0 is a falsy value so to make it true, we negate it with(!)::When its TRUE, then the if block is executed

  // CONDITIONS/SCENARIOS
  // When there's no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // IMPLEMENTING HIGH SCORE::When resetting, everything resets except for the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      // score=score-1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    // When guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      // score=score-1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Resetting the game to initial values/conditions
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.score').textContent = 20;

  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  Number((document.querySelector('.guess').value = ''));
});
