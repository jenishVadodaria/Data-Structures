class MyStack {
  constructor() {
    this.queue = new Queue();
  }
  // Push element x onto stack.
  push(x) {
    let rotations = this.queue.size();

    this.queue.enqueue(x);
    console.log(`${x} is added to the stack`);

    while (rotations > 0) {
      this.queue.enqueue(this.queue.dequeue());
      rotations--;
    }
  }
  // Removes the element on top of the stack and returns that element.
  pop() {
    let y = this.queue.dequeue();
    console.log(`${y} is removed from stack`);
    return this.queue.dequeue();
  }
  // Get the top element.
  top() {
    let z = this.queue.peek();
    console.log(`${z} is the Top Element in Stack`);
    return this.queue.peek();
  }
  // Returns whether the stack is empty.
  empty() {
    return this.queue.isEmpty();
  }
}

class Queue {
  constructor() {
    this.top = 0;
    this.bottom = 0;
    this.storage = {};
  }

  enqueue(val) {
    this.storage[this.top] = val;
    this.top++;
  }

  dequeue() {
    let removedElement = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return removedElement;
  }

  peek() {
    return this.storage[this.bottom];
  }

  size() {
    return this.top - this.bottom;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

const queue = new MyStack();
queue.push(20); //20 is added to the stack

queue.push(22); //22 is added to the stack

queue.push(24); //24 is added to the stack

queue.pop(); //22 is removed to the stack

queue.push("Asus"); //Asus is added to the stack

queue.top(); //Asus is the Top Element in Stack

queue.push("Macintosh"); //Macintosh is added to the stack

queue.push("MSI"); //MSI is added to the stack

queue.pop(); //MSI is removed from stack
