var Queue = function() {

  this.storage = {};
  this.count = 0;
  this.hasDequeued = 0;

};

Queue.prototype.enqueue = function(v) {
  this.count ++;
  this.storage[this.count] = v;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
  if (this.count === 0 || this.hasDequeued > this.count) {
    return 0;
  } else if (this.count === this.hasDequeued) {
    return this.count;
  } else {
    return this.count - this.hasDequeued;
  }
};

//{1: a, 2: b, 3: c}
//{1: a}, count = 3, haspopped = 1
//allows sequentially adding and removing items
//queue.enqueue('a');
// expect(queue.dequeue()).to.equal('a');
// queue.enqueue('b');
// expect(queue.dequeue()).to.equal('b');