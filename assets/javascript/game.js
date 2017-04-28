// Computer chooses letter
// User presses key and computer compares with chosen letter
// If users guess does not match computers guess, letter is displayed in guessed so far and guesses left goes down by one
// If user runs out of guesses left, losses goes up by one and game resets
// If user guess matches computers guess, wins go up by one



var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).
		toLowerCase();

		console.log(userGuess);

	var computerGuess = letters[Math.floor(Math.random() * letters.length)];

		console.log(computerGuess);

	if (userGuess === computerGuess) {
		alert("You're a Psychic!");
	}

	else {
		alert("Please choose again")
	}


}