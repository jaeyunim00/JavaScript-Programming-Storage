let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

let n = Number(input[0]);
let data = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let acc = 0;

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j <= i; j++) {
    acc += data[j];
  }
}

console.log(acc);
