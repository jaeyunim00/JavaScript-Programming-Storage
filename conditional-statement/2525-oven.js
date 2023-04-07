let fs = require("fs");
let input = fs
  .readFileSync("conditional-statement/index.txt")
  .toString()
  .split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let totalMinute = a * 60 + b + c;

totalMinute %= 1440;

let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);

// let hour = Number(input[0].split(" ")[0]);
// let minute = Number(input[0].split(" ")[1]);

// let time = Number(input[1]);
// let t_1 = parseInt(time / 60);
// let t_2 = time % 60;

// if (minute + t_2 >= 60) {
//   hour += t_1 + 1;
//   if (hour >= 24) {
//     hour = t_1;
//   }
//   minute -= 60 - t_2;
// } else {
//   hour += t_1;
//   if (hour >= 24) {
//     hour = t_1;
//   }
//   minute += t_2;
// }

// console.log(hour + " " + minute);
