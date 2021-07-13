class MyQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }
  // Push element x to the back of queue.

  enqueue(x) {
    this.pushStack.push(x);
    console.log(`${x} added to the queue`);
  }

  // Removes the element from in front of queue and returns that element.

  dequeue() {
    if (this.popStack.empty()) {
      while (!this.pushStack.empty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    let y = this.popStack.pop();
    console.log(`${y} is removed from the queue`);
    return this.popStack.pop();
  }
  // Get the front element.

  peek() {
    if (this.popStack.empty()) {
      while (!this.pushStack.empty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.peek();
  }
  // Returns whether the queue is empty.

  empty() {
    return this.popStack.empty() && this.pushStack.empty();
  }
}

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }

  pop() {
    let top = this.storage[this.size - 1];
    delete this.storage[this.size];
    this.size--;
    return top;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  empty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const stack = new MyQueue();
stack.enqueue(9); //9 added to the queue
stack.enqueue(6); //6 added to the queue

stack.dequeue(); //9 removed to the queue
