function solution(array, commands) {
  const answer = [];
  let i = 0;
  let j = 0;
  let k = 0;
  for (let m = 0; m < commands.length; m++) {
    i = commands[m][0];
    j = commands[m][1];
    k = commands[m][2];

    let sliced = array.slice(i - 1, j);
    let sorted = sliced.sort((a, b) => a - b);

    answer.push(sorted[k - 1]);
  }
  return answer;
}
