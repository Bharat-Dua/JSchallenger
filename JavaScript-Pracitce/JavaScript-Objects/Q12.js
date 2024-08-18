//* Remove a property from an object *//

//? Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'

//? Method 1
function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}

//? Method 2
function myFunction(obj) {
  let newObj = { ...obj };
  delete newObj.b;
  return newObj;
}

//? Method 3
function myFunction(obj) {
  const newObj = {};
  for (const key in obj) {
    if (key !== "b") {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

//? Method 4
function myFunction(obj) {
  if ("b" in obj) {
    return delete obj.b && obj;
    //? ----- OR------
    return delete obj["b"] && obj;
  }
}
