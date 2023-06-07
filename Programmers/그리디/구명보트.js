function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => b - a);

  for (let left = 0, right = people.length - 1; left <= right; left++) {
    if (people[left] + people[right] <= limit) {
      right--;
    }
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
