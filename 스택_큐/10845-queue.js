let fs = require("fs");
let input = fs.readFileSync("스택_큐/index.txt").toString().split("\n");

let num = Number(input[0]);

let answer = [];

class Queue {
  constructor() {
    this.queue = [];
    this.index = 0;
  }

  push(item) {
    this.queue[this.index] = item;
    this.index++;
  }

  pop() {
    if (this.index <= 0) {
      return -1;
    }
    let temp = this.queue.shift();
    this.index--;
    return temp;
  }

  size() {
    return this.index;
  }

  empty() {
    return this.index <= 0 ? 1 : 0;
  }

  front() {
    if (this.index <= 0) {
      return -1;
    }
    return this.queue[0];
  }

  back() {
    if (this.index <= 0) {
      return -1;
    }
    return this.queue[this.index - 1];
  }
}

const queue = new Queue();

for (let i = 1; i <= num; i++) {
  let command = input[i];
  if (command == "front") {
    answer.push(queue.front());
  } else if (command == "back") {
    answer.push(queue.back());
  } else if (command == "size") {
    answer.push(queue.size());
  } else if (command == "pop") {
    answer.push(queue.pop());
  } else if (command == "empty") {
    answer.push(queue.empty());
  } else {
    command = command.split(" ");
    queue.push(Number(command[1]));
  }
}

console.log(answer.join("\n"));
