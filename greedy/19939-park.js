let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split(" ");

//K개의 바구니(팀).
//N개의 공을 K개의 바구니에 담아야한다.

//공의 개수가 바구니마다 모두 다르게,
//각 바구니는 1개 이상의 공
//하나도 빠짐없이.
//MAX바구니 - MiN바구니 = 최대가 되는 값.
let n = Number(input[0]);
let k = Number(input[1]);

function solution(n, k) {
  let min = (k * (k + 1)) / 2;

  if (min > n) {
    return -1;
  } else if (min === n) {
    return k - 1;
  } else {
    let temp = Array(k)
      .fill()
      .map((_, i) => i + 1);

    for (let i = k - 1; i >= 0; i--) {
      temp[i]++;
      min++;
      if (min === n) {
        return temp[k - 1] - temp[0];
      }
      if (i === 0) {
        i = k;
      }
    }
  }
}

console.log(solution(n, k));
