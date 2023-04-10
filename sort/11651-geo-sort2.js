let fs = require("fs");
let input = fs.readFileSync("sort/index.txt").toString().split("\n");

let n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  let data = input[i].split(" ").map(Number);
  arr.push(data);
}

arr.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else {
    return a[0] - b[0];
  }
});

let answer = [];

for (let j = 0; j < n; j++) {
  answer += arr[j][0] + " " + arr[j][1] + "\n";
}

console.log(answer);
