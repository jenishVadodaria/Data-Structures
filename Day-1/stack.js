// YT: Traversy Media - https://www.youtube.com/watch?v=wtynhUwS5hI
// YT: CS DOJO - https://www.youtube.com/watch?v=A3ZUpyrnCbM
// Code - https://gist.github.com/bradtraversy/6386eac2ab15842d1e8e0424a727a81d

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
    this.max_length = 10;
  }

  push(element) {
    if (this.count !== this.max_length) {
      this.items[this.count] = element;
      console.log(`${element} added to ${this.count}`);
      this.count += 1;
      return this.count - 1;
    } else {
      return console.log(`The Stack has reached its max limit`);
    }
  }

  pop() {
    if (this.count == 0) return undefined;
    this.count -= 1;
    let deleteItem = this.items[this.count];
    console.log(`${deleteItem} removed from ${this.count}`);
    return deleteItem;
  }

  // Check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared..");
    return this.items;
  }

  // Day-3 Sort and Reverse
  Sort() {
    if (this.items == 0) return `The stack is empty`;
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

const stack = new Stack();

stack.push(1000); //1000 added to 0
stack.push(9000); //2000 added to 1

stack.peek(); //Top element is 2000

stack.push(6000); //6000 added to 2

stack.Sort(); //Sorted Stack : [1000,6000,9000]
stack.Reverse(); //Stack after reversing it : 9000,6000,1000
