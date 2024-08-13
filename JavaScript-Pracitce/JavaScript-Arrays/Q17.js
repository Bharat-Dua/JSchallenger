//* Create a range of numbers *//

//? Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max

//method 1
function rangeOfNumbers(min, max) {
  if (min > max) throw new Error("min should be less than or equal to");
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}

// method 2

function rangeOfNumbers(min, max) {
  if (min > max) throw new Error("min should be less than or equal to");

  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
}

// method 3
function rangeOfNumbers(min, max) {
  if (min > max) throw new Error("min should be less than or equal to");

  return Array(max - min + 1)
    .fill()
    .map((_, i) => min + i);
}

// method 4
function myFunction(min, max) {
  const array = [...new Array(max - min + 1)];
  return array.map((_, index) => index + min);
}
