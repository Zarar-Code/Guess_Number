let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

let input = document.querySelector("#inputval");
let submit = document.querySelector(".btn");
let guesses = document.querySelector("#guesses");
let remainning = document.querySelector("#remain");
let islowhigh = document.querySelector("#isloworhigh");
let startOver = document.querySelector(".part2");

let p1 = document.createElement("span");
let p = document.createElement("p");

let pevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(input.value);
    validation(guess);
  });
}

function validation(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 0) {
    alert("Please Enter Number Greater than 0");
  } else if (guess > 100) {
    alert("Please Enter Number less than 101");
  } else {
    if (numGuess < 9) {
      checkGuess(guess);
      displayGuess(guess);
    } else {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }
    // pevGuess.push(guess);
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your Guess is right`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is too high`);
  }
}
function displayGuess(guess) {
  input.value = "";
  guesses.innerHTML += `${guess}, `;
  remainning.innerHTML = `${8 - numGuess}`;
  if (numGuess !== 8) {
    numGuess++;
  } else {
    if (guess === randomNumber) {
      displayMessage(`Your Guess is right`);
      endGame();
    } else {
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }
  }
}
function displayMessage(message) {
  p1.innerHTML = `<h3 id="message">${message}</h3>`;
  startOver.appendChild(p1);
}
function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 style="cursor: pointer;" id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}
function startGame() {
  const newGamebtn = document.querySelector("#newGame");
  newGamebtn.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    pevGuess = [];
    numGuess = 1;
    guesses.innerHTML = "";
    remainning.innerHTML = `${11 - numGuess}`;
    input.removeAttribute("disabled", "");
    startOver.removeChild(p1);
    startOver.removeChild(p);
    playGame = true;
  });
}
let dateSet = document.querySelector("#date");
let newDate = new Date().getFullYear();
dateSet.innerHTML = newDate
