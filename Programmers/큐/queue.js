class Queue {
  constructor() {
    this.queue = [];
    this.index = 0;
  }

  enqueue(item) {
    this.queue[this.index] = item;
    this.index++;
  }

  dequeue() {
    if (this.index <= 0) {
      return -1;
    }
    let temp = this.queue.shift();
    this.index--;
    return temp;
  }

  size() {
    return this.index + 1;
  }

  empty() {
    return this.index <= 0 ? 1 : 0;
  }

  front() {
    return this.queue[0];
  }

  back() {
    return this.queue[this.index];
  }
}
