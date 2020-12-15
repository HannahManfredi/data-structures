//LIFO, added to top (end), removed from top (end), beginning is last out

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // someInstance[storage] = storage;
  var count = 0;

  // Implement the methods below

  //add to stack
  someInstance.push = function(value) { //{1:'a', 2:'b'}, count = 2
    count ++;
    storage[count] = value;
    // return storage;
  };
  // console.log(someInstance.push('a'));

  //remove from stack
  someInstance.pop = function() { //top = count - 1
    //decrement count to access last in value

    //delete last in value
    var remove = storage[count];
    delete remove;
    console.log('make sure remove deleted: ', storage)
    count --;
    // return storage;
  };

  //measure stack size (# of keys)
  someInstance.size = function() {
    if (count <= 0) {
      return 0;
    } else {
      return count;
    }
  };

  // console.log('storage: ', storage);
  // console.log('someInstance: ', someInstance);

  return someInstance;

};

var x = Stack();
console.log(x);

