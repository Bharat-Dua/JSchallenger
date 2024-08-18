//* Convert a Set to Array *//

//? Write a function that takes a Set as argument. Convert the Set to an Array. Return the Array

//? Method 1
function myFunction(set) {
  return [...set];
}

//? Method 2
function myFunction(set) {
  return Array.from(set);
}
