// *Variables*
// Create a variable and console log the value

const value = 10;
console.log(value);

// Create a variable, add 10 to it, and alert the value

const addTo = 10;
const addResult = 10 + addTo
alert(`variable + 10 is ${addResult}`);


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractNumbers() {
    const result = 11 - 5 - 3 - 1;
    alert(`11 - 5 - 3 - 1 = ${result}`);
}
subtractNumbers();
// Create a function that divides one number by another and returns the remainder
function findReminder() {
    const remainder = 10 % 3;
    return console.log(remainder);

}
findReminder();
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function isGreaterThan50() {
    sum = 110 + 20;
    if (sum > 50) {
        alert("Jumanji");
    }
}
isGreaterThan50();

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function isMultipleOf3() {
    result = 12 % 3;
    if (result === 0) {
        alert("ZEBRA");
    }
}
isMultipleOf3();