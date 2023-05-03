let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

// let num = Number(input[0]);
// let arr = [];
// let fibo = [];

// for (let i = 1; i <= num; i++) {
//   arr.push(Number(input[i]));
// }

// function getFibo(n) {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   return getFibo(n - 1) + getFibo(n - 2);
// }

// let data = 100;

// while (data !== 0) {
//   let max_fibo = 0;
//   let count = 1;
//   while (data > max_fibo) {
//     max_fibo = getFibo(count);
//     count++;
//   }
//   data -= getFibo(count - 2);
// }

// console.log(data);

fibo = [];
fibo.push(0);
fibo.push(1);

while (fibo[fibo.length - 1] < 1e9)
  fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
  let n = Number(input[tc]);
  let result = [];
  let i = fibo.length - 1;
  while (n > 0) {
    if (n >= fibo[i]) {
      n -= fibo[i];
      result.push(fibo[i]);
    }
    i--;
  }
  let answer = "";
  for (let i = result.length - 1; i >= 0; i--) answer += result + " ";
  console.log(answer);
}
