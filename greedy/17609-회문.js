// let fs = require("fs");
// let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

// let num = Number(input[0]);

// let count = 0;

// for (let j = 1; j <= num; j++) {
//   count = 1;
//   console.log(solution([...input[j]]));
// }

// function solution(arr) {
//   if (count < 0) {
//     return 2;
//   }
//   if (arr.length == 1 || arr.length == 0) {
//     if (count == 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
//   if (arr[0] == arr[arr.length - 1]) {
//     arr.pop();
//     arr.shift();
//     return solution(arr);
//   } else {
//     k = arr.shift();
//     if (arr[0] !== arr[arr.length - 1]) {
//       arr.unshift(k);
//       arr.pop();
//       count--;
//       return solution(arr);
//     } else {
//       count--;
//       return solution(arr);
//     }
//   }
// }

const fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().trim().split("\n");

const t = +input.shift();
const answer = [];

const check = (word, left, right) => {
  while (left <= right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else return [left, right];
  }
  return [left, right];
};

for (let i = 0; i < t; i++) {
  const word = input[i];
  const [left, right] = check(word, 0, word.length - 1);

  if (left > right) answer.push(0);
  else {
    const [left2, right2] = check(word, left + 1, right);
    const [left3, right3] = check(word, left, right - 1);
    if (left2 > right2 || left3 > right3) answer.push(1);
    else answer.push(2);
  }
}
console.log(answer.join("\n"));
