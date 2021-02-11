function solution(answers) {
  const answer = [];
  const user1 = [1, 2, 3, 4, 5];
  const user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === user1[i % 5]) {
      score[0] += 1;
    }
    if (answers[i] === user2[i % 8]) {
      score[1] += 1;
    }
    if (answers[i] === user3[i % 10]) {
      score[2] += 1;
    }
  }
  const max = score.reduce((a, b) => {
    return Math.max(a, b);
  });
  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}
