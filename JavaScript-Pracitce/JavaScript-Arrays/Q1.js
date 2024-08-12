//* Get nth element of array *//

//? Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

// method 1
function myFunction(a, n) {
  return a[n - 1];
}

// method 2

//? If 'a' is empty, return null. If 'n' is out of range, return null. If 'n' is negative, return null. If 'n' is not an integer, return null.

function getNthElement(a, n) {
  // Check if 'a' is empty
  if (a.length === 0) {
    return null;
  }
  // Check if 'n' is negative or not an integer
  if (n < 0 || !Number.isInteger(n)) {
    return null;
  }
  // Check if 'n' is out of range
  if (n >= a.length) {
    return null;
  }
  // Return the nth element of 'a'
  return a[n];
}

//? Test the function with some examples
console.log(getNthElement([1, 2, 3, 4, 5], 2)); // Output: 3
console.log(getNthElement([], 0)); // Output: null
console.log(getNthElement([1, 2, 3, 4, 5], -1)); // Output: null
