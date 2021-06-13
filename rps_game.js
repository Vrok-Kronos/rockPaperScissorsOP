// Add Dom listener event so script waits untill the browser is finished loading the html
document.addEventListener(`DOMContentLoaded`, function() {


	//create variables named 'playerPoints', 'computerPoints' and 'highscore' to store points to declare a winner(2 points for win, 1 point for tie, 0 points for loss.)
	//create variable to keep track of rounds played named 'numOfRound'
	let playerPoints = 0
	  , computerPoints = 0;

	// Create constants to access the html DOM with
	const displayMessage = document.querySelector(`#gameDescription`)
	    , displayScore = document.querySelector(`#score`)
	    , playerRock = document.querySelector(`#rock`)
	    , playerPaper = document.querySelector(`#paper`)
	    , playerScissors = document.querySelector(`#scissors`);

	
	// Run game on each button click
	playerRock.addEventListener(`click`, function() {
		displayMessage.innerText = `${compare_choices(`rock`)}`;
		display_score();
		declare_winner();
	});

	playerPaper.addEventListener(`click`, function() {
		displayMessage.innerText = `${compare_choices(`paper`)}`;
		display_score();
		declare_winner();
	});

	playerScissors.addEventListener(`click`, function() {
		displayMessage.innerText = `${compare_choices(`scissors`)}`;
		display_score();
		declare_winner();
	});


	//computer makes it's choice
	function make_computer_choice(choice) {
		let choiceArray = [`rock`, `paper`, `scissors`];
		choice = choiceArray[Math.floor(Math.random() * choiceArray.length - 0.001)];

		return choice;
	}



	//create a function named 'compare_choices' that compares the computer's to player's choice, and display a response to result of 'compare choices'
	function compare_choices(pc, cc) {

		cc = make_computer_choice();

		if (pc === `rock` && cc === `rock`) {
			playerPoints += 0;
			computerPoints += 0;
			return rockVrock = `It is a tie. Rock equals Rock`;

		} else if (pc === `rock` && cc === `paper`) {
			playerPoints += 0;
			computerPoints += 1;
			return rockVpaper = `You Lose. Paper Beats Rock`;

		} else if (pc === `rock` && cc === `scissors`) {
			playerPoints += 1;
			computerPoints += 0;
			return rockVscissors = `You Win. Rock beats Scissors`;

		} else if (pc === `paper` && cc === `rock`) {
			playerPoints += 1;
			computerPoints += 0;
			return paperVrock = `You Win. Paper beats Rock`;

		} else if (pc === `paper` && cc === `paper`) {
			playerPoints += 0;
			computerPoints += 0;
			return paperVpaper = `It is a tie. Paper equals Paper`;

		} else if (pc === `paper` && cc === `scissors`) {
			playerPoints += 0;
			computerPoints += 1;
			return paperVscissors = `You Lose. Scissors Beats Paper`;

		} else if (pc === `scissors` && cc === `rock`) {
			playerPoints += 0;
			computerPoints += 1;
			return scissorsVrock = `You Lose. Rock Beats Scissors`;

		} else if (pc === `scissors` && cc === `paper`) {
			playerPoints += 1;
			computerPoints += 0;
			return scissorsVpaper = `You Win. Scissors beats Paper`;

		} else if (pc === `scissors` && cc === `scissors`) {
			playerPoints += 0;
			computerPoints += 0;
			return scissorsVscissors = `It is a tie. Scissors equals Scissors`;

		} else {
			return invalidOption = `You didn't enter in a valid option!`;
		}
	}


	
	function display_score() {
		return displayScore.innerText = `You have ${playerPoints} points. The computer has ${computerPoints} points.`
	}

	// Declare winner with most points.
	function declare_winner() {

		if (playerPoints < 5 && computerPoints < 5) {
			return;
		} else {
			if (playerPoints > computerPoints) {
				return displayScore.innerText = `You have won with ${playerPoints} points to the computer's ${computerPoints} points!`;
			} else if (playerPoints < computerPoints) {
				return displayScore.innerText = `You have lost with ${playerPoints} points to the computer's ${computerPoints} points!`;
			} else if (playerPoints == computerPoints) {
				return displayScore.innerText = `It's a tie! You have ${playerPoints} points to the computer's ${computerPoints} points.`;
			} else {
				return displayMessage.innerText = `Oops! Something went wrong somewhere...`;
			}
		}
	}

});