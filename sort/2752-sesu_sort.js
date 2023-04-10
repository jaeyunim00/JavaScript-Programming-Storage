let fs = require("fs");

let input = fs.readFileSync("sort/index.txt").toString().split(" ").map(Number);

console.log(
  ...input.sort((a, b) => {
    return a - b;
  })
);
