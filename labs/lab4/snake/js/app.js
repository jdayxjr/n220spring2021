//snake**********************************************************
let LastPos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function setup() {
    createCanvas(500, 400);
    background(193, 202, 214);
}

function draw() {
    LastPos.push(mouseX);
    LastPos.shift();

    for (var count = 0; count < LastPos.length; count++) {
        circle(LastPos[count], 150, 20);
    }
}
