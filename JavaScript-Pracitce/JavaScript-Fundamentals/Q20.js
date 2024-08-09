//* Clear up the chaos behind these strings *//

//? It seems like something happened to these strings. Can you figure out how to clear up the chaos? Write a function that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. You might want to apply basic JS string methods such as replace(), split(), slice() etc.

// method 1
function myFunction(a, b) {
  const upperFirstA = a.replace("%", "").split("").at(0).toUpperCase();

  const validateA = upperFirstA + a.replace("%", "").slice(1);

  const validateB = b.replace("%", "").split("").reverse().join("");

  return validateA + validateB;
}

//method 2
function myFunction(s1, s2) {
  const cleanS1 = s1.replace("%", "");
  const cleanS2 = s2.replace("%", "");
  return (
    cleanS1.charAt(0).toUpperCase() +
    cleanS1.slice(1) +
    cleanS2.split("").reverse().join("")
  );
}
