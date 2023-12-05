/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
const array = [];
let code;
for (i in MESSAGE) {
    code = MESSAGE.charCodeAt(i);
    array.push(code);
}

const newArray = array
    .map((e) => e.toString(2))
    .map((e) => {
        if (e.length === 7) {
            return e;
        } else {
            return "0" + e;
        }
    });

let string = "";
for (let i = 0; i < newArray.length; i++) {
    const binaryArray = newArray[i].toString().split("");
    for (j of binaryArray) {
        string += j;
    }
}

const oneRegex = /[1]/;
const zeroRegex = /[0]/;

const oneArray = string.split("0").filter((e) => e.match(oneRegex));
const zeroArray = string.split("1").filter((e) => e.match(zeroRegex));

let joinArray = [];

const zeroStartRegex = /^0/;
const oneStartRegex = /^1/;

if (zeroArray.length === oneArray.length) {
    for (i in oneArray) {
        if (string.match(zeroStartRegex)) {
            joinArray.push(zeroArray[i], oneArray[i]);
        } else {
            joinArray.push(oneArray[i], zeroArray[i]);
        }
    }
} else if (zeroArray.length > oneArray.length) {
    for (i in zeroArray) {
        if (i === zeroArray.length - 1 + "") {
            joinArray.push(zeroArray[i]);
        } else {
            if (string.match(zeroStartRegex)) {
                joinArray.push(zeroArray[i], oneArray[i]);
            } else {
                joinArray.push(oneArray[i], zeroArray[i]);
            }
        }
    }
} else {
    for (i in oneArray) {
        if (i + "" === oneArray.length - 1 + "") {
            joinArray.push(oneArray[i]);
        } else {
            if (string.match(oneStartRegex)) {
                joinArray.push(oneArray[i], zeroArray[i]);
            } else {
                joinArray.push(zeroArray[i], oneArray[i]);
            }
        }
    }
}

let result = "";

for (i in joinArray) {
    if (joinArray[i].match(oneRegex)) {
        if (result === "") {
            result += "0 " + "0".repeat(joinArray[i].length);
        } else {
            result += " 0 " + "0".repeat(joinArray[i].length);
        }
    } else {
        if (result === "") {
            result += "00 " + "0".repeat(joinArray[i].length);
        } else {
            result += " 00 " + "0".repeat(joinArray[i].length);
        }
    }
}

console.log(result);
