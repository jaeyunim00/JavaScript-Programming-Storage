function solution(arr) {
  var answer = [];

  let n = arr.length;

  let str = ["12345", "21232425", "3311224455"];

  for (let i = 0; i < 3; i++) {
    let 몫 = 0;
    let 나머지 = 0;
    let count = 0;
    if (str[i].length > n) {
      나머지 = n % str[i].length;
    } else {
      몫 = parseInt(n / str[i].length);
      나머지 = n % str[i].length;
    }
    str[i] = str[i].repeat(몫) + str[i].slice(0, 나머지 + 1);

    for (let j = 0; j < n; j++) {
      if (str[i][j] == arr[j]) {
        count++;
      }
    }
    answer.push(count);
  }

  result = [];
  for (let k = 0; k < answer.length; k++) {
    if (answer[k] === Math.max(...answer)) {
      result.push(k + 1);
    }
  }

  return result;
}

console.log(solution([1, 3, 2, 4, 2]));
