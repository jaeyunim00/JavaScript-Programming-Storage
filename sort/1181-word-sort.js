let fs = require("fs");
let input = fs.readFileSync("sort/index.txt").toString().split("\n");

let n = Number(input[0]);

let set1 = new Set();
let arr = [];
for (let i = 1; i <= n; i++) {
  set1.add(input[i]);
}

arr = Array.from(set1);

arr.sort((a, b) => {
  if (a.length != b.length) {
    return a.length - b.length;
  } else {
    return a > b ? 1 : -1;
  }
});

let answer = [];

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}

console.log(answer);
