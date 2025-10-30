const input = require('fs').readFileSync(0, 'utf8').trim().split('\n'); // 백준에서 런타임 에러 EACCES	Error: EACCES: permission denied 발생 시 사용
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = require('fs').readFileSync(filePath, 'utf8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const operations = input.slice(1).map((line) => line.split(' ').map(Number));

function func(n, operations) {
  const parent = Array.from({ length: n + 1 }, (_, i) => i);

  const find = (x) => (parent[x] !== x ? (parent[x] = find(parent[x])) : x);
  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) {
      if (rootA < rootB) parent[rootB] = rootA;
      else parent[rootA] = rootB;
    }
  };
  const connected = (a, b) => find(a) === find(b);

  let result = [];
  for (const [operation, a, b] of operations) {
    if (operation === 0) union(a, b);
    else result.push(connected(a, b) ? 'YES' : 'NO');
  }
  return result.join('\n');
}

console.log(func(n, operations));
