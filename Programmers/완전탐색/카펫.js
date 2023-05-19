function solution(brown, yellow) {
  var answer = [];
  let area = brown + yellow;
  let 약수 = [];
  for (let i = 1; i <= area; i++) {
    if (area % i === 0) {
      약수.push(i);
    }
  }
  if (약수.length % 2 !== 0) {
    let index = parseInt(약수.length / 2);
    answer = [약수[index], 약수[index]];
  } else {
    let index_a = 약수.length / 2 - 1;
    let index_b = 약수.length / 2;
    while ((약수[index_a] - 2) * (약수[index_b] - 2) !== yellow) {
      index_a--;
      index_b++;
    }
    answer = [약수[index_a], 약수[index_b]];
  }

  return answer.sort((a, b) => b - a);
}

//가로 >= 새로
//노란색 1~2000000
//갈색 -> 8~5000

console.log(solution(18, 6));
