//Part B**********************************************************


let xCircle = 0;
let yCircle = 0;

let rectX = 0;
let rectY = 180;
let rectW = 300;
let rectH = 20;

let xSpeed = 2;
let ySpeed = 2;




// sets the speed of the ball x and y

function setup() {
    createCanvas(300, 200);
}

function draw() {
    background(220);

    xCircle = xCircle + xSpeed;
    yCircle = yCircle + ySpeed;

    // makes the ball move ^^^ 


    if (xCircle > width || xCircle < 0) {
        xSpeed = xSpeed * -1;
        //multiply by negative one to alternate bt +/- 
        //this makes the ball bounce to each side
    }

    if (yCircle > height || yCircle < 0) {
        ySpeed = ySpeed * -1;

        //multiply by negative one to alternate bt +/- 
        //this makes the ball bounce to each side
    }

    fill(27, 86, 237);
    circle(xCircle, yCircle, 30);
    // draws the circle and the position of the ball 

    fill(86);
    rect(rectX, rectY, rectW, rectH, 30);
    // draws the rect and the position of the rect




    function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

        var colliding = false;

        if (circleX > rectX && circleX < rectX + rectW) {

            if (circleY > rectY && circleY < rectY + rectH) {


                return true;

            }

        }

        return false;

    }
}