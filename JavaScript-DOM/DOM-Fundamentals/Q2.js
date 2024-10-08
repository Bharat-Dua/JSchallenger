//* Get full-name from inputs *//

//? Extend the JavaScript code below to interact with the displayed HTML elements.This time we are looking for the full name. When the button is clicked, combine the names of the first two input fields. Insert the full name in the third input field.Hint: Check if your code still works if you change the first or last name.Confirm your code by clicking the button!

const button = document.getElementById("button");
button.addEventListener("click", () => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const fullName = document.getElementById("fullName");
  fullName.value = firstName.value + " " + lastName.value;
});
