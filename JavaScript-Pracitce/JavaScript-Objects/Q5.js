//* Check if property exists in object and is truthy *//

//? Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.

//Method 1
function hasTruthyProperty(a, b) {
  // Check if property exists in object and is truthy
  return a.hasOwnProperty(b) && Boolean(a[b]);
}

//Method 2
function hasTruthyProperty(a, b) {
  return a[b] ? true : false;
}

// Method 3
function hasTruthyProperty(a, b) {
  !!a[b];
}

//Method 4
function myFunction(a, b) {
  return Boolean(a[b]);
}
