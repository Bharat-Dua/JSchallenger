//* Group array of strings by first letter *//

//? Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings. For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}

//Method 1
function myFunction(arr) {
  const result = arr.reduce((prev, current) => {
    const initial = current.split("")[0].toLowerCase();
    return {
      ...prev,
      [initial]: [...(prev[initial] ?? []), current],
    };
  }, {});
  return result;
}

//Method 2
function myFunction(arr) {
  return arr.reduce((pv, cv) => {
    const c = cv[0].toLowerCase();
    return { ...pv, [c]: [...(pv[c] || []), cv] };
  }, {});
}
