
$(document).ready(function(){

	// Variables
	var $userGuess = $('#userGuess');
	var $feedback = $('#feedback');
	var guessCount = 	$('#count').val();
	guessCount = 0;
	var secretNumber;

	getSecretNumber();
	
	// Display information modal box
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  // Hide information modal box
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  
  // Generate random number between 1 and 100
  function getSecretNumber() {
	  secretNumber = Math.floor((Math.random() * 100) + 1);
	  console.log(secretNumber);

	  // Update user guess count
			
		// Get user's guess
		$('form').on('submit', function(e) {
			e.preventDefault();
			

		 // Get user's guess
			var userGuess = $('#userGuess').val();

			// User guesses that are not correct, are added to a list
			userGuesses = function() {
		  	$('#guessList').append('<li class="guesses">' + userGuess + '</li>');
		  }

		  if(userGuess > 100 || userGuess < 1){
		  	$feedback.html('Enter a number between 1 and 100');
		  	userGuesses();
		  	$userGuess.val('');
		  }

		  else if (isNaN(userGuess) === true) {
		  	alert('That is not a number');
		  }

			else if (userGuess == secretNumber) {
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

			guessCount++;

			console.log(guessCount);
			console.log('user guess count is: ' + guessCount);

			$('#count').text(guessCount);


		});

	}

	// Start new game
	$('a.new').on('click', function(e) {
		e.preventDefault();
		
		// Set new secret number
		secretNumber = Math.floor((Math.random() * 100) + 1);
		console.log(secretNumber);

		// Reset feedback message
		$feedback.html('Make your Guess!');
		// 
		$('#count').val('');
		$userGuess.val('');

		// Remove user guesses
		$('li.guesses').remove();

		// Set guess count to 0
		guessCount = 0;
		console.log('user guess count is: ' + guessCount);

		// Set user guess count to show 0 in html
		$('#count').text('0');
	});

});




