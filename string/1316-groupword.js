let fs = require("fs");
let input = fs.readFileSync("string/index.txt").toString().split("\n");

let num = Number(input[0]);
let summary = 0;

for (let i = 1; i <= num; i++) {
  let data = input[i];
  if (check(data)) {
    summary += 1;
  }
}

console.log(summary);

function check(data) {
  //일단 첫번째 자료를 집합에 넣는다.
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length; i++) {
    //오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      // 이미 등장한 적 있는 알파벳 이라면
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}
