let fs = require("fs");
let input = fs.readFileSync("sort/index.txt").toString().split("\n");

let info = [...input[0].split(" ").map(Number)];

let a = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(a[info[1] - 1]);
