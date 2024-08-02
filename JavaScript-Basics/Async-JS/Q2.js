//* Execute the code asynchronously *//

//? Adjust the code snippet so that the value 0 is logged first and then the value 1.

let count = 0;
function increment() {
  count = count + 1;
}
setTimeout(() => {
  increment();
  console.log(count);
}, 1000);

console.log(count);
