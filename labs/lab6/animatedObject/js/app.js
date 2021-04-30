var myCircle = {
    x: 20,
    y: 30,
    color: [156, 0, 250]

}

function setup() {
    createCanvas(400, 300);
}



function draw() {

    fill(myCircle.color);
    myCircle.x += 2;
    circle(myCircle.x, myCircle.y, 15);
}