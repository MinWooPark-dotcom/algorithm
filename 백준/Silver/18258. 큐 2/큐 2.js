const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const func = () => {
  const numOfCmd = Number(input[0]);
  const queue = [];
  const result = [];
  let front = 0;

  for (let i = 1; i <= numOfCmd; i++) {
    const [cmd, val] = input[i].split(' ');

    switch (cmd) {
      case 'push':
        queue.push(Number(val));
        break;
      case 'pop':
        if (queue.length === front) result.push(-1);
        else result.push(queue[front++]);
        break;
      case 'size':
        result.push(queue.length - front);
        break;
      case 'empty':
        result.push(queue.length === front ? 1 : 0);
        break;
      case 'front':
        result.push(queue.length === front ? -1 : queue[front]);
        break;
      case 'back':
        result.push(queue.length === front ? -1 : queue[queue.length - 1]);
        break;
    }
  }

  console.log(result.join('\n'));
};

func();