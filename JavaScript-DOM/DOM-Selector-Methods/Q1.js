//* Select the button element on the page *//

//? In this scenario, the existing code adds an eventListener for a click event on a variable buttonElem. It expects buttonElem to be the button element in the example UI. But, that element is not selected yet.Assign the button element to the variable buttonElem. Click the button to verify that the code is working.Hint: Make use of the unique id of the button element.

const buttonElem = document.getElementById("button");

buttonElem.addEventListener("click", () => {
  const oldText = buttonElem.innerText;
  return (button.innerText = oldText === "ON" ? "OFF" : "ON");
});
