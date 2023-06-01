function solution(priorities, location) {
  let answer = 0;
  let arr = priorities.map((x, i) => {
    return { x, i };
  });
  console.log(arr);

  while (arr.length) {
    const queue = arr.shift();

    if (arr.some((element) => element.x > queue.x)) {
      arr.push(queue);
    } else {
      answer++;
      if (queue.i == location) break;
    }
  }
  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
