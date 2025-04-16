function solution(a, b) {
  let result = 0;
  for (let i in a) {
    result += a[i] * b[i];
  }
  return result;
}
