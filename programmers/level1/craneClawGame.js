function solution(board, moves) {
  let basket = [];
  while (moves.length > 0) {
    let line = moves[0] - 1;
    let picked = board[line][board.length - 1];
    basket.push(picked);
    board[line].pop();
    moves.shift();
    for (let i = 0; i < basket.length - 2; i++) {
      if (basket[i] === basket[i + 1]) {
        basket.splice(i, 2);
      }
    }
  }
  return basket.length;
}

// 테스트 10 중 1개만 통과.
