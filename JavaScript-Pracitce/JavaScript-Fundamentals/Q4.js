//* Get nth character of string *//

//? Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

//method 1
function nth_char(a, n) {
  return a[n - 1];
}
console.log(nth_char("Hello", 2));

//method 2
function myFunction(a, n) {
  return a[n - 1];
}
