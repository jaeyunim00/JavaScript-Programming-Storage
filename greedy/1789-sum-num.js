let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

//n개의 자연수를 합하면 200이나온다.
//n의 최댓값은?

let data = Number(input[0]);

let count = 0;
let sum = 0;

while (data >= sum) {
  count++;
  sum += count;
}

console.log(count - 1);
