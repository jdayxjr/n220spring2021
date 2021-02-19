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

