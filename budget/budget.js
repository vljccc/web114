//vyvian lillian

let income = 10000
let rent = 1000
let grocery = 100
let utilities = 100
let candles = 100000000
let totalExpenses = rent + grocery + utilities
let remainingMoney = income - totalExpenses
let rentPercent = (rent / income) * 100
let groceryPercent = (grocery / income) * 100
console.log( "The total income was: " +   income.toLocaleString("en-US", {style: "currency", currency: "USD", }))
console.log( "The grocery total was: " +  grocery.toLocaleString("en-US", { style: "currency", currency:"USD" }))
console.log("The rent total was: "  +   rent.toLocaleString("en-US", { style: "currency", currency:"USD" }))
console.log("the percent spent on groceries was: " + groceryPercent + "%")
console.log("the percent spent on rent was: " + rentPercent + "%")