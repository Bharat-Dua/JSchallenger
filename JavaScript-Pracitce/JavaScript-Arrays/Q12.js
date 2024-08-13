//* Check if all array elements are equal *//

//? Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

//method 1
function myFunction(arr) {
  return new Set(arr).size === 1;
}

//method 2

function myFunction(arr) {
  return Boolean(arr.reduce((acc, cur) => (cur === acc ? cur : false)));
}

//method 3

function myFunction(arr) {
  return arr.every((v) => v === arr[0]);
}
