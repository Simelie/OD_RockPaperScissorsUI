const btns = document.querySelectorAll('button');
const body = document.querySelector('body');
let score = document.querySelector(".score");

let cptUser = 0;
let cptComputer = 0;

btns.forEach(btn => btn.addEventListener('click', game));

function computerPlay(){
    const element = ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random() * element.length);
    return element[randomNumber];
}

function singleRound(computerSelection, playerSelection){
    if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) return `Equality!`;
    if (computerSelection === 'Rock' && playerSelection !== 'PAPER') return `You Lose! Rock beats ${playerSelection}`; 
    if (computerSelection === 'Paper' && playerSelection !== 'SCISSORS') return `You Lose! Paper beats ${playerSelection}`; 
    if (computerSelection === 'Scissors' && playerSelection !== 'ROCK') return `You Lose! Scissors beats ${playerSelection}`; 
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function game(e){

        const computerElement = computerPlay();
        const playerElement = e.target.id
        const res = singleRound(computerElement, playerElement);
        const resultat = document.createElement('div');
        resultat.innerText = res;
        body.appendChild(resultat);
        if (res.indexOf("Win") > -1) cptUser++;
        else if (res.indexOf("Lose")) cptComputer++;
        score.innerText = `${cptUser} - ${cptComputer}`;
}