//* Delete element from Set *//

//? Write a function that takes a Set and a value as argument. If existing in the Set, remove the value from the Set. Return the result

//? Method 1
function myFunction(set, val) {
  set.delete(val);
  return set;
}

//? Method 2
function myFunction(set, val) {
  return set.has(val) ? set.delete(val) && set : set;
}
