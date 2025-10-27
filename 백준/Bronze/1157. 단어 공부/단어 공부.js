const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase();

const func = () => {
  const counts = {};

  for (const char of input) {
    counts[char] = (counts[char] || 0) + 1;
  }

  const entries = Object.entries(counts);
  let maxCount = 0;
  let result = '?';

  for (const [char, count] of entries) {
    if (count > maxCount) {
      maxCount = count;
      result = char;
    } else if (count === maxCount) {
      result = '?';
    }
  }

  return result;
};

console.log(func());
