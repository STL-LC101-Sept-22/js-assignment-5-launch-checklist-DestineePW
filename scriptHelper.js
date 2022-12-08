// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(inputValue) {
  if (inputValue === "") {
    return "Empty";
  } else if (isNaN(inputValue)) {
    return "Not a Number";
  } else if (!isNaN(inputValue)) {
    return "Is a Number";
  }
}

function formSubmission(
  document,
  list,
  pilotName,
  copilotName,
  fuelLevel,
  cargoMass
) {
  let pilotNameValidationResponse = validateInput(pilotName);
  let copilotNameValidationResponse = validateInput(copilotName);
  let fuelLevelValidationResponse = validateInput(fuelLevel);
  let cargoMassValidationResponse = validateInput(cargoMass);

  if (
    pilotNameValidationResponse === "Empty" ||
    copilotNameValidationResponse === "Empty" ||
    fuelLevelValidationResponse === "Empty" ||
    cargoMassValidationResponse === "Empty"
  ) {
    alert("All fields are required");
  } else if (pilotNameValidationResponse === "Is a Number") {
    alert("Pilot Name cannot be a Number!");
  } else if (copilotNameValidationResponse === "Is a Number") {
    alert("Copilot Name cannot be a Number!");
  } else if (fuelLevelValidationResponse === "Not a Number") {
    alert("Fuel Level must be a Number!");
  } else if (cargoMassValidationResponse === "Not a Number") {
    alert("Cargo Mass must be a Number!");
  } else {
    document.getElementById("faultyItems").style.visibility = "visible";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
