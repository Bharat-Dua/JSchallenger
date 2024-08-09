//* Check if a number is a whole number *//

//? Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

//method 1
function isWholeNumber(a) {
  return Number.isInteger(a);
}
//method 2
function myFunction(a) {
  return a - Math.floor(a) === 0;
}
//method 3
function isWholeNumber(a) {
  return a % 1 === 0;
}
//method 4
function wholeNumber(a) {
  return a % 2 === 0;
}
