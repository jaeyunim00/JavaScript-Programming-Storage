class Stack {
  constructor() {
    this.stack = [];
    this.index = 0;
  }

  push(item) {
    this.stack[this.index] = item;
    index++;
  }

  pop() {
    if (this.index <= 0) {
      return null;
    }
    const poped = this.stack[this.index];
    index--;
    return poped;
  }

  size() {
    return this.index + 1;
  }

  empty() {
    return this.index == 0 ? 1 : 0;
  }

  top() {
    if (this.index <= 0) {
      return -1;
    }
    return this.stack[this.index];
  }
}
