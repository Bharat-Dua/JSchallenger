//* Check if one date is earlier than another *//

//? Write a function that takes two date instances (a and b) as arguments. It should return true if a is earlier than b. It should return false otherwise.

//? Method 1
function myFunction(a, b) {
  return a < b;
}

//? Method 2
function myFunction(a, b) {
  return a - b < 0;
}
