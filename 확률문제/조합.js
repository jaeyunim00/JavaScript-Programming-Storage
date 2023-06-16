function getCombi(arr, selectNumber) {
  if (selectNumber == 1) {
    return arr.map((x) => [x]);
  }
  let result = [];
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combi = getCombi(rest, selectNumber - 1);
    const attached = combi.map((x) => [fixed, ...x]);
    result.push(...attached);
  });
  return result;
}

console.log(getCombi([1, 2, 3, 4], 2));
