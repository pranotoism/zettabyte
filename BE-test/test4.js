/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  const n = numbers.length; // The length of the array is n, but the total numbers are from 0 to n (inclusive)

  // Sum of numbers from 0 to n (inclusive) using the formula n * (n + 1) / 2
  const expectedSum = (n * (n + 1)) / 2;

  // Sum of all the numbers in the given array
  const actualSum = numbers.reduce((acc, num) => acc + num, 0);

  // The missing number is the difference between the expected sum and the actual sum
  return expectedSum - actualSum;
}

console.log(result(numbers));
