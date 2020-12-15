//LIFO, added to top (end), removed from top (end), beginning is last out

//allows sequentially additing and removing items

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  var count = 0;

  // Implement the methods below

  //add to stack
  someInstance.push = function(value) {
    count ++;
    storage[count] = value;
  };

  //remove from stack
  someInstance.pop = function() {
    var removed = storage[count];
    delete storage[count];
    count --;
    return removed;
  };

  //measure stack size (number of keys)
  someInstance.size = function() {
    if (count <= 0) {
      return 0;
    } else {
      return count;
    }
  };

  return someInstance;

};
