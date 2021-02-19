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