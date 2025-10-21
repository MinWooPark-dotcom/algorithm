const fs = require("fs");
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((x, y) => x - y);
const targets = input[3].split(" ").map(Number);

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return 1;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return 0;
};

let result = "";
for (const target of targets) result += binarySearch(arr, target) + "\n";

console.log(result.trim());
