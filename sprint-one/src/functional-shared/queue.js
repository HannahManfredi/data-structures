//FIFO

var Queue = function() {

  var queueInstance = {};

  queueInstance.storage = {};
  queueInstance.count = 0;
  queueInstance.dequeued = 0;

  _.extend(queueInstance, queueMethods);

  return queueInstance;

};

var queueMethods = {

  enqueue: function(value) {
    if (this.storage[1] === undefined) {
      this.storage[1] = value;
      this.count ++;
    } else {
      this.count ++;
      this.storage[this.count] = value;
    }
  },

  dequeue: function() {
    var removeMe = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      var numKey = Number(key);
      numKey --;
      var old = this.storage[key];
      delete this.storage[key];
      this.storage[numKey] = old;
    }
    this.dequeued ++;
    return removeMe;
  },

  size: function() {
    var size = 0;
    _.each(this.storage, function(val, key) {
      size ++;
    });
    if (size <= 0) {
      return 0;
    } else {
      return this.count - this.dequeued;
    }
  }

};