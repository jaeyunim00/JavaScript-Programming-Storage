let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

let data = Number(input[0]);

let count = 0;
while (data != 0) {
  if (data % 5 == 0) {
    //5로 나누어지면 (5의 배수일때)
    count += parseInt(data / 5); //count = count + (data를 5로나눈 몫)
    break;
  }
  data -= 3;
  count++;
  if (data < 0) {
    count = -1;
    break;
  }
}

console.log(count);
