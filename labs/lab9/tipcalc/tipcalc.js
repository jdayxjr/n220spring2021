let total = document.getElementById("total");

function tipNtotal() {
    let bill = Number(total.value);
    let tip = .15 * bill;

	console.log(" Your total bill for today is  $" + bill + ", And tip is $" + tip );
}
