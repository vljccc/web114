// vyvian lillian 11/14

let username = prompt("Please enter your name.");

let totalGas = 0;
let weekCount = 0; //will increment this in the loop
let weeklyGasTotal = prompt("Enter your first weekly gas total, or enter -1 to end.");

function calcGasAvg() { //writing the code for the function to be called later

	while (weeklyGasTotal != -1 && isNaN(weeklyGasTotal) == false) { //following assignment page instructions for breaking loop (if -1)
		weeklyGasTotal = Number(weeklyGasTotal)
		totalGas = totalGas + weeklyGasTotal;
		console.log(totalGas)
		weekCount++; //incrementation
		console.log(weekCount)
		weeklyGasTotal = prompt("Enter another weekly gas total, or enter -1 to end.");
		
	} 

	let averageGas = (totalGas / weekCount);
	if (weekCount > 0) {
		return confirm(username + ", your average gas cost is " + averageGas);
	} else {
		averageGas = 0
		return confirm("We couldn't calculate an average gas cost for you.")
	}
}

calcGasAvg();

if (weekCount == 0) {
	confirm("You didn't enter any gas totals.");
} else if (weekCount == 1) {
	confirm("You entered one gas total.");
} else {
	confirm("You entered " + weekCount + " gas totals.");
} //code is similar to project page


