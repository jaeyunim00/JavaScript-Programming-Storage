let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

let num = Number(input[0]);
let balloons = input[1].split(" ").map(Number);

let count = 0;

let arrow = new Array(1000001).fill(0); //각 높이에 화사링 몇 개 있는지
console.log(arrow);
for (let x of balloons) {
  if (arrow[x] > 0) {
    //해당높이에 화살이 있다면
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    arrow[x - 1] += 1;
    count++;
  }
}
console.log(count);
