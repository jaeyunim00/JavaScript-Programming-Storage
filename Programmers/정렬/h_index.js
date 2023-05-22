function solution(citations) {
  let books = citations.sort((a, b) => b - a);
  let now = 0;
  for (let i = 0; i < books.length; i++) {
    if (i < books[i]) {
      now++;
    }
  }
  return now;
}

console.log(solution([46, 328, 8344, 164, 1]));
