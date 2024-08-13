//* Count number of negative values in array *//

//? Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

//method 1
function myFunction(a) {
  return a.filter((el) => el < 0).length;
}

//method 2
function myFunction(a) {
  return a.reduce((cou, el) => (el < 0 ? ++cou : cou), 0);
}
