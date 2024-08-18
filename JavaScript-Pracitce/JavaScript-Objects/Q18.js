//* Add property to each object in array *//

//? Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. Hint: try not to mutate the original array

//? Method 1
const countries = [
  { country: "India", population: "1.4B" },
  { country: "Canada", population: "38M" },
  { country: "Australia", population: "25M" },
];
function addContinent(countries, continent) {
  return countries.map((country) => ({
    ...country,
    continent: continent,
  }));
}

const updatedCountries = addContinent(countries, "Asia");
console.log(updatedCountries);
