//* Return the longest string from an array of strings *//

//? Write a function that takes an array of strings as argument. Return the longest string.

function myFunction(arr) {
  return arr.reduce((prev, current) =>
    prev.length > current.length ? prev : current
  );
}
