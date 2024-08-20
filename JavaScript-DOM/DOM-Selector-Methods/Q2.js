//* Query descendent HTML elements *//

//?Here, the existing code expects the variables 'buttonElem' and 'inputElem' to represent the button and input elements in the example UI.Assign the respective elements to the variables.In this case, the two elements do not have unique identifiers - like for example an id. Instead they are direct descendents of a div element with id 'wrapper'. Use an appropriate selector method!Click the button to verify that the code is working.

//? Method 1
const buttonElem = document.querySelector("#wrapper button");
const inputElem = document.querySelector("#wrapper input");

buttonElem.addEventListener("click", () => {
  const oldText = inputElem.value;
  return (inputElem.value = oldText === "ON" ? "OFF" : "ON");
});

//? Method 2
const buttonElem1 = document.querySelector("#wrapper > button");
const inputElem1 = document.querySelector("#wrapper> input[type='text']");

buttonElem1.addEventListener("click", () => {
  const oldText = inputElem1.value;
  return (inputElem1.value = oldText === "ON" ? "OFF" : "ON");
});
