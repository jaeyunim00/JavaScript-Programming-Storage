let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

const city_num = Number(input[0]);

const distance_arr = input[1].split(" ").map(Number);
const totalDistance = distance_arr.reduce((a, b) => a + b);

const cities = input[2].split(" ").map(Number);

let answer = 0;

let current_city = cities[0];

for (let i = 0; i < city_num - 1; i++) {
  if (current_city > cities[i]) {
    current_city = cities[i];
  }
  answer += distance_arr[i] * current_city;
}

console.log(answer);
