//* Extracting information from objects *//

//? Write a function that takes an object as argument containing properties with personal information. Extract firstName, lastName, size, and weight if available. If size or weight is given transform the value to a string. Attach the unit cm to the size. Attach the unit kg to the weight. Return a new object with all available properties that we are interested in

//? Method 1
const personInfo = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  size: 180,
  weight: 75,
  occupation: "Engineer",
};

function myFunction(obj) {
  return Object.entries(obj).reduce((prev, current) => {
    const [key, value] = [...current];

    const newValue =
      key === "size" ? `${value}cm` : key === "weight" ? `${value}kg` : value;
    return {
      ...prev,
      [key]: newValue,
    };
  }, {});
}
console.log(myFunction(personInfo));

//? Method 2

function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}
