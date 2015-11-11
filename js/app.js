
$(document).ready(function(){

	// Variables
	var $userGuess = $('#userGuess');
	var $feedback = $('#feedback');
	var guessCount = $('#count');
	var userGuess = $('#userGuess').val();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

 	// Start a new game
  newGame = function() {
  	$('a.new').on('click', function() {
  		getSecretNumber();
  		$userGuess.val('');
  		guessCount = 0;
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
			
			if (userGuess === secretNumber) {
				$feedback.html('That is correct');
			} 
			else if (((userGuess + 5) < secretNumber) || ((userGuess + 5) > secretNumber)) {
				$feedback.html("You're hot");
			}
			else if (((userGuess + 10) < secretNumber) || ((userGuess + 10) > secretNumber)) {
				$feedback.html("You're really warm");
			}
			else if (((userGuess + 20) < secretNumber) || ((userGuess + 20) > secretNumber)) {
				$feedback.html("You're cold");
			}
			else if (((userGuess + 30) < secretNumber) || ((userGuess + 30) > secretNumber)) {
				$feedback.html("You're very cold");
			}
			else {
				$feedback.html("Waht the?");
			}
			$userGuess.val('');

		});

	}

});


