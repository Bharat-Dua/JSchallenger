//* Get last n characters of string *//

//? Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

function getLastThreeChars(str) {
  return str.slice(-3);
}
//? Test the function with a string
console.log(getLastThreeChars("Hello, World!")); // Output: "d!"
console.log(getLastThreeChars("JavaScript")); // Output: "cript"
