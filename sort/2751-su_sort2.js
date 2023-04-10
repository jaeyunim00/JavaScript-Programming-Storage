let fs = require("fs");
let input = fs
  .readFileSync("sort/index.txt")
  .toString()
  .split("\n")
  .map(Number);

let n = input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => a - b);

console.log(arr);

let answer = "";

for (let j = 0; j < arr.length; j++) {
  answer += arr[j] + "\n";
}

console.log(answer);
