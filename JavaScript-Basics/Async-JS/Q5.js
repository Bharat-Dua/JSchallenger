//* Correctly resolve promise *//
//? The Promise below is not correctly resolved. Fix the mistake such that the then() handler logs the resolved value.

const promise = new Promise(function (resolve) {
  console.log("Starting task...");
  resolve(100);
});

promise.then(function (res) {
  console.log("Promise fulfilled");
  console.log(res);
});
