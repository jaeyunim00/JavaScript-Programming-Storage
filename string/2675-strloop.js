let fs = require("fs");
let input = fs.readFileSync("string/index.txt").toString().split("\n");

let tc = Number(input[0]);

for (let i = 0; i < tc; i++) {
  let data = input[i + 1].split(" ");
  let data_n = Number(data[0]);
  let data_set = [...data[1]];
  let result = "";

  data_set.map((x) => {
    for (let j = 0; j < data_n; j++) {
      result += x;
    }
  });

  console.log(result);
}
