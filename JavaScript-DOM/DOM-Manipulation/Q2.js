//* Change id of HTML element *//

//? In this scenario the existing code listens to a click on the button. When the button is clicked, the function changeInput is triggered. changeInput tries to select an input field with id inputEl. But, the existing input field does not have this id. Add some Javascript code to add the id inputEl to the existing input field.Verify that your code works by clicking the button.

//? Method 1
const button = document.querySelector("#wrapper button");

const changeInput = () => {
  const input = document.querySelector("#inputEl");
  if (input) {
    input.value = "Hello World";
  }
};

button.addEventListener("click", changeInput);

document.querySelector("#wrapper input").setAttribute("id", "inputEl");

//? Method 2
const button = document.querySelector("#wrapper button");

const changeInput = () => {
  const input = document.querySelector("#inputEl");
  if (input) {
    input.value = "Hello World";
  }
};

button.addEventListener("click", changeInput);

document.querySelector("#wrapper input").id = "inputEl";

//? Method 3
const button = document.querySelector("#wrapper button");

const changeInput = () => {
  const input = document.querySelector("#inputEl");
  if (input) {
    input.value = "Hello World";
  }
};

button.addEventListener("click", changeInput);

let input = document.querySelector("#wrapper input");
input.setAttribute("id", "inputEl");
