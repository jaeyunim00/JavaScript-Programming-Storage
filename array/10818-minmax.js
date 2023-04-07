let fs = require("fs");
let input = fs.readFileSync("array/index.txt").toString().split("\n");

let temp = Number(input[0]);
let data = input[1].split(" ").map(Number);

let min = Math.min(...data);
let max = Math.max(...data);

console.log(min + " " + max);
