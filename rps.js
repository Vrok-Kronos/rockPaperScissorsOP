//create variables named 'playerPoints', 'computerPoints' and 'highscore' to store points to declare a winner(2 points for win, 1 point for tie, 0 points for loss.)
let playerPoints = 0
  , computerPoints = 0
  , highscore = 0
  , numOfRound = 1;

//create a variable to store user input named 'playerChoice' and prompt user for their choice of rock, paper, or scissors (case insensitive)
let playerPrompt = ``
  , playerChoice = `text`
  , pc = 0
  , cc = 0;

//get player to make a choice
function player_choice() {
    let messagetxt = `Please enter 'rock', 'paper', or 'scissors' to start playing. Round ${numOfRound}/5`;

    let keeprunning = true;
    while (keeprunning) {
        
        playerPrompt = prompt(messagetxt);
        playerChoice = String(playerPrompt).toLowerCase();
        if (playerPrompt === null) {
            keeprunning = false;
            alert(`You have closed the game.`)           
        } else if (playerChoice === `rock`) {
            //console.log(playerChoice === `rock`);
            numOfRound += 1;
            keeprunning = false;
        } else if (playerChoice === `paper`) {
            //console.log(playerChoice === `paper`);
            numOfRound += 1;
            keeprunning = false;
        } else if (playerChoice === `scissors`) {
            //console.log(playerChoice === `scissors`);
            numOfRound += 1;
            keeprunning = false;
        } else {
            messagetxt = `That is not a valid option! Please enter 'rock', 'paper', or 'scissors' to play. Round ${numOfRound}/5`;
            numOfRound += 0;
            keeprunning = true;
        }
    }
    return playerChoice;
}

//computer makes it's choice
function computer_choice(choice) {
    let choiceArray = [`rock`, `paper`, `scissors`];
    choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice;
}



//create a function named 'compare_choices' that compares the computer's to player's choice, and display a response to result of 'compare choices'
function compare_choices(pc, cc) {   
    
    pc = player_choice();
    cc = computer_choice();

    console.log(pc, cc)

    if (pc === `rock` && cc === `rock`) {
        playerPoints += 1;
        computerPoints += 1;
        return rockVrock = `It is a tie. Rock equals Rock`;

    } else if (pc === `rock` && cc === `paper`) {
        playerPoints += 0;
        computerPoints += 2;
        return rockVpaper = `You Lose. Paper Beats Rock`;

    } else if (pc === `rock` && cc === `scissors`) {
        playerPoints += 2;
        computerPoints += 0;
        return rockvscissors = `You Win. Rock beats Scissors`;

    } else if (pc === `paper` && cc === `rock`) {
        playerPoints += 2;
        computerPoints += 0;
        return paperVrock = `You Win. Paper beats Rock`;

    } else if (pc === `paper` && cc === `paper`) {
        playerPoints += 1;
        computerPoints += 1;
        return paperVpaper = `It is a tie. Paper equals Paper`;

    } else if (pc === `paper` && cc === `scissors`) {
        playerPoints += 0;
        computerPoints += 2;
        return paperVscissors = `You Lose. Scissors Beats Paper`;

    } else if (pc === `scissors` && cc === `rock`) {
        playerPoints += 0;
        computerPoints += 2;
        return scissorsVrock = `You Lose. Rock Beats Scissors`;

    } else if (pc === `scissors` && cc === `paper`) {
        playerPoints += 2;
        computerPoints += 0;
        return scissorsVpaper = `You Win. Scissors beats Paper`;

    } else if (pc === `scissors` && cc === `scissors`) {
        playerPoints += 1;
        computerPoints += 1;
        return scissorsVscissors = `It is a tie. Scissors equals Scissors`;

    } else {
        return invalidOption = `You didn't enter in a valid option!`;
    }
}



//create for loop to run 5 iterations of the 'game'
let counter = 1
for (; counter <= 5 && playerPrompt !== null; counter += 1) {
    console.log(compare_choices(pc, cc));
    //use console.log to display results and score for each player after each round
    console.log(`You have ${playerPoints} points, the computer has ${computerPoints} points.`);
    declare_winner();
}


//function to declare winner with most points.
function declare_winner() {

    if (playerPrompt === null) {
        return console.log(`The game has been forfeited!`);
    } else if (counter < 5) {
        return;
    } else {
        if (playerPoints > computerPoints) {
            return console.log(`You have won with ${playerPoints} points to the computer's ${computerPoints} points!`);
        } else if (playerPoints < computerPoints) {
            return console.log(`You have lost with ${playerPoints} points to the computer's ${computerPoints} points!`);
        } else if (playerPoints == computerPoints) {
            return console.log(`It's a tie! You have ${playerPoints} points to the computer's ${computerPoints} points.`);
        } else {
            return console.log(`The game has been forfeited!`);
        }
    }
}

