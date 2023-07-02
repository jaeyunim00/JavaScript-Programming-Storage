let fs = require("fs");
let input = fs
  .readFileSync("Programmers/구현/index.txt")
  .toString()
  .split("\n");

let board_len = Number(input.shift());
let apple_len = Number(input.shift());

let board = Array.from({ length: board_len + 2 }, (x) =>
  Array.from({ length: board_len + 2 }, (y) => (y = 0))
);

console.log(board_len);

for (let i = 0; i <= board_len; i++) {
  board[0][i] = 1;
  board[i][0] = 1;
  board[board_len + 1][i] = 1;
  board[i][board_len + 1] = 1;
}

for (let i = 0; i < apple_len; i++) {
  let [x, y] = input.shift().split(" ").map(Number);
  board[x][y] = 2;
}

console.log(board);

let snake = [[1, 1]];
let count = 0;

function getWay(count, now_way) {
  let temp = input.shift();
  let info = [];
  for (let i = 0; i < temp; i++) {
    info.push(input[i].split(" ").map((x) => Number(x[0])));
  }
  for (let j = 0; j < info.length; j++) {
    if (info[j][1] == count) {
      if (now_way == "right") {
        return "down";
      } else if (now_way == "down") {
        return "left";
      } else if (now_way == "left") {
        return "up";
      } else if (now_way == "up") {
        return "left";
      }
    }
  }
}

function isGameEnd(i, j) {
  if (snake.includes(board[i][j])) {
    return count;
  }
  if (board[i][j] == 2) {
    return count;
  }
}

let i = 1,
  j = 1;
let now_way = "right";
while (true) {
  now_way = getWay(count, now_way);
  if (now_way == "right") {
    j++;
    isGameEnd(i, j);
    snake.push([i, j]);
    if (board[(i, j)] !== 2) {
      snake.shift();
    }
  } else if (now_way == "left") {
    j--;
    isGameEnd(i, j);
    snake.push([i, j]);
    if (board[(i, j)] !== 2) {
      snake.shift();
    }
  } else if (now_way == "down") {
    i++;
    isGameEnd();
    snake.push([i, j]);
    if (board[(i, j)] !== 2) {
      snake.shift();
    }
  } else if (now_way == "up") {
    i--;
    isGameEnd(i, j);
    snake.push([i, j]);
    if (board[(i, j)] !== 2) {
      snake.shift();
    }
  }
  count++;
}

console.log(count);
