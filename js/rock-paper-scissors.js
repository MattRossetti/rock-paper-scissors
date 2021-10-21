let getComputerMove = () => {
    let val = random(3);
    let computerPlay;
    if (val == 0) {computerPlay = 'rock'}
    else if (val == 1) {computerPlay = 'paper'}
    else {computerPlay = 'scissors'}
    return computerPlay;
}

/* logger was written to check that random function was working, it is :) */
let logger = (x) => {
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    for (let i = 0; i < x; i++) {
        val = computerPlay()
        if (val == 'rock') {cnt1 += 1}
        else if (val == 'paper') {cnt2 += 1}
        else {cnt3 += 1}
    }
    const vals = [cnt1, cnt2, cnt3];
    return vals;
}

/* random is takes in an a number and returns a random number up to the input */
let random = (x) => {
    return Math.floor(Math.random() * x);
}

let playRound = (playerMove, computerMove) => {
    let resultArr = []
    resultArr[1] = `You played ${playerMove}.\nComputer played ${computerMove}.\n`;
    if (playerMove == computerMove) {
        resultArr[0] = '0'
        resultArr[1] += 'The resultArr is a tie!';
    }
    else if (playerMove == 'rock' && computerMove == 'scissors') {
        resultArr[0] = '1';
        resultArr[1] += 'You win! Rock crushes Scissors';
    }
    else if (playerMove == 'rock' && computerMove == 'paper') {
        resultArr[0] = '2';
        resultArr[1] += 'You lose :( Paper crushes Rock';
    }
    else if (playerMove == 'paper' && computerMove == 'rock') {
        resultArr[0] = '1';
        resultArr[1] += 'You win! Paper covers Rock';
    }
    else if (playerMove == 'paper' && computerMove == 'scissors') {
        resultArr[0] = '2';
        resultArr[1] += 'You lose :( Scissors cuts Paper';
    }
    else if (playerMove == 'scissors' && computerMove == 'paper') {
        resultArr[0] = '1';
        resultArr[1] += 'You win! Scissors cuts Paper';
    }
    else if (playerMove == 'scissors' && computerMove == 'rock') {
        resultArr[0] = '2';
        resultArr[1] += 'You lose :( Rock crushes Scissors'
    }
    console.log('playing')
    console.log(resultArr[1], resultArr[2])
    return resultArr
}

/* dev function to check playRound */
let roundTester = () => {
    playerMoves = ['rock', 'paper', 'scissors'];
    compMoves = ['rock', 'paper', 'scissors'];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(playRound(playerMoves[i], compMoves[j]));
        }
    }
}


let getPlayerMove = () => {
    let move;
    const valid = ['rock', 'paper', 'scissors'];
    let first = true;
    popUpText = 'What is your move? Rock, Paper, or Scissors?'
    while (valid.includes(move) != true) {
        move = window.prompt(popUpText).toLowerCase();
        if (first == true) {
            popUpText = 'Invalid entry, only "Rock", "Paper", or "Scissors" allowed. Please try again.'
            first = false
        }
    }
    return move;
}

let isRoundsValid = (min, max, number) => {
    if (Number.isInteger(number) && number >= min && number <= max) {
        return true
    }
    else {
        return false
    }
}

let getWinRounds = () => {
    let max = 10;
    let min = 1;
    let first = true;
    popUpText = 'Please enter the amount of wins you would like to play.\nNumber of rounds must be a whole number between 1 and 10.';
    let input = parseFloat(window.prompt(popUpText));
    while (isRoundsValid(min, max, input) != true) {
        if (first == true) {
            popUpText = 'Please try again...\n' + popUpText
            first = false;
        }
        input = parseFloat(window.prompt(popUpText));

    }
    return input
}


let playGame = (winRounds) => {
    let playerWins = 0;
    let computerWins = 0;
    let winner = 0;
    let gameText;
    let score;
    while (true) {
        resultArr = playRound(getPlayerMove(), getComputerMove())
        if (resultArr[0] == '1') {playerWins += 1}
        else if (resultArr[0] == '2') {computerWins += 1}
        if (playerWins == winRounds) {
            winner = 1;
        }
        else if (computerWins == winRounds) {
            winner = 2;
        }
        score = `Player: ${playerWins}\nComputer: ${computerWins}`
        if (winner != 0) {break;}

        console.log(resultArr[1])
        console.log(score)


    }
    if (winner == 1) {gameText = 'Congrats, you have won!\n'}
    else {gameText = 'Sorry, you have lost :('}    
    gameText += `Final score is...\n${score}`
    return gameText
}

let clearYesNoButtons = () => {
    const buttonContainer = document.querySelector('.buttonContainer');
    buttonContainer.remove()
}

