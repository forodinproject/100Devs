// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday;
favHoliday = "SUNDAY";
console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let myStr = "Hello Leon";
console.log(myStr.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFiveAndAbs(n1, n2, n3, n4, n5) {
	let diff = 100 - n1 - n2 - n3 - n4 - n5;
	return Math.abs(diff);
}



// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function logLowestAndHighest(n1, n2, n3) {
	let min = Math.min(n1, n2, n3);
	let max = Math.max(n1,n2,n3);
	console.log(`Lowest number is ${min} and highest is ${max}`)
}


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
	let result = Math.random();
	if (result < 0.5)return 'heads'
	return 'tails'
}

console.log(headsOrTails());
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function logTimes(x) {
	for (let i = 0; i < x; i++) {
	console.log(headsOrTails());
	}
}

logTimes(5)