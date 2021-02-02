// the variables...
// let b = color('blue');
// let g = color('green');
// let r = color('red');

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(500);

  let b = color("lightblue");

  //fill the shape with color
  fill(b);
  // the shape length and width and type

  rect(100, 100, 100, 100);

  let g = color("purple");

  fill(g);

  circle(50, 50, 50);

  let r = color("pink");
  fill(r);
  rect(50, 200, 50, 200);
}
