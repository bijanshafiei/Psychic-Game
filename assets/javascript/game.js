// Computer chooses letter
// User presses key and computer compares with chosen letter
// If users guess does not match computers guess, letter is displayed in guessed so far and guesses left goes down by one
// If user runs out of guesses left, losses goes up by one and game resets
// If user guess matches computers guess, wins go up by one


// Establishes global variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLettersArr = [];
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Captures users key press and converts to lowercase for error handling
document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).
		toLowerCase();

		console.log(userGuess)
	

		console.log(computerGuess);

	// Compares user guess to computer guess and increments wins/losses. updates guesses left and resets when user loses.
	if (userGuess === computerGuess) {
		wins++;
		guessesLeft = 10;
		alert("Wins: " + wins)
	}

	else if (guessesLeft > 0) {
			guessesLeft--;
		}else {
			guessesLeft = 10;
		}

	if (guessesLeft === 0) {
		losses++;
		alert("Losses: " + losses);

	}



	
		
	

	



console.log(wins);
console.log(losses);
console.log(guessesLeft);

}