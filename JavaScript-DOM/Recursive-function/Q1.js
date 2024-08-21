//* Stop and restart the moving button *//

//? This is a good exercise to learn about recursive functions. The function move in the code below moves the button 1px to the left or the right. It is recursive because it calls itself again and again. This keeps the button moving.Extend the JavaScript code. Once you click the button, it should stop moving. When you click it again, it should move again.Confirm your code by clicking the button twice.

//? Method 1
const button = document.getElementById("button");
let stopped = false;

function move(isReturning) {
  const width = button.parentNode.clientWidth;
  const left = parseInt(button.style.left, 10) || 0;
  if (!stopped) {
    button.style.left = (isReturning ? left - 1 : left + 1) + "px";
    setTimeout(
      () =>
        move((isReturning && left > 0) || left === width - button.clientWidth),
      10
    );
  }
}

move();

button.addEventListener("click", () => {
  stopped = !stopped;
  move();
});

//? Method 2
const button = document.getElementById("button");
let stopped = false;

function move(isReturning) {
  const width = button.parentNode.clientWidth;
  const left = parseInt(button.style.left, 10) || 0;
  if (!stopped) {
    button.style.left = (isReturning ? left - 1 : left + 1) + "px";
    setTimeout(
      () =>
        move((isReturning && left > 0) || left === width - button.clientWidth),
      10
    );
  }
}

move();

button.addEventListener("click", () => {
  stopped = !stopped;
  if (!stopped) {
    move();
  }
});
