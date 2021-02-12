//PUCK SIDE**********************************************************

// settting the size of the circle:
var radius = 20;

//setting the size of the canvas:

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(176, 171, 171);
  ellipse(mouseX, mouseY, radius, radius);
  fill(3, 115, 252);
}

// couldn't figure out how to make it change colors based on position

function draw() {
  background(176, 171, 171);
  ellipse(mouseX, mouseY, radius, radius);
  fill(252, 3, 3);
}

//WORLD WRAP******************************************************

var x = 0;
var y = 200;

var xspeed = 5;
var yspeed = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(166, 225, 255);

  x = x + xspeed;
  y = y + yspeed;

  fill(177, 46, 242);

  if (x > 800) {
    x = 0;

    console.log("greater than");
  }

  circle(x, y, 30);
}

// COUNTER *********************************************************
let counter = 0;
function draw() {
  counter = counter + 1;
  console.log(counter);
}
