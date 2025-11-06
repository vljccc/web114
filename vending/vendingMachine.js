let snackCount = prompt("How many snacks do you want?");
if (snackCount === null) {
  console.log("No snacks requested. Exiting.");
}
if (isNaN(snackCount) == true) {
	console.log("The vending machine only accepts number input, please refresh and try again.") // validating input
}
snackCount = Number(snackCount)
if (snackCount == 0) {
	console.log("It's okay to change your mind sometimes.");
}
let snackTotal = 0
for (let i = 1; i <= snackCount; i++) {
	let snack = prompt("Enter snack #" + i + " name:");
	if (snack === null) {
	  	console.log("Snack selection canceled. Exiting.");
	  	break; // stop the loop immediately
	}
	console.log("Snack #" + i + ": " + snack + " given to customer");
	if (i % 2 === 0) { // you can give a bonus every third or fifth snack if you changed the code to i % 3 or i % 5
		console.log("You got a bonus snack!");
	}
	snackTotal++
}
if (snackCount >= 1) console.log("Finished dispensing. Number of snacks dispensed: " + snackTotal)
