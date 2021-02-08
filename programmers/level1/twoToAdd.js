function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let k = 0; k < numbers.length; k++) {
      if (i !== k) {
        if (answer.indexOf(numbers[i] + numbers[k]) < 0)
          answer.push(numbers[i] + numbers[k]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
