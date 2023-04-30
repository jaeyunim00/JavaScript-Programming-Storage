let fs = require("fs");
let input = fs.readFileSync("greedy/index.txt").toString().split("\n");

let num = Number(input[0]);

let meeting = [];

let answer = 1;

for (let i = 1; i < num + 1; i++) {
  meeting.push(input[i].split(" ").map(Number));
}

meeting = meeting.sort((a, b) => {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

console.log(meeting);

let current = meeting[0][1];

for (let i = 1; i < meeting.length; i++) {
  if (meeting[i][0] >= current) {
    current = meeting[i][1];
    answer++;
  }
}

console.log(answer);
//종료 시점이 이른 회의부터 간다.
//다음 종료 시점이 이른 회의로 가는데, 겹치지 않게 간다.
