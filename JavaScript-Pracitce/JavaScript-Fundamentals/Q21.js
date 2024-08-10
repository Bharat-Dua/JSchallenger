//* Return the next higher prime number*//

//? This challenge is a little bit more complex. Write a function that takes a number (a) as argument. If a is prime, return a. If not, return the next higher prime number.

//method 1
function myFunction(a) {
  function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (var i = 3; i * i <= n; i += 2) if (n % i == 0) return false;
    return true;
  }
  function nextPrime(n) {
    n += 1;
    while (!isPrime(n)) {
      n += 1;
    }
    return n;
  }
  if (isPrime(a)) {
    return a;
  }
  return nextPrime(a);
}

//method 2
function myFunction(a) {
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  while (!isPrime(a)) a++;
  return a;
}

//method 3
function myFunction(n) {
  function isPrime(num) {
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return num > 1;
  }
  function getNextPrime(n) {
    let count = n + 1;
    while (!isPrime(count)) {
      count++;
    }
    return count;
  }
  return isPrime(n) ? n : getNextPrime(n);
}
