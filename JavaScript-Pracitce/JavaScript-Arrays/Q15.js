//* Merge two arrays with duplicate values *//

//? Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

//method 1
function myfunction(a, b) {
  const merged = [...a, ...b];
  const unique = [...new Set(merged)];
  const sort = unique.sort((a, b) => a - b);
  return sort;
}
console.log(
  myfunction([
    [3, 1, 4, 1],
    [5, 9, 2, 6, 5],
  ])
);

//? method 2
function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

//? method 3
function myFunction(a, b) {
  let merged = a.concat(b);
  let noDuplicate = Array.from(new Set(merged));
  let sorted = noDuplicate.sort((a, b) => a - b);
  return sorted;
}

//? method 4
function myFunction(a, b) {
  return Array.from(new Set(a.concat(b).sort((a, b) => a - b)));
}
