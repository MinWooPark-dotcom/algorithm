const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const func = () => {
  const nums = input[1].split(' ').map(Number);
  let min = nums[0];
  let max = nums[0];

  for (let num of nums) {
    if (num < min) min = num;
    else if (num > max) max = num;
  }

  return `${min} ${max}`;
};

console.log(func());
