function solution(progresses, speeds) {
  let queue = [];
  let answer = [];

  for (let i = 0; i < progresses.length; i++) {
    let temp = Math.ceil((100 - progresses[i]) / speeds[i]);
    queue.push(temp);
  }

  for (let i = 0; i < queue.length - 1; i++) {
    let count = 1;
    for (let j = i + 1; j < queue.length; j++) {
      if (queue[i] < queue[j]) {
        answer.push(count);
        i = j;
        break;
      } else {
        count++;
      }
    }
    answer.push(count);
  }

  console.log(answer);
  return answer;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
// solution([93, 30, 55], [1, 30, 5]);
