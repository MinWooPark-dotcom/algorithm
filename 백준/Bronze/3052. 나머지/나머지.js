const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const func = () => {
  const remainders = input.map((x) => Number(x) % 42);
  const unique = new Set(remainders);
  console.log(unique.size);
};

func();
