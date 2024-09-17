/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  if (words.length === 0) return ''; // Edge case: no words

  // Start with the first word as the prefix
  let prefix = words[0];

  // Iterate over the rest of the words in the array
  for (let i = 1; i < words.length; i++) {
    // While the current word does not start with the prefix, reduce the prefix
    while (words[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Remove the last character
      if (prefix === '') return ''; // If prefix becomes empty, return an empty string
    }
  }

  return prefix;
}

console.log(result(words));
