//* Remove a specific array element *//

//? Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

function removeElement(a, b) {
  //? Use the filter() method to create a new array with all elements that pass the test
  return a.filter((element) => element !== b);
}
