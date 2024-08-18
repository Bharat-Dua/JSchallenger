//* Return the next nearest quarter hour of a date *//

//? Write a function that takes a Date instance as argument. It should return the next nearest quarter hour in minutes. For example, if the given date has the time 10:01 the function should return 15

//? Method 1
function myFunction(date) {
  return ((~~(date.getMinutes() / 15) + 1) * 15) % 60;
}

//? Method 2
function myFunction(date) {
  const minute = date.getUTCMinutes();
  return minute <= 15 ? 15 : minute <= 30 ? 30 : minute <= 45 ? 45 : 0;
}
