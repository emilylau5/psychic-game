
// computer's choices for randomizer
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for wins and losses and guesses remaining
var win = 0;
var losses = 0;
var guessesLeft = 12;
var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
var userChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var missedGuess =[""];
// function runs whenever it is pressed and released
document.onkeyup = function(event) {

  var yourGuesses = " ";
  // event.key is assigned a var
  var usersGuess = event.key;
  guessesLeft--;
  if (guessesLeft <= 0){
    if (usersGuess === compGuess) {
      alert("You win!");
      win++;
    }
  };
  if (usersGuess !== compGuess) {
      missedGuess.push(usersGuess);
      console.log(missedGuess);
    }

    if (guessesLeft === 0) {
      losses++;
      guessesLeft = (guessesLeft + 12);
    }

  // a var to hold the html for it to be translated in the bottom
  var html =
  
    "<p>Wins: " + win + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + missedGuess + "</p>" ;

  // putting inner html inside the game div
  document.querySelector("#game").innerHTML = html;
}
  