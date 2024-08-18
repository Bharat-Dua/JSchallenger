//* Return the number of days between two dates *//

//? Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.

//? Method 1
function myFunction(a, b) {
  const dif = Math.abs(a - b);
  return dif / 1000 / 60 / 60 / 24;
}

//? Method 2
function myFunction(a, b) {
  return Math.abs(a.getTime() / 86400000 - b.getTime() / 86400000);
}
