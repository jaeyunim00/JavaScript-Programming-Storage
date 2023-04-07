let fs = require("fs");
let input = fs
  .readFileSync("conditional-statement/index.txt")
  .toString()
  .split("\n");

let [a, b, c] = input[0].split(" ").map(Number);

console.log(a, b, c);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b || a === c || b === c) {
  if (a === b || a === c) {
    console.log(1000 + a * 100);
  } else {
    console.log(1000 + b * 100);
  }
} else {
  let max = Math.max(a, b, c);
  console.log(max * 100);
}
