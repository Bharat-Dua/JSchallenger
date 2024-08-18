//* Add n days to an existing date *//

//? Write a function that takes as argument a date instance (a) and a number (b). It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC.

//? Method 1
function myFunction(a, b) {
  return Date.parse(a) + b * 24 * 60 * 60 * 1000;
}

//? Method 2
function myFunction({ date, daysToAdd }) {
  return date.setDate(date.getDate() + daysToAdd);
}
