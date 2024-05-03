//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenNums(arr) {
	let evenArr = [];
	for (el of arr) {
		if (el % 2 === 0) {
			evenArr.push(el)
		}
	};
	console.log(evenArr);
	
}