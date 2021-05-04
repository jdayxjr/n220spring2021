let txtExample = document.getElementById("txtExample");

let badWords = ["clear", "water", "tires"];

function findWord() {


    let lookingfor = "clear";

    for (let count = 0; count < badWords.length; count++) {
        if (badWords[count] == lookingfor) {
            console.log("found it at " + count);
        }


    }
}