//* Creating Javascript objects three *//

//? Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

//Method 1
function myFunction(a, b) {
  return a.reduce((pre, cur, i) => ({ ...pre, [cur]: b[i] }), {});
}
//Method 2
function myFunction(a, b) {
  return Object.fromEntries(a.map((v, index) => [v, b[index]]));
}
