var myCircle = {
    r: 15,
    x: 20,
    y: 30,
    color: [156, 0, 250],
    update: function () {

        Fill(myCircle.color);
        myCircle.x += 2;
        xCircle(myCircle.x, myCircle.y, myCircle.r);
    }
}

function setup() {
    createCanvas(400, 300);
}



function draw() {
    myCircle.update();
}