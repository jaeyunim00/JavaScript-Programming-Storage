function solution(arr) {
  let row = 0;
  let col = 0;

  while (true) {
    if (col >= arr[0].length) {
      break;
    }
    arr[row][col] = arr[row][col + 1];
    col++;
  }

  console.log(arr);
}

solution([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
