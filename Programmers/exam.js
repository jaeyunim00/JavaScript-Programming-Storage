function solution(numbers) {
  // numbers = numbers.split("").map(Number);
  // console.log(numbers);

  let temp = [];
  function recur(comb, others) {
    if (comb !== "") {
      temp.push(comb);
    }

    for (let i = 0; i < others.length; i++) {
      console.log(comb, others);
      recur(comb + others[i], others.slice(0, i) + others.slice(i + 1));
    }
  }

  recur("", numbers);
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(solution("17"));
