//* Create new list item and add to DOM *//

//? Extend the JavaScript code below to interact with the displayed HTML elements.Enter a new todo in the input field. Once you click the button, the new todo item should appear at the bottom of the list.Confirm your code by creating a new todo!

const button = document.getElementById("button");
button.addEventListener("click", () => {
  // type in your code here
  const list = document.getElementById("list");
  const input = document.getElementById("input");
  const item = document.createElement("li");
  item.innerHTML = input.value;
  list.appendChild(item);
});
