function solution(number, k) {
  answer = "";
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    stack.push(el);
  }
  stack.splice(stack.length - k, k);

  return stack.join("");
}

console.log(solution("1231234", 3));
