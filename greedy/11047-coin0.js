let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

let [num, total] = input[0].split(" ").map(Number);

let answer = 0;

for (let i = num; i >= 1; i--) {
  let count = parseInt(total / input[i]);
  if (count >= 1) {
    total %= input[i];
  }
  answer += count;
}

console.log(answer);
