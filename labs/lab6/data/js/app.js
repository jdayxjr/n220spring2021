var myCircle = {
    r: 15,
    x: 20,
    y: 30,
    color: [156, 0, 250]
}

function setup() {
    createCanvas(400, 300);
}



function draw() {
    Fill(myCircle.color);
    circle(myCircle.x, myCircle.y, myCircle.r);
}