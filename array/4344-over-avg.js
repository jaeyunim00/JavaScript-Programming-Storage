let fs = require("fs");
let input = fs.readFileSync("array/index.txt").toString().split("\n");

let num = Number(input[0]);
let data;
let sum = 0;
let avg;
let over = 0;

for (let i = 0; i < num; i++) {
  data = input[i + 1].split(" ").map(Number);
  for (let j = 1; j < data.length; j++) {
    sum += data[j];
  }

  avg = sum / (data.length - 1);

  for (let k = 1; k < data.length; k++) {
    if (data[k] > avg) {
      over++;
    }
  }

  console.log(((over / (data.length - 1)) * 100).toFixed(3) + "%");
  sum = 0;
  over = 0;
}
