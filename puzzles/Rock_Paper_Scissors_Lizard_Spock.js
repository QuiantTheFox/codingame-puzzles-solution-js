/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());

class User {
    constructor(numPlayer, signPlayer, countPlayer, opponent) {
        this.numPlayer = numPlayer;
        this.signPlayer = signPlayer;
        this.countePlayer = countPlayer;
        this.opponent = opponent;
    }
}
let userArray = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(" ");
    const NUMPLAYER = parseInt(inputs[0]);
    const SIGNPLAYER = inputs[1];
    userArray.push(new User(NUMPLAYER, SIGNPLAYER, 0, " "));
}

let indexArray = [];
function play(userArray, indexArray) {
    for (let i = 1; i < userArray.length; i += 2) {
        if (userArray[i - 1].signPlayer === userArray[i].signPlayer) {
            if (userArray[i - 1].numPlayer < userArray[i].numPlayer) {
                if (userArray[i - 1].opponent === " ") {
                    userArray[i - 1].opponent = userArray[i].numPlayer + "";
                } else {
                    userArray[i - 1].opponent += " " + userArray[i].numPlayer;
                }

                indexArray.push(i);
            } else {
                if (userArray[i].opponent === " ") {
                    userArray[i].opponent = userArray[i - 1].numPlayer + "";
                } else {
                    userArray[i].opponent += " " + userArray[i - 1].numPlayer;
                }
                indexArray.push(i - 1);
            }
        } else if (
            (userArray[i - 1].signPlayer === "C" &&
                userArray[i].signPlayer === "P") ||
            (userArray[i - 1].signPlayer === "P" &&
                userArray[i].signPlayer === "R") ||
            (userArray[i - 1].signPlayer === "R" &&
                userArray[i].signPlayer === "L") ||
            (userArray[i - 1].signPlayer === "L" &&
                userArray[i].signPlayer === "S") ||
            (userArray[i - 1].signPlayer === "S" &&
                userArray[i].signPlayer === "C") ||
            (userArray[i - 1].signPlayer === "C" &&
                userArray[i].signPlayer === "L") ||
            (userArray[i - 1].signPlayer === "L" &&
                userArray[i].signPlayer === "P") ||
            (userArray[i - 1].signPlayer === "P" &&
                userArray[i].signPlayer === "S") ||
            (userArray[i - 1].signPlayer === "S" &&
                userArray[i].signPlayer === "R") ||
            (userArray[i - 1].signPlayer === "R" &&
                userArray[i].signPlayer === "C")
        ) {
            if (userArray[i - 1].opponent === " ") {
                userArray[i - 1].opponent = userArray[i].numPlayer + "";
            } else {
                userArray[i - 1].opponent += " " + userArray[i].numPlayer;
            }
            indexArray.push(i);
        } else {
            if (userArray[i].opponent === " ") {
                userArray[i].opponent = userArray[i - 1].numPlayer + "";
            } else {
                userArray[i].opponent += " " + userArray[i - 1].numPlayer;
            }
            indexArray.push(i - 1);
        }
    }
}
function supprim(userArray, indexArray) {
    for (let i = indexArray.length - 1; i >= 0; i--) {
        userArray.splice(indexArray[i], 1);
    }
}

while (userArray.length > 1) {
    play(userArray, indexArray);
    supprim(userArray, indexArray);
    indexArray = [];
}
if (userArray.length === 1) {
    console.log(userArray[0].numPlayer);
    console.log(userArray[0].opponent);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
