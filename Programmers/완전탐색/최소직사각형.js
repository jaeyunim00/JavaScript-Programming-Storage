function solution(sizes) {
  sizes.map((x) => x.sort((a, b) => a - b));
  console.log(sizes);
  let width = [];
  let height = [];
  sizes.map((x) => width.push(x[0]));
  sizes.map((x) => height.push(x[1]));

  return Math.max(...width) * Math.max(...height);
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
