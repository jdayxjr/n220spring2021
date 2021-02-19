//Pyramid**********************************************************
let Numrows = 3;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200);
    fill(0, 140, 255);
    stroke(255, 255, 255);

    // for each row
    for (let Rows = 0; Rows <= Numrows; Rows++) {
        // for each column in the row
        for (let column = 0; column <= Rows; column++) {
            square(column * 50, Rows * 50, 50);
        }
    }
}
