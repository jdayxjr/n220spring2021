// this part of the function adds 100 px to the height of the greenbox div
function GreenBoxH() {

    var currentHeight = document.getElementById('green').style.height;

    currentHeight = currentHeight.replace('px', '');

    document.getElementById('green').style.height = (parseInt(currentHeight) + 100).toString() + "px";



}

// this part of the function adds 100 px to the width of the greenbox div
function GreenBoxW() {

    var currentWidth = document.getElementById('green').style.width;

    currentWidth = currentWidth.replace('px', '');

    document.getElementById('green').style.width = (parseInt(currentWidth) + 100).toString() + "px";
}