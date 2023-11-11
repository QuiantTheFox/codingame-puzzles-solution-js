/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

function result(cell, x, y, entrance) {
    switch (cell) {
        case 2:
        case 6:
            entrance === "LEFT" ? x++ : x--;
            break;
        case 4:
            entrance === "TOP" ? x-- : y++;
            break;
        case 5:
            entrance === "TOP" ? x++ : y++;
            break;
        case 10:
            x--;
            break;
        case 11:
            x++;
            break;
        default:
            y++;
    }
    console.log(x, y);
}
let cell = [];
var inputs = readline().split(" ");
const W = parseInt(inputs[0]); // number of columns.
const H = parseInt(inputs[1]); // number of rows.
for (let i = 0; i < H; i++) {
    const LINE = readline(); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
    const array = LINE.split(" ");
    cell.push(array);
}
const EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

// game loop
while (true) {
    var inputs = readline().split(" ");
    const XI = parseInt(inputs[0]);
    const YI = parseInt(inputs[1]);
    const POS = inputs[2];

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    // One line containing the X Y coordinates of the room in which you believe Indy will be on the next turn.
    result(parseInt(cell[YI][XI]), XI, YI, POS);
}
