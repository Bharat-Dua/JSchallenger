//* Round a number to 2 decimal places *//

//? Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

// method 1
function roundTo2DecimalPlaces(a) {
  return Math.round(a * 100) / 100;
}

// method 2
function myFunction(a) {
  return Number(a.toFixed(2));
}
