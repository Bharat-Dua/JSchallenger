//* Swap object keys and values *//

//? Write a function that takes an object as argumentSomehow, the properties and keys of the object got mixed upSwap the Javascript object's key with its values and return the resulting object

//? Method 1
function myFunction(obj) {
  return Object.entries(obj).reduce((prev, current) => {
    const [key, value] = [...current];
    return {
      ...prev,
      [value]: key,
    };
  }, {});
}

//? Method 2
function myFunction(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
