const fs = require('fs');
const path = require('path');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const trees = input[1].split(' ').map(Number);
const target = input[0].split(' ').map(Number)[1];

const binarySearch = () => {
  let left = 0;
  let right = Math.max(...trees);
  let maxHeightToCut = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const lengthOfTreeCut = trees.reduce(
      (sum, h) => sum + (h > mid ? h - mid : 0),
      0
    );

    if (lengthOfTreeCut >= target) {
      maxHeightToCut = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return maxHeightToCut;
};

const result = binarySearch();
console.log(result);
