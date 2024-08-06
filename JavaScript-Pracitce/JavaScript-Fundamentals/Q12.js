//* Basic JavaScript math operators *//

//? Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.

// method 1
function myFunction(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}

//method 2
function myFunction(a, b, c, d, e, f) {
  let result = ((a + b - c) * d) / e;
  return Math.pow(result, f);
}
