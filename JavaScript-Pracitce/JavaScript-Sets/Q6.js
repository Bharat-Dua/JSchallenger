//* Add multiple elements to Set *//

//? Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set

function myFunc(set, arr) {
  return new Set([...set, ...arr]);
}
console.log(myFunc(new Set([1, 2, 3]), [34, 1, 3, 8]));
