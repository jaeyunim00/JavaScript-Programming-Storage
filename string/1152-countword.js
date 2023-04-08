let fs = require("fs");
let input = fs.readFileSync("string/index.txt").toString().split("\n");

let data = input[0].split(" ");

let result = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] !== "") {
    result++;
  }
}

console.log(result);

//trim() 메서드는 문자열 양 끝의 공백을 제거한다.
