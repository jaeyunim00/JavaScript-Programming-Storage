let fs = require("fs");
let input = fs
  .readFileSync("array/index.txt")
  .toString()
  .split("\n")
  .map(Number);

//첫 번째 방법
// let max = -1000001;
// let index = 0;

// for (let i = 0; i < input.length; i++) {
//   if (input[i] > max) {
//     max = input[i];
//     index = i + 1;
//   }
// }

//두 반째 방법
let max = Math.max(...input);
let index = input.indexOf(max) + 1;

console.log(max + "\n" + index);
