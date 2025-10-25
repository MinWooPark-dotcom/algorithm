function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  // 맞은 개수 저장
  const scores = [0, 0, 0];

  // 각 문제마다 검사
  answers.forEach((answer, idx) => {
    patterns.forEach((pattern, pIdx) => {
      if (answer === pattern[idx % pattern.length]) {
        scores[pIdx]++;
      }
    });
  });

  // 최고 점수 계산
  const maxScore = Math.max(...scores);

  // 최고 점수자 추출
  const result = [];
  scores.forEach((s, i) => {
    if (s === maxScore) result.push(i + 1);
  });

  return result;
}
