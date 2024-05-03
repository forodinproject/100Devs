//Create a stopwatch object that has four properties and three methods
const stopwatch = {
	currentTime: 12,
	color: 'black',
	brand: 'expensive',
	shape: 'roundish',
	price: '$$$$$$$$',
	tellTime(time) {
		console.log(`current time is ${this.currentTime}`)
	},
	start: () => console.log("startinggggggg"),
	stop: () => console.log("stopingggggggg"),
	brag: () => console.log(`you can not afford. Its brand is ${this.brand} and the price, ufff it is ${this.price}`),
};