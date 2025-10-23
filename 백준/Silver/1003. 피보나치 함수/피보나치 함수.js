const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const testCases = input.slice(1).map(Number);

// dp[n] = [0의 출력 횟수, 1의 출력 횟수]
const dp = Array.from({ length: 41 }, () => [0, 0]);

// 1. 기저 조건
dp[0] = [1, 0];
dp[1] = [0, 1];

// 2. 점화식으로 dp 테이블 채우기 (Bottom-Up)
for (let i = 2; i <= 40; i++) {
  dp[i] = [
    dp[i - 1][0] + dp[i - 2][0], // 0 호출 횟수
    dp[i - 1][1] + dp[i - 2][1], // 1 호출 횟수
  ];
}

// 3. 결과 출력
let result = '';
for (const n of testCases) {
  result += `${dp[n][0]} ${dp[n][1]}\n`;
}
console.log(result.trim());
