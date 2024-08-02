//* Correctly use callback function *//
//? Here we pass a function as argument to getValue. However, we do not use it yet. Use the callback function so that the value 5 is logged.

let result = 0;
function getValue(callback) {
  setTimeout(function () {
    callback();
    console.log(result);
  }, 500);
}
getValue(function () {
  result = 5;
});
