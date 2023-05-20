function solution(n, times) {
  let success = 0;
  let arr = [];
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 0; j < times.length; j++) {
  //     arr.push(times[j] * i);
  //   }
  // }
  let times = times.sort((a, b) => a - b);
  let count = 0;
  while (true) {
    if (count == 6) {
      return;
    } else {
    }
  }

  arr = arr.sort((a, b) => a - b);

  while (success !== n - 1) {
    arr = arr.slice(1);
    success++;
  }

  return arr[0];
}

console.log(solution(6, [7, 10]));