let noButtonResponse = () => {
    const noButtonText = document.createElement('h3');
    noButtonText.setAttribute('style', 'white-space: pre')
    noButtonText.textContent = `Okay.\n\nHave a nice Day then.`;
    gameArea.appendChild(noButtonText);
}
{/* <input type="number" placeholder="Rounds" min="1" max="10" id="roundInput"></input> */}
let askForRounds = () => {
    const roundsPrompt = document.createElement('h3');
    const roundsInput = document.createElement('input');
    const playButton = document.createElement('button');
    playButton.addEventListener('click,', function () {
        console.log(1);
    });
    roundsPrompt.setAttribute('style', 'white-space: pre');
    roundsPrompt.textContent = 'How many rounds would you like to play?\n\nPlease enter a number between 1 and 10.\n\n';
    roundsInput.setAttribute('type', 'number');
    roundsInput.setAttribute('placeholder', 'Rounds')
    roundsInput.setAttribute('min', '1')
    roundsInput.setAttribute('max', '10')
    roundsInput.setAttribute('id', 'roundsInput');
    roundsInput.setAttribute('value', '5')
    playButton.classList.add('playButton')
    playButton.setAttribute('id', 'playButton')
    playButton.textContent = 'Play!'
    gameArea.appendChild(roundsPrompt);
    gameArea.appendChild(roundsInput);
    gameArea.appendChild(playButton);
}

let startGame = () => {
    rounds = parseInt(document.getElementById('roundsInput').value)
    valid = isRoundsValid(1, 10, rounds);
    console.log(valid)

    if (valid == false) {
        alert('Number of rounds not Valid, please try again');
        return;
    }

    while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild);
    }
    buildPlayArea();
}

let buildPlayArea = () => {
    // updateGameScores()
    const score = document.createElement('h3');
    const gameCommentary = document.createElement('h5');
    const movePrompt = document.createElement('h3');
    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');
    
    score.textContent = `the score is ${playerWins} to ${computerWins}`;
    gameCommentary.textContent = getGameCommentary();
    movePrompt.textContent = 'What is your next move?'


    rockButton.setAttribute('class', 'picButton');
    rockButton.setAttribute('id', 'rockButton');
    const rockPic = document.createElement('img');
    rockPic.setAttribute('id', 'rockPic');
    rockPic.setAttribute('src','imgs/rock.png')
    rockPic.setAttribute('alt', 'Rock')
    rockButton.appendChild(rockPic);

    paperButton.setAttribute('class', 'picButton');
    paperButton.setAttribute('id', 'paperButton');
    const paperPic = document.createElement('img');
    paperPic.setAttribute('id', 'paperPic');
    paperPic.setAttribute('src','imgs/paper.png');
    paperPic.setAttribute('alt', 'Paper');
    paperButton.appendChild(paperPic)

    scissorsButton.setAttribute('class','picButton');
    scissorsButton.setAttribute('id', 'scissorsButton');
    const scissorsPic = document.createElement('img');
    scissorsPic.setAttribute('id', 'scissorsPic');
    scissorsPic.setAttribute('src', 'imgs/scissors.png');
    scissorsPic.setAttribute('alt', 'Scissors');
    scissorsButton.appendChild(scissorsPic);
    
    gameArea.appendChild(score);
    gameArea.appendChild(gameCommentary);
    gameArea.appendChild(movePrompt);
    moveContainer.appendChild(rockButton);
    moveContainer.appendChild(paperButton);
    moveContainer.appendChild(scissorsButton);
}

let getGameCommentary = () => {
    if (playerWins == computerWins) return 'tie game.'
    else if (playerWins > computerWins) return 'You are winning. suprisingly...'
    else return 'You are losing, try harder.'
}



/* ---------- Main ---------- */
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const body = document.querySelector('body');
const gameArea = document.querySelector('.gameArea');
const footer = document.querySelector('.footer');
const moveContainer = document.querySelector('.moveContainer')
let rounds = 0;
let currentRound = 0;
let playerWins = 0;
let computerWins = 0;


yesButton.addEventListener('click', clearYesNoButtons);
yesButton.addEventListener('click', askForRounds);
noButton.addEventListener('click', clearYesNoButtons);
noButton.addEventListener('click', noButtonResponse);

document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.id == 'playButton') startGame();
    else if (e.target.id == 'rockButton' || e.target.id == 'rockPic') {
        playRound('rock', getComputerMove());
    }
    else if (e.target.id == 'paperButton' || e.target.id == 'paperPic') {
        playRound('paper', getComputerMove());
    }
    else if (e.target.id == 'scissorsButton' || e.target.id == 'scissorsPic') {
        playRound('scissors', getComputerMove());
    }
});



