//* Get every nth element of array *//

//? Write a function that takes an array (a) and a value (n) as arguments. Save every nth element in a new array. Return the new array
// Method 1

function myFunction(a, n) {
  return a.filter((_, i) => (i + 1) % n === 0);
}
// Method 2
function myFunction(a, n) {
  return a.filter((_, index) => !((index + 1) % n));
}
// Method 3
function everyNthElement(a, n) {
  // Check if n is a positive integer
  if (n <= 0) {
    return "n must be a positive integer";
  }
  // Check if a is an array
  else if (!Array.isArray(a)) {
    return "a must be an array";
  }
  // Check if a is not empty
  else if (a.length === 0) {
    return "a must not be empty";
  }
  // Check if n is larger than the array length
  else if (n > a.length) {
    return "n must be smaller than the array length";
  }
  // If all checks pass, create a new array with every nth element
  else {
    let result = a.filter((_, i) => (i + 1) % n === 0);
    return result;
  }
}
