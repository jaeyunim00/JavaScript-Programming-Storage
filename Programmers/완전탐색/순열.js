const arr = [1, 2, 3];

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((item) => [item]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); //고정을 제외한 나머지.
    const combinations = getCombinations(rest, selectNumber - 1); //나머지에 대한 조합 구하기.
    const attached = combinations.map((combination) => [fixed, ...combination]); //고정 값 + 만들어진 조합.
    results.push(...attached);
  });

  return results;
}

function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((item) => [item]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; //고정을 제외한 나머지.
    const permutations = getPermutations(rest, selectNumber - 1); //나머지 배열에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); //고정값 + 만들어진 순열.

    results.push(...attached);
  });

  return results;
}

//배열이 주어졌을 때, 첫 원소를 제외하고 순열을 만든 후에 첫 원소를 넣을 수 있는 모든 곳에 넣어주면 된다.

// console.log(getPermutations(arr, 3));
console.log(getPermutations(arr, 2));

[1, 2, 3].forEach((f, i, o) => {
  console.log(f, i, o);
});

console.log([1, 2, 3].slice(0, 0));
