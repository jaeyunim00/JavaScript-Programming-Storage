function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => String(el));
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => String(fixed) + String(el));
    results.push(...attached);
  });
  return results;
};

console.log(getPermutations([0, 1, 1], 2));

function solution(numbers) {
  let count = 0;
  let arr = numbers.split("").map(Number);
  console.log(arr);
  let temp = "";
  for (let i = 1; i <= numbers.length; i++) {
    temp += getPermutations(arr, i) + ",";
    console.log(temp);
  }
  let my_set = new Set(temp.split(",").map(Number));
  [...my_set].map((x) => {
    if (isPrime(x)) count++;
  });
  return count;
}

console.log(solution("17"));
