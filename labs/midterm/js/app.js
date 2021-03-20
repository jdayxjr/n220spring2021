
function setup() {
    createCanvas(400, 300);
}

function draw() {

    //draws the background of the canvas and colors the canvas
    background(0, 171, 240);
    noFill();

    // this part of the code is the loop for the ten circles at the y-position

    for (var count = 0; count < 10; count++) {
        circle(0, mouseY, 100, mouseY);
    }

    // this part of the code basically is when the mouse is supposed to go downward When the mouse button is pressed down.

    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            circle(50, 50, 50, 50);
        }
        // pressed mouse goes left 
        //
        if (mouseButton === RIGHT) {
            circle(25, 25, 50, 50);

            // pressed mouse goes right 
        }
        if (mouseButton === CENTER) {
            circle(23, 75, 50, 20, 78, 75);
        }

        // pressed mouse goes center 
    }
}

