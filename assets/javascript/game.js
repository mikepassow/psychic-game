



var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var wins = 0;
var losses = 0; 
var remainingGuesses = 7;



var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)

//Receives user input then runs the following function

    document.onkeypress = function(event) {
       
        var userGuess = event.key;
    
        if(userGuess === computerChoice){
            wins++;
        }
        else{
            remainingGuesses--;
        }
    
        if(remainingGuesses === 0){
            losses++
        }
        

        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        document.getElementById('remainingGuesses').innerHTML = "Guesses left: " + remainingGuesses;
        document.getElementById('userGuess').innerHTML = "User letter guessed: " + userGuess;
    }