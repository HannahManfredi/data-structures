class Stack {

  constructor() {
    this.storage = {};
    this.count = 0;
    this.hasPopped = 0;
  }

  push(v) {
    this.count ++;
    this.storage[this.count] = v;
  }

  pop() {
    var remove = this.storage[this.count];
    delete this.storage[this.count];
    this.count --;
    this.hasPopped ++;
    return remove;
  }

  size() {
    if (this.hasPopped > this.count) {
      return 0;
    }
    return this.count;
  }

}

