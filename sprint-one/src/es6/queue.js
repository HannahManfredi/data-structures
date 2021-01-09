class Queue {

  constructor() {
    this.storage = {};
    this.count = 0;
    this.hasDequeued = 0;
  }

  enqueue(v) {
    this.count ++;
    this.storage[this.count] = v;
  }

  dequeue() {
    var removed = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      var numKey = Number(key);
      numKey --;
      this.storage[numKey] = this.storage[key];
      delete this.storage[key];
    }
    this.count --;
    this.hasDequeued ++;
    return removed;
  }

  size() {
    if (this.count === 0 || this.hasDequeued > this.count) {
      return 0;
    } else if (this.count === this.hasDequeued) {
      return this.count;
    } else {
      return this.count - this.hasDequeued;
    }
  }

}


//{1: a, 2: b, 3: c}
//{1: a}, count = 3, haspopped = 1
//allows sequentially adding and removing items
//queue.enqueue('a');
// expect(queue.dequeue()).to.equal('a');
// queue.enqueue('b');
// expect(queue.dequeue()).to.equal('b');


// Do:
// Work within the src/es6/ folder
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Explicitly declare a class method named constructor
// Declare all other class methods within the class declaration

// Don't:
// Declare the instance explicitly
// Return the instance explicitly
// Add class methods to the class prototype directly