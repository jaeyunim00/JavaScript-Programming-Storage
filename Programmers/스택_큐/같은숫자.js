function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] == arr[i]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }

  console.log(answer);
}

solution([4, 4, 4, 3, 3]);
