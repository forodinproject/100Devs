//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else{
//     console.log("BORING")
//   }

// }
const check = document.querySelector("#check");
check.addEventListener('click', run);

function run() {
  const day = document.querySelector("#day").value.toLowerCase();
  const placeToSee = document.querySelector("#placeToSee");
  if (day === "thursday" || day === "tuesday") {
    placeToSee.innerHTML = "You Have A Class";
  }
  else if (day === "saturday" || day === "sunday") {
    placeToSee.innerHTML = "It's a Weekend";
  }
  else if (day === "wednesday") {
    placeToSee.innerHTML = "Hump Day";
  }
  else placeToSee.innerHTML = "Boring";


}















