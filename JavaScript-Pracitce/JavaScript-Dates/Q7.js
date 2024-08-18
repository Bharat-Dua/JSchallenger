//* Calculate difference between two dates in hours, minutes, and seconds *//

//? This is a more difficult challenge. Write a function that takes two date instances as arguments. It should return an object with the properties 'hrs', 'min', and 'sec'. The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

//? Method 1
function myFunction(a, b) {
  const time = new Date(Math.abs(Date.parse(a) - Date.parse(b)));
  return {
    hrs: time.getUTCHours(),
    min: time.getUTCMinutes(),
    sec: time.getUTCSeconds(),
  };
}

//? Method 2

function myFunction(d1, d2) {
  const hrs = Math.abs(d1.getHours() - d2.getHours());
  const min = Math.abs(d1.getMinutes() - d2.getMinutes());
  const sec = Math.abs(d1.getSeconds() - d2.getSeconds());
  return { hrs, min, sec };
}
