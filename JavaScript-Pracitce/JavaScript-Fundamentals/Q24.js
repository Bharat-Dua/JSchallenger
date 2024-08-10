//* Find the correct word by incrementing letters in alphabet *//

//? Write a function that takes a string as argument. As it is, the string has no meaning. Increment each letter to the next letter in the alphabet. Return the correct word

//method 1
function incrementLetters(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let charCode = word.charCodeAt(i);
    if (charCode === 122) {
      result += "a";
    } else {
      result += String.fromCharCode(charCode + 1);
    }
  }
  return result;
}
//? Test the function
console.log(incrementLetters("hello")); // Output: 'ifmmp'
console.log(incrementLetters("world")); // Output: 'xpsme'
console.log(incrementLetters("python")); // Output: 'qyvzq'
console.log(incrementLetters("javascript")); // Output: 'kbkxhvlq'
console.log(incrementLetters("increment")); // Output: 'jncqmkqkq

//method 2
function incrementLetters(str) {
  return str
    .split("")
    .map((char) => {
      if (char >= "a" && char < "z") {
        return String.fromCharCode(char.charCodeAt(0) + 1);
      } else if (char === "z") {
        return "a"; // Wrap around for 'z'
      } else if (char >= "A" && char < "Z") {
        return String.fromCharCode(char.charCodeAt(0) + 1);
      } else if (char === "Z") {
        return "A"; // Wrap around for 'Z'
      } else {
        return char; // Non-alphabet characters remain unchanged
      }
    })
    .join("");
}

//method 3
function myFunction(s) {
  return [...s].reduce(
    (p, v) => p + String.fromCharCode(v.charCodeAt(0) + 1),
    ""
  );
}
//method 4
function myFunction(str) {
  const [...alphabet] = "abcdefghijklmnopqrstuvwxyz";
  const [...splitStr] = str;
  const getNextStr = (current) =>
    current === "z" ? "a" : alphabet[alphabet.indexOf(current) + 1];

  return splitStr.map((current) => getNextStr(current)).join("");
}
