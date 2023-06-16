// function getCombinations(arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) {
//     console.log(
//       "(selectNumber == 1일때)combi: ",
//       arr.map((item) => [item])
//     );
//     return arr.map((item) => [item]);
//   }
//   //기저조건: 1개를 뽑을 때, 모든 배열의 원소를 하나씩 선택해 배열로 리턴.
//   arr.forEach((fixed, index, origin) => {
//     //배열의 모든 원소를 처음부터 끝까지 한번씩 고정되게.
//     const rest = origin.slice(index + 1);
//     //고정을 제외한 나머지.
//     const combinations = getCombinations(rest, selectNumber - 1);
//     //나머지에 대한 조합 구하기.
//     console.log(
//       "attached: ",
//       combinations.map((el) => [fixed, ...el])
//     );
//     const attached = combinations.map((el) => [fixed, ...el]);
//     //고정 값 + 만들어진 조합.
//     results.push(...attached);
//     console.log("result:", results);
//   });

//   return results;
// }

// console.log(getCombinations([1, 2, 3, 4], 3));

// console.log([].map((x) => [x]));

function getCombinations(arr, selectNumber) {
  const result = [];
  if (selectNumber == 1) {
    return arr.map((x) => [x]);
  }
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combi = getCombinations(rest, selectNumber - 1);
    const attached = combi.map((x) => [fixed, ...x]);
    result.push(...attached);
  });

  return result;
}

console.log(getCombinations([1, 2, 3, 4], 2));
