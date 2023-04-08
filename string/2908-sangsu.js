let fs = require("fs");
let input = fs.readFileSync("string/index.txt").toString().split(" ");

let a = input[0][2] + input[0][1] + input[0][0];
let b = input[1][2] + input[1][1] + input[1][0];

console.log(Math.max(Number(a), Number(b)));
