let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("-");

let value = [];

let answer = 0;

for (let i = 0; i < input.length; i++) {
  value.push(
    input[i]
      .split("+")
      .map(Number)
      .reduce((acc, cur) => acc + cur)
  );
}

for (let j = 0; j < value.length; j++) {
  if (j == 0) {
    answer += value[j];
    continue;
  }
  answer -= value[j];
}

console.log(answer);
