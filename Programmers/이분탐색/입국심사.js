function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 0;
  let right = times[times.length - 1] * n;
  //0~최대시간의 중간
  let mid = parseInt((left + right) / 2);

  while (left <= right) {
    const cnt = times.reduce((acc, cur) => acc + parseInt(mid / cur), 0);
    if (cnt >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = parseInt((left + right) / 2);
  }

  return left;
}

console.log(solution(6, [7, 10]));
