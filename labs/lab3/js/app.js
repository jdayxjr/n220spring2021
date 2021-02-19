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


