// YT : beiatrix - https://www.youtube.com/watch?v=1AJ4ldcH2t4
// Code - https://replit.com/@beiatrix/MeanImpureArray

class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
    this.max_length = 10;
  }

  enqueue(element) {
    if (this.tail == this.max_length)
      return console.log(`The Queue has reached its max limit`);
    else {
      this.items[this.tail] = element;
      console.log(`${element} added to ${this.tail}`);
      this.tail += 1;
    }
  }

  dequeue() {
    let deleteItem = this.items[this.head];
    delete this.items[this.head];
    console.log(`${deleteItem} removed from ${this.head}`);
    this.head++;
    return deleteItem;
  }

  clear() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
    console.log("Stack cleared..");
    return this.items;
  }

  Sort() {
    if (this.items == 0) return `The queue is empty`;
    else {
      let a = this.items.sort();
      console.log(`Sorted Stack : [${a}]`);
      return a;
    }
  }

  Reverse() {
    if (this.items == 0) return `The stack is empty`;
    else {
      let rotations = this.items.length;
      let items1 = [];

      while (rotations > 0) {
        items1.push(this.items.pop());
        rotations--;
      }
      console.log(`Stack after reversing it : [${items1}]`);
    }
  }
}

const queue = new Queue();

queue.enqueue("a"); //20 added to 0
queue.enqueue(30); //30 added to 1
queue.enqueue(40); //40 added to 2
queue.enqueue(20); //40 added to 2

// queue.dequeue(); //20 removed from 0
// queue.dequeue(); //30 removed from 1
queue.Sort(); //Sorted Stack : [20,30,40,a]
queue.Reverse(); //Stack after reversing it : [a,40,30,20]
