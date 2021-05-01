var circles = [

    { x: 100, y: 100, r: 5 },
    { x: 100, y: 100, r: 5 },
    { x: 100, y: 100, r: 5 }
]

function setup() {
    createCanvas(400, 300);
    noStroke();
    fill(200);
}



function draw() {

    for (var count = 0; count < circles.length; count++) {

        let currentCircle = circles[count];
        circle(currentCircle.x, currentCircle.y, currentCircle.r);
        currentCircle.y += 2;


        if (currentCircle.y > 300) {
            currentCircle.y = 0;
            currentCircle.x = Math.random() * 400;
            fill(Math.random() * 255);
        }
    }

}