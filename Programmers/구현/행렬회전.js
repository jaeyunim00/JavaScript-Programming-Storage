function solution(rows, columns, queries) {
  let answer = [];

  //초기 배열 설정
  let init_arr = [];
  for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = i * columns + 1; j <= columns + i * columns; j++) {
      temp.push(j);
    }
    init_arr.push(temp);
  }

  console.log(init_arr);

  //메인
  for (let k = 0; k < queries.length; k++) {
    let x1 = queries[k][0] - 1,
      y1 = queries[k][1] - 1,
      x2 = queries[k][2] - 1,
      y2 = queries[k][3] - 1;
    let temp = [];
    let x_p = x1,
      y_p = y1;

    while (true) {
      if (y_p >= y2) {
        break;
      }
      temp.push(init_arr[x_p][y_p]);
      y_p++;
      init_arr[x_p][y_p - 1] = init_arr[x_p][y_p];
    }
    while (true) {
      if (x_p >= x2) {
        break;
      }
      temp.push(init_arr[x_p][y_p]);
      x_p++;
      init_arr[x_p - 1][y_p] = init_arr[x_p][y_p];
    }
    while (true) {
      if (y_p <= y1) {
        break;
      }
      temp.push(init_arr[x_p][y_p]);
      y_p--;
      init_arr[x_p][y_p + 1] = init_arr[x_p][y_p];
    }
    while (true) {
      if (x_p <= x1) {
        break;
      }
      temp.push(init_arr[x_p][y_p]);
      x_p--;
      init_arr[x_p + 1][y_p] = init_arr[x_p][y_p];
    }

    answer.push(Math.min(...temp));
    let poped = temp.pop();
    temp.unshift(poped);

    while (true) {
      if (y_p >= y2) {
        break;
      }
      init_arr[x_p][y_p] = temp.shift();
      y_p++;
    }
    while (true) {
      if (x_p >= x2) {
        break;
      }
      init_arr[x_p][y_p] = temp.shift();
      x_p++;
    }
    while (true) {
      if (y_p <= y1) {
        break;
      }
      init_arr[x_p][y_p] = temp.shift();
      y_p--;
    }
    while (true) {
      if (x_p <= x1) {
        break;
      }
      init_arr[x_p][y_p] = temp.shift();
      x_p--;
    }
  }

  return answer;
}

console.log(
  solution(3, 4, [
    [1, 1, 2, 2],
    [1, 1, 2, 2],
    [1, 1, 2, 2],
  ])
);
