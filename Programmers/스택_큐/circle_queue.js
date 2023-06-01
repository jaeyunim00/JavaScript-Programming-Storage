class Circle_Queue {
  constructor(size) {
    this.maxQueueSize = size;
    this.array = [];
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.front == this.rear;
  }

  isFull() {
    return (this.rear + 1) % this.maxQueueSize == this.front;
  }

  enqueue(item) {
    if (this.isFull()) {
      console.log("queue 포화");
    } else {
      this.rear = (this.rear + 1) % this.maxQueueSize;
      this.array[this.rear] = item;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("queue 빔");
    } else {
      this.front = (this.front + 1) % this.maxQueueSize;
      return this.array[this.front];
    }
  }
}
