let Word = document.getElementById("Word");

let badWords = ["clear", "water", "tires"];

function findWord() {


    let lookingfor = "clear";

    for (let count = 0; count < badWords.length; count++) {
        if (badWords[count] == lookingfor) {
            dvFound.innerHTML = "found " + count;
        }


    }
}