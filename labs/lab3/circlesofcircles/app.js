//Circles inisde of Circles**********************************************************
function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(92, 181, 65);
    noFill();

    // for loop
    for (var count = 0; count < 25; count++) {
        circle(100, 100, count * 20);
    }
}
