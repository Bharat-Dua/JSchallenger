//* Wait for Promise to resolve *//

//? Here we have a variable called data with an initial value of 5. The Promise uses setTimeout to change the value of data asynchronously. Then we use the multiply function to perform a math operation on the value of data.However, at the moment we only call multiply with the initial value of data. Adjust the code so that we call multiply only when the Promise has been resolved.

let data = 5;
let result;

const promise = new Promise(function (resolve) {
  console.log("Starting task...");
  setTimeout(function () {
    data = 100;
    console.log("Resolving now...");
    resolve();
  }, 1000);
});

function multiply(val) {
  result = val * val;
}

promise.then(function () {
  multiply(data);
  console.log(result);
});
