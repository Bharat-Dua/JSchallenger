//* Pop the balloons *//

//? Make the balloons pop by hovering over them.Extend the JavaScript code below to interact with the displayed HTML elements. Every time you hover over a balloon, it should become invisible.Your goal is to pop all the balloons one after the other.

<ul id="list">
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
</ul>;

//? Method 1
const list = document.querySelector("#list");
const targets = Array.from(list.children);
targets.forEach((target) =>
  target.addEventListener(
    "mouseover",
    () => (target.style.visibility = "hidden")
  )
);

//? Method 2
const list = document.getElementById("list");

const handleHover = (event) => {
  event.target !== list && (event.target.style.visibility = "hidden");
};

list.addEventListener("mouseover", handleHover);

//? Method 3
const list = document.getElementById("list");
const handleHover = (event) => {
  if (event.target !== list) {
    event.target.style.visibility = "hidden";
  }
};

list.addEventListener("mouseover", handleHover);
