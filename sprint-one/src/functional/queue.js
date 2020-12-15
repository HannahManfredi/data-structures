//FIFO, enter at back, leave from front

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) { //{1:'a', 2:'b', 3:'c'} [1, 2, 3]
    count ++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    var countKeys = Object.keys(storage);
    console.log(countKeys);
    var remove = countKeys[0]; //'a'
    var dequeued = storage[remove];
    delete storage[remove];
    count --;
    return dequeued;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
