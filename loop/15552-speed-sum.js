let fs = require("fs");
let input = fs.readFileSync("loop/index.txt").toString().split("\n");

let temp = Number(input[0]);

//for문 안에서 console.log를 하는 것이 아닌, 다 더하고 마지막에 anwer에 하는게 중요함.
let answer = "";
for (let i = 1; i <= temp; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  answer += a + b + "\n";
}

console.log(answer);
