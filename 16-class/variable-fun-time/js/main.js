//--- Easy
//create a variable and assign it a number

let num = 90;

//minus 10 from that number

let num1 = 90 - 10;

//print that number to the console
console.log(num1);

//--- Medium
//create a variable that holds a value from the input
let num2 = Number(prompt("enter a number"));
//add 25 to that number
let num3 = num2 + 25;

//alert that number
alert(num3);

//--- Hard
//create a variable that holds the h1

const h1 = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables

h1.addEventListener('click', sumNums);
function sumNums() {
    let result = num1 + num3;
    console.log(`value is ${result}`);
}
