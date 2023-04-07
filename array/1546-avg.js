let fs = require("fs");
let input = fs.readFileSync("array/index.txt").toString().split("\n");

let data = input[1].split(" ").map(Number);
let best = Math.max(...data);
let sum = 0;
for (let i = 0; i < data.length; i++) {
  let newScore = (data[i] / best) * 100;
  sum += newScore;
}

console.log(sum / data.length);
