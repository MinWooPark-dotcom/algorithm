const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const func = () => {
  const logOfEnter = Number(input[0]);
  const set = new Set();

  for (let i = 1; i <= logOfEnter; i++) {
    const [name, state] = input[i].split(' ');
    if (state === 'enter') set.add(name);
    else set.delete(name);
  }

  const result = Array.from(set).sort().reverse();
  console.log(result.join('\n'));
};

func();
