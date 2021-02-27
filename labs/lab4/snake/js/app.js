//snake**********************************************************
let LastPos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function setup() {
    creatCanvas(500, 400);
}

function draw() {
    background();
    LastPos.push(mouseX);
    LastPos.shift();

    for (var count = 0; count < LastPos.length; count++) {
        circle(LastPos[count], 150, 20);
    }
}
