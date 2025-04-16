function solution(board, moves) {
  const basket = [];
  let result = 0;
  moves.forEach((order) => {
    const doll = pickup(board, order - 1);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        result += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return result;
}

function pickup(board, order) {
  const newBoard = board;
  for (let i = 0; i < newBoard.length; i++) {
    if (newBoard[i][order] !== 0) {
      const doll = newBoard[i][order];
      newBoard[i][order] = 0;
      return doll;
    }
  }
}
