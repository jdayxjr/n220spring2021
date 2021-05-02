//Declared the variables to hold the card array data
var ArrayData = ['12', '12', '2', '2', '33', '33', '45', '45', '53', '53', '61', '61', '71', '71', '89', '89'];
var dataValue = [];
var DataCard_ids = [];
var CardsFlipped = 0;


//prototype to shuffle the array values
Array.prototype.memory_shuffle = function () {
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }

}
//finding the each cards matching card
function Card_Flip(cardSlot, value) {
    debugger;
    if (cardSlot.innerHTML == "" && dataValue.length < 2) {
        cardSlot.innerHTML = value;

        if (dataValue.length == 0) {
            dataValue.push(value);
            DataCard_ids.push(cardSlot.id);

        }

        else if (dataValue.length == 1) {
            dataValue.push(value);
            DataCard_ids.push(cardSlot.id);

            if (dataValue[0] == dataValue[1]) {
                CardsFlipped += 2;

                // Clearing the arrays

                dataValue = [];
                DataCard_ids = [];

                // Checking to see if the board has been cleared
                if (CardsFlipped == ArrayData.length) {


                }

            }


            else {

                function CardsFlipBack() {

                    // cards flip back over when wrong
                    var tile_1 = document.getElementById(DataCard_ids[0]);
                    var tile_2 = document.getElementById(DataCard_ids[1]);

                    tile_1.innerHTML = "";
                    tile_2.innerHTML = "";

                    // Clear both arrays

                    dataValue = [];
                    DataCard_ids = [];

                }

                setTimeout(CardsFlipBack, 700);

            }

        }

    }

}

//This method triggers when all elements inside the html loaded

function LoadElements() {

    ArrayData.memory_shuffle();
    var card = document.querySelectorAll(".card");

    //loop through cards put same listener on e

    for (var i = 0; i < card.length; i++) {
        card[i].setAttribute("id", "card_" + i + "_" + ArrayData[i]);

    }

}

//Dom listener to set the click event of card

document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (event.srcElement.className == 'card') {
            var idElement = event.srcElement.id.split("_");
            Card_Flip(event.srcElement, idElement[2]);

        };

    });

});