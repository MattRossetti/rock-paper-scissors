let getComputerMove = () => {
    let val = random(3);
    let computerPlay;
    if (val == 0) {computerPlay = 'rock'}
    else if (val == 1) {computerPlay = 'paper'}
    else {computerPlay = 'scissors'}
    return computerPlay;
}

// let getComputerMove = () => {
//     let computerPlay;
//     switch(random(3)) {
//         case 0:
//             computerPlay = 'rock';
//             break;
//         case 1:
//             computerPlay = 'paper';
//             break;
//         case 2:
//             computerPlay = 'scissors';
//             break;
//     }
//     return computerPlay;
// }

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
    let result = `You played ${playerMove}.\nComputer played ${computerMove}.\n`;
    if (playerMove == computerMove) {
        result += 'The result is a tie!';
    }
    else if (playerMove == 'rock' && computerMove == 'scissors') {
        result+= 'Computer played scissors \nYou win! Rock crushes Scissors';
    }
    else if (playerMove == 'rock' && computerMove == 'paper') {
        result += 'Computer played paper \nYou lose :( Paper crushes Rock';
    }
    else if (playerMove == 'paper' && computerMove == 'rock') {
        result += 'Computer played rock \nYou win! Paper covers Rock';
    }
    else if (playerMove == 'paper' && computerMove == 'scissors') {
        result += 'Computer played scissors \nYou lose :( Scissors cuts Paper';
    }
    else if (playerMove == 'scissors' && computerMove == 'paper') {
        result += 'Computer played paper \nYou win! Scissors cuts Paper';
    }
    else if (playerMove == 'scissors' && computerMove == 'rock') {
        result += 'Computer Played rock \nYou lose :( Rock crushes Scissors'
    }
    return result
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
    let move = '';
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




/* ---------- Main ---------- */

console.log(playRound(getPlayerMove(), getComputerMove()))