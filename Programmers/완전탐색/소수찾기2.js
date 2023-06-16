function solution(numbers) {
  //1. 모든 숫자 조합을 만든다
  let numberSet = [];
  numbers = numbers.split("");

  for (let i = 1; i <= numbers.length; i++) {
    let temp = getPermu(numbers, i);
    numberSet.push(temp);
  }
  //2. 소수인 걸 찾는다.
  let answer = 0;
  let temp = [];
  numberSet.map((x) => {
    x.map((y) => {
      console.log(Number(y.join("")));
      if (isPrime(Number(y.join("")))) {
        temp.push(Number(y.join("")));
      }
    });
  });

  return [...new Set(temp)].length;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function getPermu(arr, selectNumber) {
  if (selectNumber == 1) {
    return arr.map((x) => [x]);
  }
  let result = [];
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permu = getPermu(rest, selectNumber - 1);
    const attached = permu.map((x) => [fixed, ...x]);
    result.push(...attached);
  });
  return result;
}

console.log(solution("011"));
