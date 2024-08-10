//* Find next higher natural number that is divisble by y *//

//? Write a function that takes two numbers, say x and y, as arguments. Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y.
//method 1
function check(x, y) {
  if (x % y === 0) {
    return x;
  } else {
    return x + (y - (x % y));

    return x + (y - (x % y));
  }
  check(20, 2);
}

//method 2
function check(x, y) {
  if (x % y === 0) {
    return x;
  } else {
    return Math.ceil(x / y) * y;
  }
}
check(20, 2);

//method 3
function myFunction(x, y) {
  while (x % y !== 0) x++;
  return x;
}
