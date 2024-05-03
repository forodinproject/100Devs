//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ['abc', 'bad', 'batman'];
for (show in tvShows) {
	console.log(tvShows[show])
}
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = [];
for (num in nums) {
	if(nums[num] % 2 === 0) evenNums.push(nums[num])
}
console.log(evenNums)
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(arr) {
	let sorted = arr.sort((a, b) => a - b);
	console.log(sorted[1] + sorted[sorted.length - 2])
}

sumSecondLowAndHigh([2, 4, 7, 1, 90, 11, 12])