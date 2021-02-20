//Neapolitan**********************************************************

let arrayColors = ["#0099ff", "#e600ff", "#00ff51"];

function setup() {
    createCanvas(500, 400);
    background(145, 242, 255);
}
function draw() {
    for (var count = 0; count < arrayColors.length; count++) {
        fill(arrayColors[count]);
        rect(80 + 100 * count, 80, 80);
    }
}