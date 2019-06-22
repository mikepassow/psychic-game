



// Variables 

var wins = 0;
var losses = 0;
var remainingGuesses = 7;

// Array of the alphabets that computer can guess from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessArr = [];  // this array will be used to store the user inputs in userInput paragraph.

// Randomly chooses from letters variable
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

// Functions

  document.onkeyup = function(event) {
    var userInput = event.key;
    var lowerCase = userInput.toLocaleLowerCase(); 
    guessArr.push(lowerCase);

    if (lowerCase === computerChoice) {

      wins++;
      resetGame();  // Resets computerChoice and guessCounter

    } else {

      remainingGuesses--;

    };

    if (remainingGuesses < 0) {

      losses++;
      resetGame();

    };

    if (remainingGuesses === 0) {
      alert ("You must not be psychic!")
    }
    


    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("remainingGuesses").innerHTML = "Remaining guesses: " + remainingGuesses;
    document.getElementById("userInput").innerHTML = "Your guesses so far: " + guessArr;
   
  };


  function resetGame() {
    remainingGuesses = 7;

    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
  };