document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  const today = day.toLowerCase();

  if (today === "sunday" || today === "saturday") {
    document.querySelector("#placeToSee").innerText = "Weekend";
  }
  else if (today === "tuesday" || today === "thursday") {
    document.querySelector("#placeToSee").innerText = "Class";
  }
  else if (today === "monday" || today === "wednesday" || today === "friday") {
    document.querySelector("#placeToSee").innerText = "Boring";
  }
}
