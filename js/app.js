
$(document).ready(function(){

	// Variables
	var $userGuess = $('#userGuess');
	var $feedback = $('#feedback');
	var guessCount = 	$('#count').val();
	
	// Display information modal box
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  // Hide information modal box
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

 	// Start a new game
  newGame = function() {
  	$('a.new').on('click', function() {
  		getSecretNumber();
  		$userGuess.val('');
  		$feedback.html('Make your Guess!');
  	});
  }

  newGame();

  getSecretNumber();

  // Generate random number between 1 and 100
  function getSecretNumber() {
	  var secretNumber = Math.floor((Math.random() * 100) + 1);
	  console.log(secretNumber);

		// Get user's guess
		$('form').on('submit', function(e) {
			e.preventDefault();

			// Update user guess count
			guessCount++;
			console.log(guessCount);
		  
		  // Write user guess count into page
		  // $('#count').text(guessCount);
		 
		 // Get user's guess
			var userGuess = $('#userGuess').val();

			// User guesses that are not correct, are added to a list
			userGuesses = function() {
		  	$('#guessList').append('<li>' + userGuess + '</li>');
		  }

			if (userGuess == secretNumber) {
				$feedback.html('That is correct');
				userGuesses();
			} 

			else if ((userGuess >= (secretNumber - 5)) && (userGuess <= (secretNumber + 5))) {
				$feedback.html("You're hot");
				console.log("You're hot");
				userGuesses();
			}
			else if ((userGuess >= (secretNumber - 10)) && (userGuess <= (secretNumber + 10))) {
				$feedback.html("You're really warm");
				console.log("You're really warm");
				userGuesses();
			}
			else if ((userGuess >= (secretNumber - 20)) && (userGuess <= (secretNumber + 20))) {
				$feedback.html("You're cold");
				console.log("You're cold");
				userGuesses();
			}
			else if ((userGuess >= (secretNumber - 30)) && (userGuess <= (secretNumber + 30))) {
				$feedback.html("You're very cold");
				console.log("You're very cold");
				userGuesses();
			}
			else {
				$feedback.html("Not even close!");
				console.log("Not even close!");
				userGuesses();
			}
			$userGuess.val('');

			$('#count').text(guessCount);

		});

	}

});


