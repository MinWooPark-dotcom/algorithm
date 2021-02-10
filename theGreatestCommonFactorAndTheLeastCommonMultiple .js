function solution(n, m) {
  var answer = [];
  const greatest = (a, b) => {
    // 3 ,12 => 12, 3
    if (b === 0) return a; // 0 return 3
    return greatest(b, a % b); // 12, 3
  };
  const least = (a, b) => (a * b) / greatest(a, b);
  return [greatest(n, m), least(n, m)];
}
