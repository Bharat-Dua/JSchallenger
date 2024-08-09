//* Split a number into its digits *//

//? Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting

// method 1
function myFunction(a) {
  const string = a + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

// method 2
function myFunction(a) {
  return a.toString(10).split("").map(Number);
}
myFunction(10);
myFunction(931);
myFunction(193134);
