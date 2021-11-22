/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

function getRandomNumber(lower, upper = 100) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// Call the function and pass it different values
console.log( getRandomNumber(1, 6) );
console.log( `${getRandomNumber(10)} is a random number between 10 and 100` );
console.log( getRandomNumber(200, 500) );
