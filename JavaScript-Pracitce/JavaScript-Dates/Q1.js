//* Check if two dates are equal *//

//? Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.

//? Method 1
function myFunction(a, b) {
  return a.getTime() === b.getTime();
}

//? Method 2
function myFunction(a, b) {
  return a - b === 0;
}
