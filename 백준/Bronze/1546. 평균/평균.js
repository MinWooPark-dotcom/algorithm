const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const func = () => {
  const n = Number(input[0]);
  const scores = input[1].split(' ').map(Number);
  const m = Math.max(...scores);

  sumOfFixedScores = scores.reduce((acc, cur) => acc + (cur / m) * 100, 0);

  return sumOfFixedScores / n;
};

console.log(func());
