var ball = {
    x: 100,
    y: 100,
    velocityX: 2,
    velocityY: 2,
    update: function () {
        noFill();
        stroke(255, 238, 130);
        circle(this.x, this.y, 10);
        this.x += this.velocityX;
        this.y += this.velocityY;
    },
};

//this portion of the code is the ball start off by setting var to ball and its position with x and y.
//velocity x is the speed of the ball going horizontal and velocity y is the speed vertically
//in the game the ball isnt filled because in the code noFill(); doesnt fill.
//in the next portion the function is updated to the ball moving 10 y instead of 2.

var paddle = {
    x: 100,
    y: 350,
    w: 150,
    h: 20,
    update: function () {
        noFill();
        stroke(143, 251, 255);
        rect(this.x, this.y, this.w, this.h);
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 2;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 2;
        }
    },
};

// in this portion of the code this is the properties of the paddle
// giving it a width of 150px and height of 20px and its starting position (x 100,y 350)
// paddle doesnt have a fill in game becuase of noFill is which doesnt fill the paddle var.
// the rect or the shape of the paddle on this line were giving it the properties we defined eariler for the paddle
//using if statements to get the user input on the paddle and way its going to move when the button is pressed (arrow keys) -= meaning left and the += meaning right
var blocks = [];

for (var i = 0; i < 6; i++) {
    blocks[i] = { x: i * 60, y: 10 };
}
// this part of the code is the array for the block that the ball hits during the game
// for loop is running to display how many blocks there are which is 6

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(70);

    ball.update();
    paddle.update();

    //assuming these update the propertes of ball and paddle as the game goes on.

    if (ball.x > 400) {
        ball.x = 400;
        ball.velocityX *= -1;
    }

    if (ball.x < 0) {
        ball.x = 0;
        ball.velocityX *= -1;
    }

    if (ball.y < 0) {
        ball.y = 0;
        ball.velocityY *= -1;
    }
    // somewhere it this if the ball goes off the canvas of the game the values representing the canvas and the position of the ball depending on this position of the ball will determine if it will either bounce off the side of the wall or if it hits the bottom of the canvas goes off the page.

    if (hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h)) {
        ball.velocityY *= -1;
    }

    //here guessing that if the ball hits the paddle during the game the Y velocity of the ball is decreased by 1 briefly

    for (var i = 0; i < blocks.length; i++) {
        var b = blocks[i];
        rect(b.x, b.y, 60, 20);
        //displaying the blocks during the game getting the information from the array blocks[];

        if (hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
            ball.velocityY *= -1;
            // this code is similar to the one above but still shows the ball velocity Y speed is being drecreased to 1 briefly when coming into contact with the blocks that are being displayed.

            //remove block from array
            blocks.splice(i, 1);
        }
    }
}

function hitTestPoint(px, py, bx, by, bw, bh) {
    if (px > bx && px < bx + bw) {
        if (py > by && py < by + bh) {
            return true;
        }
    }

    return false;
}

  //px and py are the paddles bx and by is the ball and bw and bh is the block its running a if statement to verify the positions of each.
