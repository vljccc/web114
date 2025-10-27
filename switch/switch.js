let favMonth = prompt("What is your favorite month?")
favMonth = favMonth.toLowerCase()
if (isNaN(favMonth) == false) {
	console.log("Please enter a month, not numbers")
}
else {
	switch(favMonth) {
		case "january": 
			console.log("January is one of three months that begin with 'J'.") // a lot of month cases
			break
		case "february": 
			console.log("February is the only month that begins with 'F'.")
			break
		case "march": 
			console.log("March is one of two months that begin with 'M'.")
			break
		case "april": 
			console.log("April is one of two months that begin with 'A'.")
			break
		case "may": 
			console.log("May is one of two months that begin with 'M'.")
			break
		case "june": 
			console.log("June is one of three months that begin with 'J'.")
			break
		case "july": 
			console.log("July is one of three months that begin with 'J'.")
			break
		case "august": 
			console.log("August is one of two months that begin with 'A'.")
			break
		case "september": 
			console.log("September is the only month that begins with 'S'.")
			break
		case "october": 
			console.log("October is the only month that begins with 'O'.")
			break
		case "november": 
			console.log("November is the only month that begins with 'N'.")
			break
		case "december": 
			console.log("December is the only month that begins with 'D'.")
			break
		default:
			console.log("That's not a month I recognize. But:")
		}
	if (favMonth == "december" || favMonth == "january" || favMonth == "february") { // branches to check what season they like
	console.log("You love the winter months!")
	} else if (favMonth == "june" || favMonth == "july" || favMonth == "august") {
	console.log("You love the summer months!")
	} else {
	console.log("Other months are interesting too!")
	}
}

