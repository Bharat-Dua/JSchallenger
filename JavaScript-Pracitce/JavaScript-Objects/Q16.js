//* Replace empty strings in object with null values *//

//?Write a function that takes an object as argumentSome of the property values contain empty stringsReplace empty strings and strings that contain only whitespace with null valuesReturn the resulting object

//? Method 1
function myFunction(obj) {
  return Object.entries(obj).reduce((prev, current) => {
    const [key, value] = [...current];
    return {
      ...prev,
      [key]: value.trim() === "" ? null : value,
    };
  }, {});
}

//? Method 2
function myFunction(obj) {
  return Object.entries(obj).reduce((prev, current) => {
    const [key, value] = [...current];
    const newValue = value.trim() === "" ? null : value;
    return {
      ...prev,
      [key]: newValue,
    };
  }, {});
}

//? Method 3
function myFunction(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, !v.trim() ? null : v])
  );
}
