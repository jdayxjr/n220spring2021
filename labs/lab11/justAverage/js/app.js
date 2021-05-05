let txtExample = document.getElementById("txtExample");


function calcScores() {

    var stringVals = txtExample.value;

    let myArray = stringVals.split(" ");


    // reduce

    let sum = 0;

    for (let count = 0; count < myArray.length; count++) {

        sum += Number(myArray[count]);
    }

    console.log(sum);
}