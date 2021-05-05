

let colors = ["#fffcf8", "#ffc0cb", "#7e3f12"]


function setup() {

    createCanvas(400, 300)
    background(193, 202, 214)
    for (var count = 0; count < colors.length; count++) {
        fill(colors[count]);
        rect(50 * count, 50, 60, 50);

    }
}

