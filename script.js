var getAllNumbers = document.getElementsByClassName("number");
var displayNumber = document.getElementById("display");
// need to remember the numbers
  var numberData = [];
// validates numbers need this because ima have a stop call and Call
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

for (var i = 0; i < getAllNumbers.length; i++) {
  // need to toggle the message when the phone is calling and not
  var getAllRows =  document.getElementById("numbers").querySelectorAll("div");
  console.log(getAllRows);
  var getAllPRows = document.getElementById("numbers").querySelectorAll("div p");
  var getPId = document.getElementById("deleteClass");
  numberData[i] = getAllNumbers[i].innerHTML;
  // need to add this so when the call is happenig, the number being pressed doesn't work
  getAllNumbers[i].value = getAllNumbers[i].innerHTML;
  console.log(getAllNumbers[i].value);

  getAllNumbers[i].addEventListener("click", function () {
    if (this.innerHTML === "end") {
      displayNumber.innerHTML = "";
      getPId.className = "hidden";

    for (var i = 0; i < getAllPRows.length; i++) {
      getAllPRows[i].className = "number";
    }
    for (var i = 0; i < getAllRows.length; i++) {
      // have to hard code it because the classnames are all different
      getAllRows[0].className = "first-row layout";
      getAllRows[1].className = "second-row layout";
      getAllRows[2].className = "thrid-row layout";
      getAllRows[3].className = "fourth-row layout";
    }
    // the info needed to be added to the in
    for (var i = 0; i < getAllNumbers.length; i++) {
      getAllNumbers[i].innerHTML = numberData[i];
      getAllNumbers[i].value = numberData[i];
  }
  }

  if (this.innerHTML === "call") {
    console.log("call is being clicked on");
    if (displayNumber.innerHTML.length === 8) {
      console.log("length is 8 my man")
      // have to make seperate for loops for specfic number in every array
      for (var i = 0; i < getAllNumbers.length; i++) {
        // used innerHTML because the value get deleted when it reaches 8 in length
        if (isNumeric(getAllNumbers[i].innerHTML) || getAllNumbers[i].innerHTML === 0) {
          console.log("call was pressed inside the if else these are the values " + getAllNumbers[i].value);
          getAllNumbers[i].innerHTML = "";
          getPId.className = "";
        }
      }
      for (var i = 0; i < getAllPRows.length; i++) {
        getAllPRows[i].className = "";
      }
      for (var i = 0; i < getAllRows.length; i++) {
        getAllRows[i].className = "";
      }
  }
}

    if (displayNumber.innerHTML.length === 3) {
      console.log(displayNumber.innerHTML.length);
      var addDash = displayNumber.innerHTML.split("");
      console.log(displayNumber.innerHTML.split(""));
      addDash.splice(3, 0, "-");
      display.innerHTML = addDash.join("");
    }

    if (displayNumber.innerHTML.length === 8) {
      console.log("8 has been reached");
      for (var i = 0; i < getAllNumbers.length; i++) {
        console.log(isNumeric(getAllNumbers[i].value) + " this is the one being checked " + getAllNumbers[i].value);
        if (isNumeric(getAllNumbers[i].value) || getAllNumbers[i].value === 0) {
          getAllNumbers[i].value = "";

        }
    }
  }
  if (isNumeric(this.value)) {
    displayNumber.innerHTML += this.value;
  }
  });
}
