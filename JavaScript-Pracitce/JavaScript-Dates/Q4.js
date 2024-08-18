//* Check if two dates are within 1 hour from each other *//

//? Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour. It should return false otherwise.

//? Method 1
function myFunction(a, b) {
  return Math.abs(a - b) / 1000 / 60 <= 60;
}

//? Method 2
function myFunction(a, b) {
  return Math.abs(a - b) <= 60 * 60 * 1000;
}

//? Method 3
function myFunction(a, b) {
  const timeDiffLimitInMinutes = 60;
  let firstDateTime = a.getTime();
  let secondDateTime = b.getTime();
  let timeDiffInMiliSeconds = Math.abs(firstDateTime - secondDateTime);
  let timeDiffInMinutes = timeDiffInMiliSeconds / 60000;

  if (timeDiffInMinutes > timeDiffLimitInMinutes) return false;
  return true;
}
