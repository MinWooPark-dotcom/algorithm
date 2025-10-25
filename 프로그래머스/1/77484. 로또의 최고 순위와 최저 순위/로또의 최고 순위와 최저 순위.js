const RANK_TABLE = [6, 6, 5, 4, 3, 2, 1];

function solution(lottos, win_nums) {
  const winSet = new Set(win_nums);
  const zeros = lottos.filter(n => n === 0).length;
  const matched = lottos.filter(n => winSet.has(n)).length;
  const maxMatch = matched + zeros;
  const minMatch = matched;
  
  return [RANK_TABLE[maxMatch], RANK_TABLE[minMatch]];
}