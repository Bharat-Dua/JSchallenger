//* Convert array to object with counter *//

//? Write a function that takes an array of numbers as argument. Convert the array to an object. It should have a key for each unique value of the array. The corresponding object value should be the number of times the key occurs within the array.

//? Method 1
function myfunc(arr) {
  return arr.reduce((prev, cur) => {
    return {
      ...prev,
      [cur]: (prev[cur] ?? 0) + 1,
    };
  }, {});
}
console.log(myfunc([1, 2, 4, 9, 10, 2, 4, 5, 9, 10]));

//? Method 2
function myFunction(a) {
  return a.reduce((pv, cv) => ({ ...pv, [cv]: pv[cv] ? pv[cv] + 1 : 1 }), {});
}
