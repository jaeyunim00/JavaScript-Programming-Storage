let fs = require("fs");
let input = fs.readFileSync("스택/index.txt").toString().split("\n");

let num = Number(input[0]);

let answer = [];

class Stack {
  constructor() {
    this.stack = [];
    this.index = 0;
  }

  push(item) {
    this.stack[this.index] = item;
    this.index++;
  }

  pop() {
    if (this.index <= 0) {
      return -1;
    }
    const poped = this.stack[this.index - 1];
    this.index--;
    return poped;
  }

  size() {
    return this.index;
  }

  empty() {
    return this.index == 0 ? 1 : 0;
  }

  top() {
    if (this.index <= 0) {
      return -1;
    }
    return this.stack[this.index - 1];
  }
}

const stack = new Stack();

for (let i = 1; i <= num; i++) {
  let command = input[i];
  // console.log(command);
  if (command == "top") {
    answer.push(stack.top());
  } else if (command == "size") {
    answer.push(stack.size());
  } else if (command == "pop") {
    answer.push(stack.pop());
  } else if (command == "empty") {
    answer.push(stack.empty());
  } else {
    command = command.split(" ");
    stack.push(Number(command[1]));
  }
}

console.log(answer.join("\n"));
