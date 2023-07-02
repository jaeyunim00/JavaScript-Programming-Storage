let fs = require("fs");
let input = fs
  .readFileSync("Programmers/구현/index.txt")
  .toString()
  .split("\n");

let bowls = [input[1].split(" ").map(Number)];

//1. min어항에 1마리를 넣는다.
let min = Math.min(...bowls.flat());
for (let i = 0; i < bowls[0].length; i++) {
  if (bowls[0][i] == min) {
    bowls[0][i] += 1;
  }
}

//2. 어항을 쌓는다.
let first = [bowls[0].shift()];
bowls.unshift(first);

console.log(bowls);
//3. 때어서 90도 회전 반복(공중부양이 안되면 break;)
let temp = [];
for (let i = 0; i < bowls.length; i++) {
  for (let j = 0; j < bowls[0].length; j++) {
    temp.push(bowls[i][j]);
  }
}

//1. min어항에 1마리를 넣는다.
//2. 어항을 쌓는다.
//3. 때어서 90도 회전 반복(공중부양이 안되면 break;)
//4. 물고기 수 조절
//Math.floor(인접한 두 어항에 대한 물고기 수의 차이 / 5) > 0
//-> 그 몫만큼 작은 쪽에 넘겨줌
//모든 작업 완료후 어항 펼치기
//(절반[0] 180도회전 + 올리기) * 2;
//어항 펼치기
