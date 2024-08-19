//* Get Intersection of two Javascript Sets *//

//? Write a function that takes two sets (a and b) as arguments Get the intersection of the sets In other words, return a set containing all elements that are both in a as well as b

//? Method 1
function getIntersection(a, b) {
  // Convert the input arguments to sets if they are not already sets
  a = new Set(a);
  b = new Set(b);

  return new Set([...a].filter((x) => b.has(x)));
}

//? Method 2
function intersection(a, b) {
  let intersect = new Set([...a].filter((x) => b.has(x)));
  console.log(intersect);
  return intersect;
}
