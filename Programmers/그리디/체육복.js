function solution(n, lost, reserve) {
  var answer = n - lost.length;
  let realLost = lost.filter((x) => !reserve.includes(x));
  let realReserve = reserve.filter((x) => !lost.includes(x));

  answer += lost.length - realLost.length;

  realLost.sort((a, b) => a - b);

  realLost.forEach((l) => {
    if (realReserve.length == 0) {
      return;
    }
    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });
  return answer;
}

console.log(solution(5, [2, 4], [3, 2]));
