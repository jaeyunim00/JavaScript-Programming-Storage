let fs = require("fs");
let input = fs.readFileSync("std-in-out/index.txt").toString().split("\n");

let a = Number(input[0]); //'123'
let b = [...input[1]]; //['4', '5', '6']
let c = Number(input[1]);

for (let i = 2; i >= 0; i--) {
  console.log(a * Number(b[i]));
}

console.log(a * c);
