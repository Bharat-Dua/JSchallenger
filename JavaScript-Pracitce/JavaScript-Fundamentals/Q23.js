//* Insert character after every n characters (backwards) *//

//? Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'. Return the resulting string.

//method 1
function insertCharAfterEveryNCharsBackwards(a, b, n) {
  let result = a.split("").reverse().join("");
  let count = 0;
  let newString = "";
  for (let i = 0; i < result.length; i++) {
    newString = result[i] + newString;
    count++;
    if (count === n) {
      newString = b + newString;
      count = 0;
    }
  }
  return newString;
}

//method 2-using splice
function insertCharacter(a, b) {
  // Convert string 'a' to an array
  let arr = a.split("");

  // Start from the end and move backwards
  for (let i = arr.length - 3; i > 0; i -= 3) {
    arr.splice(i, 0, b); // Insert 'b' at the current position
  }

  // Convert the array back to a string
  return arr.join("");
}
console.log(insertCharAfterEveryNCharsBackwards("bharatbcastudent", "dua", 3));
// Example usage:
console.log(insertCharacter("abcdefg", "-")); // Output: "ab-cde-fg"
console.log(insertCharacter("123456789", ".")); // Output: "1.234.567.89"

//method 3-using slice
function insertCharacter(a, b) {
  let result = "";

  // Start from the end and move backwards in steps of 3
  for (let i = a.length; i > 0; i -= 3) {
    // Get the last 3 characters and prepend them to the result
    result = a.slice(Math.max(i - 3, 0), i) + (result ? b : "") + result;
  }

  return result;
}

// Example usage:
console.log(insertCharacter("abcdefg", "-")); // Output: "ab-cde-fg"
console.log(insertCharacter("123456789", ".")); // Output: "1.234.567.89"

//method 4

function myFunction(a, b) {
  return a
    .split("")
    .reverse()
    .map((c, index) => {
      return index % 3 == 2 ? b + c : c;
    })
    .reverse()
    .join("");
}

//method 5
function myFunction(a, b) {
  return Array.from(a)
    .reverse()
    .reduce((acc, cur, i) => (i % 3 === 0 ? cur + b + acc : cur + acc));
}

//method 6
function myFunction(a, b) {
  let result = "";

  for (let i = a.length - 1; i >= 0; i--) {
    result = a[i] + result;
    if ((a.length - i) % 3 === 0 && i !== 0) {
      result = b + result;
    }
  }

  return result;
}

// Example usage:
console.log(myFunction("abcdefg", "-")); // Output: "a-bcd-efg"
console.log(myFunction("123456789", ".")); // Output: "1.234.567.89"

//method 7
function myFunction(a, b) {
  return Array.from(a)
    .reverse()
    .reduce((acc, cur, i) =>
      i % 3 === 0 && i !== 0 // Avoid adding `b` at the start
        ? cur + b + acc
        : cur + acc
    );
}

// Example usage:
console.log(myFunction("abcdefg", "-")); // Output: "ab-cde-fg"
console.log(myFunction("123456789", ".")); // Output: "1.234.567.89"
