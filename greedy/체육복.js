function solution(n, lost, reserve) {
  let no_cloth = [];
  for (let i = 1; i <= n; i++) {
    no_cloth.push(i);
  }

  no_cloth = no_cloth.filter((num) => !lost.includes(num));

  for (let j = 0; j < reserve.length; j++) {
    if (lost.includes(reserve[j] - 1) && lost.includes(reserve[j] + 1)) {
      if (reserve[j] - 1 == reserve[j - 1] + 1) {
        continue;
      } else if (reserve[j] - 1 !== reserve[j - 1] + 1) {
        no_cloth.push(reserve[j] - 1);
      } else if (reserve[j] + 1 == reserve[j + 1] - 1) {
        continue;
      } else if (reserve[j] + 1 !== reserve[j + 1] - 1) {
        no_cloth.push(reserve[j] + 1);
      }
    } else if (lost.includes(reserve[j] - 1)) {
      no_cloth.push(reserve[j] - 1);
    } else {
      no_cloth.push(reserve[j] + 1);
    }
  }

  const set = new Set(no_cloth);
  const answer = [...set];

  return answer.length;
}
