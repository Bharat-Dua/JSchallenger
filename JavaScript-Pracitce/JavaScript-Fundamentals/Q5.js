//* Remove first n characters of string *//

//? Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

function removeFirstThreeChars(a) {
  return a.slice(3);
}
//? Test the function with a string of length 10
console.log(removeFirstThreeChars("1234567890")); // Output: "4567890
