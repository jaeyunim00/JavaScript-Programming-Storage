function solution(m, n, board) {
  var answer = 0;
  let my_board = [];
  for (let i = 0; i < m; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(board[i][j]);
    }
    my_board.push(temp);
  }

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      if (
        my_board[i][j] == my_board[i][j + 1] &&
        my_board[i][j + 1] == my_board[i + 1][j + 1] &&
        my_board[i + 1][j + 1] == my_board[i + 1][j] &&
        my_board[i + 1][j] == my_board[i][j]
      ) {
      }
    }
  }
  console.log(my_board);
  return answer;
}
