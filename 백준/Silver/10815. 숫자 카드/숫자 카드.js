const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const func = () => {
  const nCards = input[1].split(' ').map(Number);
  const mCards = input[3].split(' ').map(Number);

  const set = new Set(nCards);
  return mCards.map((v) => (set.has(v) ? 1 : 0)).join(' ');
};

console.log(func());
