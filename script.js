'use strict';

/*TODO This Code is about Number guessing Game.
where user must guess number between
   13 and 33. DONE */

//NOTE Declare Secret number
let secretNumber = Math.floor(Math.random() * (33 - 13 + 1)) + 13;
//NOTE Declare Score & highscore
let score = 13;
let highscore = 0;

// Display text func
const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

// main logic and manipulate
document.querySelector('.check').addEventListener('click', function () {
  // save input value as a number
  const guess = Number(document.querySelector('.guess').value);
  // if number is 0 or not entered
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️No Number!';
    displayMsg('⛔️No Number!');
    // if player guessed correctly
  } else if (secretNumber === guess) {
    displayMsg('🎉You Got It!🎉');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNumber; // be visible correct numb
    document.querySelector('body').style.backgroundColor = '#60b347'; // change color to GREEN
    document.querySelector('.number').style.width = '30rem';
    // if Generated number higher/lower than input value(guess)
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMsg(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
      score--; // decrease score
      document.querySelector('.score').textContent = score; // marking
    } else {
      displayMsg('😭You Lost!💥');
      document.querySelector('body').style.backgroundColor = '#FA7070';
      document.querySelector('.headline').textContent = '🥹GAME  OVER🥹!';
      document.querySelector('.number').textContent = '🌷';
    }
  }
});

// Your tasks:TODO
// 1.DONE Select the element with the 'again' class and attach a click event handler.
// 2.DONE In the handler function, restore initial values of the 'score'
// and 'secretNumber' variables.
// 3.DONE Restore the initial conditions of the message, number, score and guess input fields.
// 4.DONE Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {
  // reinvoke random for Secret number
  secretNumber = Math.floor(Math.random() * (33 - 13 + 1)) + 13;
  // assign Score again 13
  score = 13;

  // Restore as starting condition
  displayMsg('Start guessing...'); //text
  document.querySelector('.number').textContent = '?'; //guessing numb value
  document.querySelector('.number').style.width = '15rem'; //guessing width
  document.querySelector('.score').textContent = score; // current score
  document.querySelector('.guess').value = ''; // reset input value
  document.querySelector('body').style.backgroundColor = '#222'; // back to gray
});
