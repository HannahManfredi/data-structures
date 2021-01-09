//LIFO

var Stack = function() {

  var stackInstance = Object.create(stackMethods);

  stackInstance.storage = {};
  stackInstance.count = 0;
  stackInstance.hasPopped = 0;

  return stackInstance;
};

var stackMethods = {

  push: function(val) {
    this.count ++;
    this.storage[this.count] = val;
  },

  pop: function() {
    var remove = this.storage[this.count];
    delete this.storage[this.count];
    this.count --;
    this.hasPopped ++;
    return remove;
  },

  size: function() {
    if (this.count === 0 || this.hasPopped > this.count) {
      return 0;
    } else {
      return this.count;
    }
  }

};
