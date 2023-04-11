let fs = require("fs");
// let input = fs
//   .readFileSync("sort/index.txt")
//   .toString()
//   .trim()
//   .split("")
//   .map(Number)
//   .sort((a, b) => b - a);

// let answer = "";
// for (x of input) answer += x;
// console.log(answer);
let input = fs.readFileSync("sort/index.txt").toString().split("\n");

let n = input[0]; //수 입력 받기.
//0~9까지 각 숫자의 출현 빈도를 담은 배열 선언.
let cnt = Array(10).fill(0);

for (let x of n) {
  cnt[Number(x)]++;
}

let answer = "";

for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) answer += i + "";
}

console.log(answer);
