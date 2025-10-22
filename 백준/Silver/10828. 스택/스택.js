// const fs = require('fs');
// const path = require('path');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 백준 제출할 때
// const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8").trim().split("\n"); // 로컬에서 풀 때

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const func = () => {
  const numOfCmd = Number(input[0]);
  const stack = [];
  const result = [];

  for (let i = 1; i <= numOfCmd; i++) {
    const [cmd, val] = input[i].split(' ');

    switch (cmd) {
      case 'push':
        stack.push(val);
        break;
      case 'pop':
        result.push(stack.length ? stack.pop() : -1);
        break;
      case 'size':
        result.push(stack.length);
        break;
      case 'empty':
        result.push(stack.length ? 0 : 1);
        break;
      case 'top':
        result.push(stack.length ? stack[stack.length - 1] : -1);
        break;
    }
  }
  console.log(result.join('\n'));
};

func();
