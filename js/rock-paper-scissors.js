let getComputerMove = () => {
    let val = random(3);
    let computerPlay;
    if (val == 0) {computerPlay = 'rock'}
    else if (val == 1) {computerPlay = 'paper'}
    else {computerPlay = 'scissors'}
    return computerPlay;
}

/* random is takes in an a number and returns a random number up to the input */
let random = (x) => {
    return Math.floor(Math.random() * x);
}

let playRound = (playerMove, computerMove) => {
    let result = `You played ${playerMove}.\nComputer played ${computerMove}.\n`;
    if (playerMove == computerMove) {
        result += 'The result is a tie!';
    }
    else if (playerMove == 'rock' && computerMove == 'scissors') {
        playerWins += 1;
        result += 'You win! Rock crushes Scissors';
    }
    else if (playerMove == 'rock' && computerMove == 'paper') {
        computerWins += 1;
        result += 'You lose :( Paper crushes Rock';
    }
    else if (playerMove == 'paper' && computerMove == 'rock') {
        playerWins += 1;
        result += 'You win! Paper covers Rock';
    }
    else if (playerMove == 'paper' && computerMove == 'scissors') {
        computerWins += 1;
        result += 'You lose :( Scissors cuts Paper';
    }
    else if (playerMove == 'scissors' && computerMove == 'paper') {
        playerWins += 1;
        result += 'You win! Scissors cuts Paper';
    }
    else if (playerMove == 'scissors' && computerMove == 'rock') {
        computerWins += 1;
        result += 'You lose :( Rock crushes Scissors'
    }
    console.log(playerWins, computerWins, result)
    return result;
}

let isRoundsValid = (min, max, number) => {
    if (Number.isInteger(number) && number >= min && number <= max) {
        return true
    }
    else {
        return false
    }
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
    roundsPrompt.textContent = 'First to how many rounds would you like to play?\n\nPlease enter a number between 1 and 10.\n\n';
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
    gameCommentary.setAttribute('id', 'gameCommentary')
    const movePrompt = document.createElement('h3');
    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');
    
    score.textContent = `The score is ${playerWins} to ${computerWins}`;
    score.setAttribute('id', 'score')
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
    if (playerWins === computerWins) return 'Tie game.'
    else if (playerWins > computerWins) return 'You are winning. suprisingly...'
    else return 'You are losing, try harder.'
}


let updateGameCommentary = (result) => {
    while (roundCommentContainer.firstChild) {
        roundCommentContainer.removeChild(roundCommentContainer.firstChild);
    }
    const score = document.getElementById('score');
    const roundCommentary = document.createElement('h3')
    score.textContent = `The score is ${playerWins} to ${computerWins}`;
    roundCommentary.textContent = result;
    roundCommentContainer.append(roundCommentary);
    const gameCommentary = document.getElementById('gameCommentary')
    gameCommentary.textContent = getGameCommentary();
}

let clearContent = () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

let winScreen = () => {
    clearContent();
    const winCommentary = document.createElement('h3');
    const playButtonWinScreen = document.createElement('button');
    winCommentary.setAttribute('style', 'white-space: pre');
    winCommentary.textContent = `Congrats! You have defeated the computer.\nThe final score was\nPlayer: ${playerWins} Computer: ${computerWins}\nWould you like to play again?`;
    playButtonWinScreen.textContent = 'Yes';
    playButtonWinScreen.setAttribute('id', 'playButtonWinScreen');
    content.appendChild(winCommentary);
    content.appendChild(playButtonWinScreen);
}

let loseScreen = () => {
    clearContent();
    const loseCommentary = document.createElement('h3');
    const playButtonLoseScreen = document.createElement('button');
    loseCommentary.setAttribute('style', 'white-space: pre')
    loseCommentary.textContent = `Uh-Oh, you have been defeated, better luck next time.\nThe final score was\nPlayer: ${playerWins} Computer: ${computerWins}\nWould you like to play again?`;
    playButtonLoseScreen.textContent = 'Yes';
    playButtonLoseScreen.setAttribute('id', 'playButtonLoseScreen');
    content.appendChild(loseCommentary);
    content.appendChild(playButtonLoseScreen);
}


let checkScores = () => {
    if (playerWins == rounds) winScreen();
    else if (computerWins == rounds) loseScreen();
}





/* ---------- Main ---------- */
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const body = document.querySelector('body');
const gameArea = document.querySelector('.gameArea');
const footer = document.querySelector('.footer');
const moveContainer = document.querySelector('.moveContainer');
const roundCommentContainer = document.querySelector('.roundCommentContainer');
const content = document.querySelector('.content');
let rounds = 0;
let playerWins = 0;
let computerWins = 0;


yesButton.addEventListener('click', clearYesNoButtons);
yesButton.addEventListener('click', askForRounds);
noButton.addEventListener('click', clearYesNoButtons);
noButton.addEventListener('click', noButtonResponse);

document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.id == 'playButton'){
        startGame();
    }
    else if (e.target.id == 'rockButton' || e.target.id == 'rockPic') {
        result = playRound('rock', getComputerMove());
        updateGameCommentary(result);
        checkScores();
    }
    else if (e.target.id == 'paperButton' || e.target.id == 'paperPic') {
        result = playRound('paper', getComputerMove());
        updateGameCommentary(result);
        checkScores();
    }
    else if (e.target.id == 'scissorsButton' || e.target.id == 'scissorsPic') {
        result = playRound('scissors', getComputerMove());
        updateGameCommentary(result);
        checkScores();
    }
    else if (e.target.id == 'playButtonLoseScreen' || e.target.id == 'playButtonWinScreen') {
        console.log('trying to reload')
        location.reload();
    }
});



