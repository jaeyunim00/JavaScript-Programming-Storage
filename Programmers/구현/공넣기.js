let fs = require("fs");
let input = fs
  .readFileSync("Programmers/구현/index.txt")
  .toString()
  .split("\n");

let [n, m] = input.shift().split(" ").map(Number);

let answer = Array.from({ length: n }, (x) => (x = 0));

for (let x = 0; x < input.length; x++) {
  let [i, j, k] = input[x].split(" ").map(Number);
  for (let start = i - 1; start <= j - 1; start++) {
    answer[start] = k;
  }
}

console.log(answer.join(" "));
