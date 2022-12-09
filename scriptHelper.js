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
  console.log(document, name, diameter, star, distance, moons, imageUrl);

  //This function should make the destination information of the chosen planet appear in mission target div.
  document.getElementById(
    "missionTarget"
  ).innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance} </li>
      <li>Number of Moons: ${moons} </li>
    </ol>
    <img src="${imageUrl}"/>`;
  // I want to change mission target. innerHTML to reflect the data from chosen planet

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
    list.style.visibility = "visible";
    //dynamically update the text of the element with ID pilot Status
    document.getElementById(
      "pilotStatus"
    ).innerHTML = `Pilot ${pilotName} is ready for launch.`;
    document.getElementById(
      "copilotStatus"
    ).innerHTML = `Co-Pilot ${copilotName} is ready for launch.`;
  }

  //LaunchStatus should change to red and not ready to launch
  let launchStatusUpdate = document.getElementById("launchStatus");
  let fuelStatusUpdate = document.getElementById("fuelStatus");
  let cargoStatusUpdate = document.getElementById("cargoStatus");

  //I want to update the fuel level to appear with a message when the user inputs a number lower than 10,000
  if (fuelLevel < 10000) {
    fuelStatusUpdate.innerHTML = "Fuel level too low for launch";
    launchStatusUpdate.innerHTML = "Shuttle not ready for launch";
    launchStatusUpdate.style.color = "red";
  } else if (10000 < cargoMass) {
    cargoStatusUpdate.innerHTML = "Cargo mass too heavy for launch";
    launchStatusUpdate.innerHTML = "Shuttle not ready for launch";
    launchStatusUpdate.style.color = "red";
  } else {
    fuelStatusUpdate.innerHTML = "Fuel level high enough for launch";
    cargoStatusUpdate.innerHTML = "Cargo mass low enough for launch";
    launchStatusUpdate.innerHTML = "Shuttle is Ready for Launch";
    launchStatusUpdate.style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  // console.log(planetsReturned)
  return planetsReturned;
}

function pickPlanet(planets) {
  let item = planets[Math.floor(Math.random() * planets.length)];
  return item;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
