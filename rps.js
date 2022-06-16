//Computer's Function
function computerPlay(){
    const choices = ['Rock', 'Paper', 'Scissors'];

    const computerSelection = choices[Math.floor(Math.random()*choices.length)];

    if (computerSelection === 'Rock');

    else if (computerSelection === 'Paper'); 

    else if (computerSelection === 'Scissors'); 
    console.log(computerSelection)
    return computerSelection;
}
computerPlay()

//Player's Selection
function playerSelection(){
    const choices = ['Rock', 'Paper', 'Scissors'];

    const hostSelection = choices[Math.floor(Math.random()*choices.length)];

    if (hostSelection === 'Rock');

    else if (hostSelection === 'Paper');

    else if (hostSelection === 'Scissors');
    console.log(hostSelection)
    return hostSelection;
    
}
playerSelection()

function playRound(hostSelection, computerSelection) {
    const replies = ['You Win!', 'You lose!', 'Its a tie!'];
//Rock
    if(hostSelection === 'Rock' && computerSelection === 'Scissors') {
        return replies[0]
    }
    else if (hostSelection === 'Paper' && computerSelection === 'Rock') {
        return replies[0];
    }
    else if (hostSelection === 'Scissors' && computerSelection === 'Paper') {
        return replies[0];
    }  
    else if (hostSelection === 'Rock' && computerSelection === 'Paper') {
        return replies[1];
    }
    else if (hostSelection === 'Scissors' && computerSelection === 'Rock') {
        return replies[1];
    }
    else if (hostSelection === 'Paper' && computerSelection === 'Scissors') {
        return replies[1];
    }
    else if (hostSelection === 'Rock' && computerSelection === 'Rock') {
        return replies[2];
    }
    else if (hostSelection === 'Scissors' && computerSelection === 'Scissors') {
        return replies[2];
    }
    else if (hostSelection === 'Paper' && computerSelection === 'Paper') {
        return replies[2];
    }
    
}
playRound();



    
