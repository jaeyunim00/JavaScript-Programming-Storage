let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

let box_size = input[0]
  .split(" ")
  .map(Number)
  .reduce((acc, cur) => acc * cur, 1);

let cube_num = Number(input[1]);

let cubes = [];

let count = 0;

for (let i = 0; i < cube_num; i++) {
  let temp = (2 ** Number(input[i + 2].split(" ")[0])) ** 3;
  let temp_num = Number(input[i + 2].split(" ")[1]);
  cubes.push([temp, temp_num]);
}

for (let i = cube_num - 1; i >= 0; i--) {
  while (cubes[i][1] !== 0 && box_size > 0) {
    cubes[i][1]--;
    console.log(box_size);
    box_size -= cubes[i][0];
    count++;
    if (box_size == 0) {
      console.log(count);
    }
  }
}

console.log((2 ** Number(input[4].split(" ")[0])) ** 3);

console.log(box_size, cubes);
