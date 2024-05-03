
const h1 = document.querySelector('h1');
h1.addEventListener('click', toPara);

function toPara() {
    const para = document.querySelector('p');
    const age = Number(document.querySelector('#danceDanceRevolution').value);
    //If under 16, tell them they can not drive
    if (age < 16) {
        console.log("You are not eligible to drive");
    }
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if (age < 18) {
        console.log(`Don't try clubs`);
    }
    //If under 21, tell them they can not drink
    else if (age < 21) {
        console.log(`Soft drink is all you get`);
    }
    //If under 25, tell them they can not rent cars affordably
    else if (age < 25) {
        console.log('rent a car coz you can not afford any');
    }
    //If under 30, tell them they can not rent fancy cars affordably
    else if (age < 30) {
        console.log('no fancy cars for you');
    }
    //If under over 30, tell them there is nothing left to look forward too
    else if (age >= 30) {
        console.log("don't waste time. Nothing left now");
    }
    para.innerText = "Hi";

}

//Place the result of the conditional in the paragraph
