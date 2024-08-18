//* Creating Javascript Sets *//

//? Write a function that takes three elements of any type as arguments. Create a Set from those elements. Return the result

//? Method 1
function myFunction(a, b, c) {
  return new Set([a, b, c]);
}

//? Method 2
function myFunction(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}
