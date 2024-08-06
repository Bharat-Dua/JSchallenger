//* Check whether a string contains another string and concatenate *//

//? Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

// method 1
function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a;
}

//method 2
function myFunction(a, b) {
  let result;
  if (a.includes(b)) {
    result = b + a;
  } else {
    result = a + b;
  }
  return result;
}
