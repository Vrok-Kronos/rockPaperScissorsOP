//create variables named 'score' and 'highscore' to store points to declare a winner(2 points for win, 1 point for tie, 0 points for loss.)
let playerPoints = 0;
let computerPoints = 0;
let highscore = 0;

//create a variable to store user input named 'playerChoice' and prompt user for their choice of rock, paper, or scissors (case insensitive)
let playerChoice = prompt(`Please enter 'Rock', 'Paper', or 'Scissors' to play.`).toLowerCase();
console.log(playerChoice);

function computer_choice(choice) {
    let choiceArray = [`rock`, `paper`, `scissors`];
    choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice;
}
console.log(computer_choice());


//create a function named 'compare_choices' that compares the computer's to player's choice, and display a response to result of 'compare choices'
function compare_choices(p, c) {    

    p = playerChoice;
    c = computer_choice();
    
    if (p === `rock` && c === `rock`) {
        console.log(`It is a tie. Rock equals Rock`);
        playerPoints += 1;
        computerPoints += 1;

    } else if (p === `rock` && c === `paper`) {
        console.log(`You Lose. Paper Beats Rock`);
        playerPoints += 0;
        computerPoints += 2;

    } else if (p === `rock` && c === `scissors`) {
        console.log(`You Win. Rock beats Scissors`);
        playerPoints += 2;
        computerPoints += 0;

    } else if (p === `paper` && c === `rock`) {
        console.log(`You Win. Paper beats Rock`);
        playerPoints += 2;
        computerPoints += 0;

    } else if (p === `paper` && c === `paper`) {
        console.log(`It is a tie. Paper equals Paper`);
        playerPoints += 1;
        computerPoints += 1;

    } else if (p === `paper` && c === `scissors`) {
        console.log(`You Lose. Scissors Beats Paper`);
        playerPoints += 0;
        computerPoints += 2;

    } else if (p === `scissors` && c === `rock`) {
        console.log(`You Lose. Rock Beats Scissors`);
        playerPoints += 0;
        computerPoints += 2;

    } else if (p === `scissors` && c === `paper`) {
        console.log(`You Win. Scissors beats Paper`);
        playerPoints += 2;
        computerPoints += 0;

    } else if (p === `scissors` && c === `scissors`) {
        console.log(`It is a tie. Scissors equals Scissors`);
        playerPoints += 1;
        computerPoints += 1;

    } else {
        console.log(`You didn't enter in a valid option!`)
    }
}
console.log(compare_choices());

//use console.log to display results and score for each player after each round
console.log(`You have ${playerPoints} points, the computer has ${computerPoints} points.`)


//player with most points is declared winner.
