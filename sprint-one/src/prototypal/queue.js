//FIFO

var Queue = function() {

  var newQ = Object.create(queueMethods);

  newQ.storage = {};
  newQ.count = 0;
  newQ.hasDequeued = 0;

  return newQ;

};

//{1: a, 2: b, 3: c}
  //{1: a, 2: b}, count = 2
//   queue.enqueue('a');
// expect(queue.dequeue()).to.equal('a'); count = 1, hasDequeued = 1;
// queue.enqueue('b');
// expect(queue.dequeue()).to.equal('b');

var queueMethods = {

  enqueue: function(val) {
    this.count ++;
    this.storage[this.count] = val;
  },

  dequeue: function() {
    var remove = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      var numKey = Number(key);
      numKey --;
      this.storage[numKey] = this.storage[key];
      delete this.storage[key];
    }
    // _.each(this.storage, function(val, key) {
    //   var numKey = Number(key);
    //   numKey --;
    //   this.storage[numKey] = this.storage[key];
    //   delete this.storage[key];
    // });
    this.count --;
    this.hasDequeued ++;
    return remove;
  },

  size: function() {
    if (this.count === 0 || this.hasDequeued > this.count) {
      return 0;
    } else if (this.count === this.hasDequeued) {
      return this.count;
    } else {
      return this.count - this.hasDequeued;
    }
  },

};




// Do:
// Work within the src/protoypal/ folder.
// Use Object.create  with the object from step 2 to create instances of your class
// Don't:
// Use the keyword new