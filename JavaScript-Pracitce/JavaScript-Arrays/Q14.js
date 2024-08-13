//* Sort array by object property *//

//? Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

function myFunction(arr) {
  const sort = (x, y) => x.b - y.b;
  return arr.sort(sort);
}
