var Queue = function() {
  var someInstance = {};

  var storage = {};
  var count = 0;
  var hasDequeued = 0;
  someInstance.storage = storage;
  someInstance.count = count;
  someInstance.hasDequeued = hasDequeued;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.count ++;
    someInstance.storage[someInstance.count] = value;
  };

  someInstance.dequeue = function() {
    let countKeys = Object.keys(someInstance.storage);
    var sorted = countKeys.sort((a, b) => a - b);
    var remove = sorted.shift();
    var dequeued = someInstance.storage[remove];
    delete someInstance.storage[remove];
    someInstance.hasDequeued ++;
    return dequeued;
  };

  someInstance.size = function() {
    if (Object.keys(someInstance.storage).length <= 0) {
      return 0;
    } else {
      return someInstance.count - someInstance.hasDequeued;
    }
  };

  return someInstance;
};
