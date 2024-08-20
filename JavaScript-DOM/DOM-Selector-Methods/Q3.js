//* Select multiple HTML elements *//

//? In this scenario, we are looking for a list of elements gathered in one variable - rather than only one element.Assign the list items in the view to the variable 'listItems' by using an appropriate selector method.Once you have completed the code below, verify it by hovering over the list items until all items have the value 'ON'

//? Method 1
const listItems = document.querySelectorAll("#list li");

const handleHover = (event) => {
  return (event.target.innerText = "ON");
};

if (listItems.length > 1) {
  listItems.forEach((item) => item.addEventListener("mouseover", handleHover));
}

//? Method 2
const listItems1 = document.querySelectorAll("#list > li");

const handleHover1 = (event) => {
  return (event.target.innerText = "ON");
};

if (listItems1.length > 1) {
  listItems1.forEach((item) =>
    item.addEventListener("mouseover", handleHover1)
  );
}
