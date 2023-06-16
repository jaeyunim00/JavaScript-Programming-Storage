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

console.log(getPermu([1, 2, 3, 4], 2));
