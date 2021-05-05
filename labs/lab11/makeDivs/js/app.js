let txtExample = document.getElementById("txtExample");
let dvFound = document.getElementById("dvFound");

let objects = [

    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },

    { color: "#ff0000", height: 300, width: 100 },

];


function makeDivs() {


    for (var count = 0; count < objects.length; count++) {

        let newEL = document.createElement("div");
        newEL.innerHTML = objects[count].color + ": " + objects[count].height + ": " + objects[count].width;
        dvFound.appendChild(newEL);
    }
}