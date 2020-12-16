var Queue = function() {
  var someInstance = {};

  var storage = {};
  var count = 0;
  var hasDequeued = 0;
  someInstance.storage = storage;
  someInstance.count = count;
  someInstance.hasDequeued = hasDequeued;

  someInstance.enqueue = function(value) {
    if (someInstance.storage[1] === undefined) {
      someInstance.storage[1] = value;
      someInstance.count ++;
    } else {
      someInstance.count ++;
      someInstance.storage[someInstance.count] = value;
    }
  };

  someInstance.dequeue = function() {
    if (someInstance.storage[1] === undefined) {
      return null;
    } else {
      var removed = someInstance.storage[1];
      delete someInstance.storage[1];
      for (var key in someInstance.storage) {
        var numKey = Number(key);
        numKey --;
        var old = someInstance.storage[key];
        delete someInstance.storage[key];
        someInstance.storage[numKey] = old;
      }
    }
    someInstance.hasDequeued ++;
    return removed;
  };

  someInstance.size = function() {
    var size = 0;
    _.each(someInstance.storage, function(val, key) {
      size ++;
    });
    if (size <= 0) {
      return 0;
    } else {
      return someInstance.count - someInstance.hasDequeued;
    }
  };

  return someInstance;
};

