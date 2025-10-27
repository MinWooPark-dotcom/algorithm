const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const func = () => {
  const n = Number(input[0]);
  const words = input.slice(1);

  const deduplicationWords = Array.from(new Set(words));

  deduplicationWords.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
  });

  return deduplicationWords.join('\n');
};

console.log(func());
