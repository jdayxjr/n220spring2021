//Part A**********************************************************


let stoplight = ["#F62727", "#E9ED30", "#00ff51"];

function setup() {
    createCanvas(600, 300);
    background(27, 28, 2);
}
function draw() {
    for (var count = 0; count < stoplight.length; count++) {
        fill(stoplight[count]);
        circle(100 + 190 * count, 140, 80);
    }
}
