//* How many times does a character occur? *//
//? Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
//? Example: count_char('a', 'banana') returns 3

function count_char(a, b) {
  return b.split(a).length - 1;
}
