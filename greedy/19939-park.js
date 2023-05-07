let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

//K개의 바구니(팀).
//N개의 공을 K개의 바구니에 담아야한다.

//공의 개수가 바구니마다 모두 다르게,
//각 바구니는 1개 이상의 공
//하나도 빠짐없이.
//MAX바구니 - MiN바구니 = 최대가 되는 값.
const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

const combination = (items, index) => {
  if (items.length == pick) {
    result.push(items);
    return;
  }
  for (let i = index; i < list.length; i++) {
    combination(`${items}${list[i]}`, i + 1);
  }
};

combination("", 0);

console.log(result);
