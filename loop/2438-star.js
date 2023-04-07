let fs = require("fs");
let input = fs.readFileSync("loop/index.txt").toString().split("\n");

let data = Number(input[0]);

for (let i = 1; i <= data; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}
