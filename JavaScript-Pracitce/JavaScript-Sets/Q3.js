//* Get union of two sets *//

//?Write a function that takes two Sets as arguments. Create the union of the two sets. Return the result. Hint: try not to switch to Arrays, this would slow down your code

//? Method 1
function union(a, b) {
  const result = new Set(a);
  for (const item of b) {
    result.add(item);
  }
  return result;
}

//? Method 2
function union(a, b) {
  return new Set([...a, ...b]);
}

//?Method  3
function union(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}
