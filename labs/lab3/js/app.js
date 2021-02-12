//FizzBuzz**********************************************************

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(110, 110, 110);
  noFill();

  // for loop
  for (var count = 0; count < 25; count++) {
    circle(count * 30, 100, 200);
  }
}

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
