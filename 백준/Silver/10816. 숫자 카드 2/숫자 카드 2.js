const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((x, y) => x - y);
const targets = input[3].split(' ').map(Number);

const lowerBound = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return left;
};

const upperBound = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

let result = '';
for (const t of targets) {
  const count = upperBound(arr, t) - lowerBound(arr, t);
  result += count + ' ';
}

console.log(result.trim());
