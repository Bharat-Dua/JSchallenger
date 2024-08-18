//* Multiply all object values by x *//

//? Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

//? Method 1
function myFunction(a, b) {
  Object.entries(a).reduce((pv, cv) => {
    const [key, value] = [...cv];
    return {
      ...pv,
      [key]: value * b,
    };
  }, {});
}
myFunction({ a: 1, b: 2, c: 3 }, 3);

//? Method 2
function myFunction(a, b) {
  return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
  }, {});
}

//? Method 3

function myFunction(a, b) {
  return Object.entries(a).reduce(
    (pv, cv) => ({ ...pv, [cv[0]]: cv[1] * b }),
    {}
  );
}
