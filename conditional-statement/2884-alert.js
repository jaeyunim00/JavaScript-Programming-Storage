let fs = require("fs");
let input = fs
  .readFileSync("conditional-statement/index.txt")
  .toString()
  .split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);

// let result = a * 60 + b - 45;

// if (result <= 0) {
//   result += 1440;
// }

// console.log(parseInt(result / 60) + " " + (result % 60));

if (b < 45) {
  a -= 1;
  b += 15;
  if (a < 0) {
    a = 23;
  }
} else {
  b -= 45;
}

console.log(a + " " + b);
