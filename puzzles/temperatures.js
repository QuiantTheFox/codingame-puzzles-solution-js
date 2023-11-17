/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(" ");
const array = [];

for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    array.push(t);
}

function bubbleSort(array) {
    let tmp;
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i <= array.length - j; i++) {
            if (array[i] > array[i + 1]) {
                tmp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}
const negative = bubbleSort(array.filter((e) => e < 0));
const positive = bubbleSort(array.filter((e) => e > 0));
// console.log(negative)
// console.log(positive)

if (negative.length === 0 && positive.length === 0) {
    console.log(0);
} else if (negative.length > 0 && positive.length > 0) {
    positive[0] > Math.abs(negative[negative.length - 1])
        ? console.log(negative[negative.length - 1])
        : console.log(positive[0]);
} else if (negative.length === 0) {
    console.log(positive[0]);
} else {
    console.log(negative[negative.length - 1]);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
