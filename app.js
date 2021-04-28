function computerPlay(){
    const element = ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random() * element.length);
    return element[randomNumber];
}

function playerSelection(){
    let choix = '';
    while(choix !== 'ROCK' && choix !== 'PAPER' && choix !== 'SCISSORS'){
        choix = prompt("Rock, paper or scissors ?").toUpperCase();
    }
    return choix;
}

function singleRound(computerSelection, playerSelection){
    if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) return `Equality!`;
    if (computerSelection === 'Rock' && playerSelection !== 'PAPER') return `You Lose! Rock beats ${playerSelection}`; 
    if (computerSelection === 'Paper' && playerSelection !== 'SCISSORS') return `You Lose! Paper beats ${playerSelection}`; 
    if (computerSelection === 'Scissors' && playerSelection !== 'ROCK') return `You Lose! Scissors beats ${playerSelection}`; 
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function game(){
    
    let cptUser = 0;
    let cptComputer = 0;
    for (let i = 0; i < 5; i++){
        const computerElement = computerPlay();
        const playerElement = playerSelection();
        const res = singleRound(computerElement, playerElement);
        console.log(res);
        if (res.indexOf("Win") > -1) cptUser++;
        else if (res.indexOf("Lose")) cptComputer++;
    }
    if (cptUser > cptComputer) console.log(`You WIN the game!!! ${cptUser} - ${cptComputer}`);
    if (cptComputer > cptUser) console.log(`You LOSE the game!!! ${cptUser} - ${cptComputer}`);
    else console.log("Equality");
}
game();